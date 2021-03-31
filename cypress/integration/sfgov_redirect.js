const titleA = "Transaction A";
const inputElements = {
  textfieldTitle: '[data-drupal-selector="edit-title-0-value"]',
  inputServiceAdd:
    '[data-drupal-selector="field-department-services-department-service-section-add-more"]',
  serviceSectionTitle:
    '[name="field_department_services[0][subform][field_dept_service_section_title][0][value]"]',
  inputServiceAddItem:
    '[data-drupal-selector="edit-field-department-services-0-subform-field-dept-service-sect-services-add-more"]',
  serviceSectionAutocomplete1:
    '[data-drupal-selector="edit-field-department-services-0-subform-field-dept-service-sect-services-0-target-id"]',
  selectPublish: '[data-drupal-selector="edit-moderation-state-0-state"]',
  buttonSubmit: '[data-drupal-selector="edit-submit"]',
  aTranslateTab: '.sfgov-tabbed-navigation [href$="translations"]',
};

let createTransactionNode = (title) => {
  cy.get(inputElements.textfieldTitle).type(title, { force: true });
  cy.get(inputElements.selectPublish).select("published");
  cy.get(inputElements.buttonSubmit).click({
    force: true,
  });
};

let createTopicNode = (title) => {
  cy.visit("/node/add/topic");
  // Enter title.
  cy.get(inputElements.textfieldTitle).type(title, { force: true });
  cy.get(inputElements.inputServiceAdd).click({ force: true });
  cy.get(inputElements.inputServiceAddItem).click({ force: true });
  cy.get(inputElements.serviceSectionTitle).type("Service Section", {
    force: true,
  });
  cy.get(inputElements.serviceSectionAutocomplete1).type(titleA, {
    force: true,
  });
  cy.get(inputElements.serviceSectionAutocomplete1).type("{downarrow}");
  cy.get(inputElements.serviceSectionAutocomplete1).type("{downarrow}");
  cy.get(inputElements.serviceSectionAutocomplete1).type("{enter}");
  cy.get(inputElements.selectPublish).select("published", { force: true });
  cy.get(inputElements.buttonSubmit).click({
    force: true,
  });
};

let createTransaction = (title, translation) => {
  cy.visit("/node/add/transaction");
  createTransactionNode(title);

  if (translation === true) {
    cy.get(inputElements.aTranslateTab).click({ force: true });
    cy.get('[href$="/translations/add/en/es"]').click();

    createTransactionNode(title + "-- es");
  }
};

let login = () => {
  cy.visit("/user/login");
  cy.get('[name="name"]').type("zakiya@chapterthree.com");
  cy.get('[name="pass"]').type("admin");
  cy.get(".user-login-form input.form-submit").click();
};

describe("sf.gov", () => {
  it("Test", () => {
    login();
    createTransaction(titleA);
    createTransaction("Transaction B", true);
    createTopicNode("Topic");

    // expect(true).to.equal(true);
  });
});
