import inputElements from "./inputElements";

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

export default createTransaction;
