import createUser from "./permissions/createUsers";

// Login as admin. Store credentials in cypress.env.json.
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
  // Script create a user for each role and department in the arrays..
  // const departments = ["ge", "im"];
  // const roles = ["writer", "publisher", "auth", "digital_services"];
  const departments = ["ge"];
  const roles = ["writer", "publisher", "auth", "digital_services"];

  // Unique number for user names.
  const start = 0;

  // Main script.
  it("Create", () => {
    login();
    createUser(departments, roles, start);
  });
});
