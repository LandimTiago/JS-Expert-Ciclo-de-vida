import mocha from "mocha";
const { describe, it } = mocha;

import chai from "chai";
const { expect } = chai;
// temos que importar dessa forma pois o ESmodule não permite
// desestruturar direto na importação

import Person from "../src/person.js";

describe("Person", () => {
  it("Should return a person instance from a string", () => {
    const person = Person.generateInstanceFromString(
      "1 Bike,Carro 20000 2000-01-01 2002-01-10"
    );
    const expected = {
      from: "2000-01-01",
      to: "2002-01-10",
      vehicles: ["Bike", "Carro"],
      kmTraveled: "20000",
      id: "1",
    };
    expect(person).to.be.deep.equal(expected);
  });

  it("Should format values", () => {
    const person = new Person({
      from: "2000-01-01",
      to: "2002-01-10",
      vehicles: ["Bike", "Carro"],
      kmTraveled: "20000",
      id: "1",
    });

    const result = person.formatted("pt-br");
    const expected = {
      id: 1,
      vehicles: "Bike e Carro",
      kmTraveled: "20.000 km",
      from: "01 de janeiro de 2000",
      to: "10 de janeiro de 2002",
    };

    expect(result).to.be.deep.equal(expected);
  });
});
