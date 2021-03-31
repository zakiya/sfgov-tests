import inputElements from "./inputElements";
import titleText from "./titleText";

let createRedirect = (scenarioLetter) => {
  cy.visit("/admin/config/search/redirect/add");
  cy.get(inputElements.redirect.origin).type("origin" + scenarioLetter);
  cy.get(inputElements.redirect.destination).type(
    titleText("D", scenarioLetter),
    {
      force: true,
    }
  );
  cy.get(inputElements.redirect.destination).type("{downarrow}");
  cy.get(inputElements.redirect.destination).type("{downarrow}");
  cy.get(inputElements.redirect.destination).type("{enter}");
  cy.get(inputElements.redirect.save).click();
};

export default createRedirect;
