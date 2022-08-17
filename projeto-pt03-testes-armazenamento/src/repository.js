import { writeFile, readFile } from "fs/promises";

export const save = async (data) => {
  // Não temos __filename, __dirname e o require no ES module

  // usamos para subistiruir o __dirname
  const { pathname: databaseFile } = new URL(
    "./../database.json",
    import.meta.url
  );

  const currentData = JSON.parse(await readFile(databaseFile));
  currentData.push(data);
  await writeFile(databaseFile, JSON.stringify(currentData));
};
