import createUser from "./permissions/createUsers";

let login = () => {
  cy.request({
    method: "POST",
    url: "/user/login",
    form: true,
    body: {
      name: Cypress.env("un"),
      pass: Cypress.env("pw"),
      form_id: "user_login_form",
    },
  });
};

describe("permissions", () => {
  const departments = ["ge", "im"];
  const roles = ["writer", "publisher", "auth"];
  const start = 0;

  it("Create", () => {
    login();
    createUser(departments, roles, start);
  });
});
