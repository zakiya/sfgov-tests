import inputElements from "./inputElements";
import values from "./values";

let login = () => {
  cy.request({
    method: "POST",
    url: "/user/login",
    form: true,
    body: {
      name: "zakiya@chapterthree.com",
      pass: "admin",
      form_id: "user_login_form",
    },
  });
};

const createTopicNode = (title) => {
  cy.visit("/node/add/topic");

  // Enter title.
  cy.get(inputElements.textfieldTitle).type(title, { force: true });

  // Add Service section.
  cy.get(inputElements.inputServiceAdd).click({ force: true });
  cy.get(inputElements.serviceSectionTitle).type("Service Section", {
    force: true,
  });

  // Create first card.
  cy.get(inputElements.inputServiceAddItem).click({ force: true });
  cy.get(inputElements.serviceSectionAutocomplete1).type(values.titleA, {
    force: true,
  });
  cy.get(inputElements.serviceSectionAutocomplete1).type("{downarrow}");
  cy.get(inputElements.serviceSectionAutocomplete1).type("{downarrow}");
  cy.get(inputElements.serviceSectionAutocomplete1).type("{enter}");

  // Create second card.
  cy.get(inputElements.inputServiceAddItem).click({ force: true });
  cy.get(inputElements.serviceSectionAutocomplete2).type(values.titleB, {
    force: true,
  });
  cy.get(inputElements.serviceSectionAutocomplete2).type("{downarrow}");
  cy.get(inputElements.serviceSectionAutocomplete2).type("{downarrow}");
  cy.get(inputElements.serviceSectionAutocomplete2).type("{enter}");

  // Publish and submit.
  cy.get(inputElements.selectPublish).select("published", { force: true });
  cy.get(inputElements.buttonSubmit).click({
    force: true,
  });
};

describe("sf.gov", () => {
  it("Topic", () => {
    login();
    createTopicNode("Topic");
  });
});

export default createTopicNode;
