import titleText from "./titleText";
import createRedirect from "./createRedirect";
import createTransaction from "./createTransaction";

// sid = Scenario ID; lowercase string
// ot = Origin has translation - boolean
// ota = Origin has translation alias - boolean
// dt = Destination has translation - boolean
// dta = Destination has translation alias - boolean

const createScenario = (sid, ot, ota, dt, dta, autoCompleteOrPath) => {
  createTransaction(titleText("O", sid), ot, ota);
  createTransaction(titleText("D", sid), dt, dta);
  createRedirect(sid, autoCompleteOrPath);
};

export default createScenario;
