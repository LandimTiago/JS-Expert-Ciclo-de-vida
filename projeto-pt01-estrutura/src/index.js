import DraftLog from "draftlog";
import ChalkTable from "chalk-table";
import chalk from "chalk";
// realine para obeter o input do usuario via terminal
import readline from "readline";

import database from "../database.json";
import Person from "./person.js";
// NOTE importante lembrar que no ESmodules precisamos sempre passa a extensão do arquivo
// para que o import seja feito corretamente

DraftLog(console).addLineListener(process.stdin);

const DEFAUL_LANGUAGE = "pt-br";
const options = {
  leftPad: 2,
  columns: [
    { field: "id", name: chalk.cyan("ID") },
    { field: "vehicles", name: chalk.magenta("Vehicles") },
    { field: "kmTraveled", name: chalk.red("Km Traveled") },
    { field: "from", name: chalk.blue("from") },
    { field: "to", name: chalk.green("to") },
  ],
};

/*
O tradicional console.log() foi trocado pelo draft que foi
instanciado na linha 12
*/
const table = ChalkTable(
  options,
  database.map((item) => new Person(item).formatted(DEFAUL_LANGUAGE))
  // por padrão já está usando a linguagem do sistema operacional
  // no caso ja pegou diretamente o pt-br
);
const print = console.draft(table);

/*
Aqui simulamos a inserção de um novo veiculo na lista a cada 4000ms
para acompanhar a atualização da tabela
setInterval(() => {
    database.push({ id: Date.now(), vehicles: ["Teste", Date.now()] });
    const table = ChalkTable(options, database);
    print(table);
}, 4000);
*/

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.output,
});

terminal.question("Qual é o seu nome?", (msg) => {
  console.log("msg", msg.toString());
});

print(table);
