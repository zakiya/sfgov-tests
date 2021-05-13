import inputElements from "./inputElements";

let createUsers = (roles) => {
  for (let role of roles) {
    const mail = "zakiya+" + role + "@chapterthree.com";
    const name = "zakiya" + role;

    cy.visit("/admin/people/create");

    cy.get(inputElements.user.mail).type(mail);
    cy.get(inputElements.user.name).type(name);
    cy.get(inputElements.user.pass1).type(name);
    cy.get(inputElements.user.pass2).type(name);

    if (role !== "auth") {
      cy.get(`[name="roles[${role}]"]`).check();
    }
    cy.get(inputElements.user.submit).click();
  }
};

export default createUsers;
