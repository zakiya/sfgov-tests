import createTopicNode from "./topic";
import values from "./values";
import inputElements from "./inputElements";

let createTransactionNode = (title) => {
  cy.get(inputElements.textfieldTitle).type(title, { force: true });
  cy.get(inputElements.selectPublish).select("published");
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

describe("sf.gov", () => {
  it("Test", () => {
    login();
    createTransaction(values.titleA);
    createTransaction(values.titleB, true);
    createTopicNode("Topic");

    // expect(true).to.equal(true);
  });
});
