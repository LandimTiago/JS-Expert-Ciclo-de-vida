import database from "./../database.json";
import Person from "./person.js";
import TerminalController from "./terminalController.js";
import { save } from "./repository.js";

const DEFAUL_LANGUAGE = "pt-br";
const STOP_TERMINAL = ":q";

const terminalController = new TerminalController();
terminalController.initializeTerminal(database, DEFAUL_LANGUAGE);

async function mainLoop() {
  try {
    const answer = await terminalController.question();
    if (answer === STOP_TERMINAL) {
      terminalController.closeTerminal();
      console.log("Process finished!");
      return;
    }
    // 2 moto,aviao,bicileta 20000000 2000-01-01 2022-01-08
    // 3 aviao,bicileta 200000 2012-22-01 2022-01-08
    const person = Person.generateInstanceFromString(answer);
    terminalController.updateTable(person.formatted(DEFAUL_LANGUAGE));

    await save(person);

    return mainLoop();
  } catch (error) {
    console.log(error);
    return mainLoop();
  }
}

await mainLoop();
