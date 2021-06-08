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
  let suite = ["writer", "publisher", "auth"];

  it("Create", () => {
    login();
    createUser(suite);
  });
});
