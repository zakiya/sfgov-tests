import inputElements from "./inputElements";
import titleText from "./titleText";

let createRedirect = (scenarioLetter, type) => {
  cy.visit("/admin/config/search/redirect/add");
  cy.get(inputElements.redirect.origin).type("origin" + scenarioLetter);

  if (type === "path") {
    cy.get(inputElements.redirect.destination).type(
      "/destination" + scenarioLetter
    );
  } else if (type === "autocomplete") {
    cy.get(inputElements.redirect.destination).type(
      titleText("D", scenarioLetter),
      {
        force: true,
      }
    );
    cy.get(inputElements.redirect.destination).type("{downarrow}");
    cy.get(inputElements.redirect.destination).type("{downarrow}");
    cy.get(inputElements.redirect.destination).type("{enter}");
  }

  cy.get(inputElements.redirect.save).click();
};

export default createRedirect;
