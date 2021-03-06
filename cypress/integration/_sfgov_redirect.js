import titleText from "./redirect/titleText";
import createTopicNode from "./redirect/topic";
import createScenario from "./redirect/createScenario";
import test from "./redirect/test";
const op = { force: true };

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

describe("sf.gov", () => {
  let suite = [
    "a",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "p",
    "q",
    "r",
    "t",
    "u",
  ];

  it("Create", () => {
    login();

    // Test matrix: https://docs.google.com/spreadsheets/d/1iGwK5ggKfELpzj4PBKGFBLOf4JZPsjaUQABfPCWwjuM/edit?usp=sharing

    createScenario("a", true, true, true, true, "autocomplete");
    createScenario("c", true, true, true, true, "path");
    createScenario("d", true, true, true, false, "path");
    createScenario("e", true, true, false, null, "path");
    createScenario("f", true, false, false, null, "path");
    createScenario("g", true, true, true, false, "autocomplete");
    createScenario("h", true, true, false, null, "autocomplete");
    createScenario("i", true, false, false, null, "autocomplete");
    createScenario("j", false, null, false, null, "autocomplete");
    createScenario("p", false, null, false, null, "path");
    createScenario("q", true, false, true, true, "autocomplete");
    createScenario("r", false, null, true, true, "autocomplete");
    createScenario("t", false, null, true, true, "path");
    createScenario("u", false, null, true, false, "path");
    createTopicNode(suite);
  });

  // it("Test", () => {
  //   test(suite);
  // });
});
