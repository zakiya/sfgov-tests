import inputElements from "./inputElements";
import titleText from "./titleText";

let createServiceCards = (scenarios) => {
  for (const scenario of scenarios) {
    // Create first card.
    cy.get(inputElements.inputServiceAddItem).click({ force: true });
    cy.get(inputElements.serviceSectionAutocomplete1).type(
      titleText("O", scenario),
      {
        force: true,
      }
    );
    cy.get(inputElements.serviceSectionAutocomplete1).type("{downarrow}");
    cy.get(inputElements.serviceSectionAutocomplete1).type("{downarrow}");
    cy.get(inputElements.serviceSectionAutocomplete1).type("{enter}");
  }
};

const createTopicNode = (scenarios) => {
  cy.visit("/node/add/topic");

  // Enter title.
  cy.get(inputElements.textfieldTitle).type("Topic", { force: true });

  // Add Service section.
  cy.get(inputElements.inputServiceAdd).click({ force: true });
  cy.get(inputElements.serviceSectionTitle).type("Service Section", {
    force: true,
  });

  createServiceCards(scenarios);

  // Publish and submit.
  cy.get(inputElements.selectPublish).select("published", { force: true });
  cy.get(inputElements.buttonSubmit).click({
    force: true,
  });
};

export default createTopicNode;
