import DraftLog from "draftlog";
import ChalkTable from "chalk-table";
import chalk from "chalk";
import readline from "readline";

import Person from "./person.js";

export default class TerminalController {
  constructor() {
    this.print = {};
    this.data = {};
  }

  initializeTerminal(database, language) {
    DraftLog(console).addLineListener(process.stdin);

    this.terminal = readline.createInterface({
      input: process.stdin,
      output: process.output,
    });

    this.initializeTable(database, language);
  }

  initializeTable(database, language) {
    const data = database.map((item) => new Person(item).formatted(language));
    const table = ChalkTable(this.getTableOptions(), data);

    this.print = console.draft(table);
    this.data = data;
  }

  question(msg = "") {
    return new Promise((resolve) => this.terminal.question(msg, resolve));
  }

  closeTerminal() {
    this.terminal.close();
  }

  getTableOptions() {
    return {
      leftPad: 2,
      columns: [
        { field: "id", name: chalk.cyan("ID") },
        { field: "vehicles", name: chalk.magenta("Vehicles") },
        { field: "kmTraveled", name: chalk.red("Km Traveled") },
        { field: "from", name: chalk.blue("from") },
        { field: "to", name: chalk.green("to") },
      ],
    };
  }
}
