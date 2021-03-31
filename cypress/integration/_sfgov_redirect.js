import titleText from "./titleText";
import createTopicNode from "./topic";
import createScenario from "./createScenario";
const op = { force: true };

let login = () => {
  cy.request({
    method: "POST",
    url: "/user/login",
    form: true,
    body: {
      name: "zakiya@chapterthree.com",
      pass: "admin",
      form_id: "user_login_form",
    },
  });
};

describe("sf.gov", () => {
  it("Create", () => {
    login();
    createScenario("a", true, true, true, true);
    createScenario("d", true, true, true, false);
    createScenario("e", true, true, false);
    createScenario("f", true, false, false);
    createScenario("g", true, true, true, false);
    createScenario("h", true, true, false);
    createScenario("i", true, false, false);
    createScenario("j", false, false);
    // createScenario("l", true, true, false);
    // createScenario("m", true, false, false);
    createScenario("q", true, false, true, true);
    createScenario("r", false, null, true, true);
    createScenario("u", false, null, true, false);
    createTopicNode(["a", "d", "e", "f", "g", "h", "i", "j", "q", "r", "u"]);
  });

  it("Test", () => {
    cy.contains(titleText("O", "a")).click();
  });
});
