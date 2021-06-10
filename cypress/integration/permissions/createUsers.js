import inputElements from "./inputElements";
import autocomplete from "./autocomplete";

let createUsers = (depts, roles, start) => {
  for (let dept of depts) {
    for (let role of roles) {
      const mail = "zakiya+" + role + dept + start + "@chapterthree.com";
      const name = "zakiya" + role + dept + start;

      cy.visit("/admin/people/create");

      cy.get(inputElements.user.mail).type(mail);
      cy.get(inputElements.user.name).type(name);
      cy.get(inputElements.user.pass1).type(name);
      cy.get(inputElements.user.pass2).type(name);

      cy.get(inputElements.user.dept_add).click();

      autocomplete(inputElements.user.dept_input, dept);

      if (role !== "auth") {
        cy.get(`[name="roles[${role}]"]`).check();
      }
      cy.get(inputElements.user.submit).click();
    }
  }
};

export default createUsers;
