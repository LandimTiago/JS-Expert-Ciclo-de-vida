"use strict";
// ativamos o strict mode para validar as regras do JS

// NOTE vamos escrever um programa que observa alterações neste arquivo

const {
  watch,
  promises: { readFile },
} = require("fs");

class File {
  watch(event, filename) {
    console.log("this", this);

    // WARNING ---- usar o arguments diretamente na função do JS
    // é uma má pratica pois não existe um controle sobre o que
    // se esta passando pela variavel
    console.log("arguments", arguments);

    // NOTE ---- para transformar o resultado do arguments em um Array
    console.log("arguments", Array.prototype.slice.call(arguments));
    // NOTE ---- aqui transformamos o arguments em um array

    this.showContent(filename);
  }

  async showContent(filename) {
    console.log((await readFile(filename)).toString());
  }
}

const file = new File();

// dessa forma ele ignora o 'this' da classe File
// e herda o this do watch!
// watch(__filename, file.watch);
// this.showContent(filename);
//      ^
// TypeError: this.showContent is not a function

// alterantiva para nao herdar o this da funcao
// mas não é a forma mais bonita de se fazer
// ---- watch(__filename, (event, filename) => file.watch(event, filename));

// podemos deixar explicito qual é o context que a função deve seguir
// para não ter duvidas sempre especifique com o .bind()
// o contexto que deseja acessar
// nesse caso retorna a função com o 'this' que se mantem de file
// e ignora o watch
// ---- watch(__filename, file.watch.bind(file));

file.watch.call(
  { showContent: () => console.log("call: hey sinon!") },
  null,
  __filename
);
file.watch.apply({ showContent: () => console.log("call: hey sinon!") }, [
  null,
  __filename,
]);
// a diferença é que um você passa os argumentos como array
// e no outro uma lista de argumentos

/* 
  RECAPITULANDO    
  Precisou delegar uma função que será executada no futuro
  lembre sempre de atualizar o contexto 'this' utilizando
  o .bind() para não termos surpresas.
*/
