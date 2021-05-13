import inputElements from "./inputElements";
import titleText from "./titleText";

let createServiceCards = (scenarios) => {
  for (let i = 0; i < scenarios.length; i++) {
    let autocompleteInput = `[name="field_department_services[0][subform][field_dept_service_sect_services][${i}][target_id]`;

    // Create first card.
    cy.get(inputElements.inputServiceAddItem).click({ force: true });
    cy.get(autocompleteInput).type(titleText("O", scenarios[i]), {
      force: true,
    });
    cy.get(autocompleteInput).type("{downarrow}");
    cy.get(autocompleteInput).type("{downarrow}");
    cy.get(autocompleteInput).type("{enter}");
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
