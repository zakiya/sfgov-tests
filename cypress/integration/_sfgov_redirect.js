import titleText from "./titleText";
import inputElements from "./inputElements";
import createRedirect from "./createRedirect";
import createTopicNode from "./topic";
const op = { force: true };

let createTransactionNode = (title, customTranslatedAlias) => {
  cy.get(inputElements.textfieldTitle).type(title, op);

  if (customTranslatedAlias === true) {
    cy.get(inputElements.inputAliasCheckbox).uncheck({ force: true });
    cy.get(inputElements.textfieldAlias).type("-custom-alias", op);
  }

  cy.get(inputElements.selectPublish).select("published");
  cy.get(inputElements.buttonSubmit).click({
    force: true,
  });
};

let createTransaction = (title, translation, customTranslatedAlias) => {
  cy.visit("/node/add/transaction");
  createTransactionNode(title);

  if (translation === true) {
    cy.get(inputElements.aTranslateTab).click({ force: true });
    cy.get('[href$="/translations/add/en/es"]').click();
    createTransactionNode("--es", customTranslatedAlias);
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
  it("Create", () => {
    login();
    createTransaction(titleText("O", "a"), true, true);
    createTransaction(titleText("D", "a"), true, true);
    createRedirect("a");
    createTopicNode(["a"]);
  });

  it("Test", () => {
    cy.contains(titleText("O", "a")).click();
  });
});
