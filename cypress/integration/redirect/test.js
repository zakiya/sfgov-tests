import titleText from "./titleText";

let test = (suite) => {
  for (let sid of suite) {
    // @todo make this path dynamic
    cy.visit("/topics/topic");
    cy.contains(titleText("O", sid)).click();
    cy.contains(titleText("D", sid)).should("be.visible");
    cy.visit("/es/topic/topic");
    cy.contains(titleText("O", sid)).click();
    cy.contains(titleText("D", sid)).should("be.visible");
  }
};
export default test;
