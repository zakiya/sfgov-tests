let autocomplete = (field, text) => {
  cy.get(field).type(text, {
    force: true,
  });

  cy.get(field).type("{downarrow}");
  cy.pause();
  cy.get(field).type("{downarrow}");
  cy.get(field).type("{downarrow}");
  cy.get(field).type("{enter}");
  cy.pause();
};

export default autocomplete;
