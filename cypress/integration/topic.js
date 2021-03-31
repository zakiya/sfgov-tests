import inputElements from "./inputElements";
import titleText from "./titleText";

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
  cy.get(inputElements.serviceSectionAutocomplete1).type(titleText("O", "A"), {
    force: true,
  });
  cy.get(inputElements.serviceSectionAutocomplete1).type("{downarrow}");
  cy.get(inputElements.serviceSectionAutocomplete1).type("{downarrow}");
  cy.get(inputElements.serviceSectionAutocomplete1).type("{enter}");

  // Create second card.
  cy.get(inputElements.inputServiceAddItem).click({ force: true });
  cy.get(inputElements.serviceSectionAutocomplete2).type(titleText("O", "B"), {
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

export default createTopicNode;
