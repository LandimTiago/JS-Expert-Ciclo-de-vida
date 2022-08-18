# CONCEITOS FUNDAMENTAIS JAVASCRIPT - CICLO DE VIDA

## Strict Mode

O Strict Mode foi um novo recurso do ECMAScript 5 que permite colocar um programa ou uma função em um contexto operacional “estrito”. Esse contexto estrito impede que certas ações sejam executadas e gera mais exceções. A declaração “use strict”; instrui o navegador a usar o modo Strict, que é um conjunto de recursos reduzido e mais seguro do JavaScript.

Benefícios de usar 'use strict': O modo Strict faz várias alterações na semântica normal do JavaScript.

- O modo estrito elimina alguns erros silenciosos de JavaScript alterando-os para gerar erros.
- O modo estrito corrige erros que dificultam a otimização dos mecanismos JavaScript: às vezes, o código do modo estrito pode ser executado mais rapidamente do que o código idêntico que não é o modo estrito.
- O modo estrito proíbe algumas sintaxes que provavelmente serão definidas em versões futuras do ECMAScript.
- Ele evita ou gera erros quando ações relativamente “inseguras” são tomadas (como obter acesso ao objeto global).
- Ele desativa recursos que são confusos ou mal pensados.
- O modo estrito torna mais fácil escrever JavaScript “seguro”.

Como usar o modo estrito: o modo estrito pode ser usado de duas maneiras, lembre-se que o modo estrito não funciona com instruções de bloco entre chaves {}.

- Usado no escopo global para todo o script.
- Pode ser aplicado a funções individuais.

### REFERÊNCIAS

- [Modo estrito em JavaScript](https://www.geeksforgeeks.org/strict-mode-javascript/)
- [JavaScript Use Strict](https://www.w3schools.com/js/js_strict.asp)

## CALL STACK E MEMORY HEAP

"O JavaScript abstrai muitas coisas para nós — por exemplo, ele lê e executa o código como mágica , certo? — mas nos bastidores, JS tem que armazenar e escrever informações e precisa acompanhar o que vai acontecer linha por linha . Para poder fazer essas coisas, o mecanismo JS tem essas pequenas armas: pilha de chamadas e heap de memória ." [Jennifer Takagi](https://levelup.gitconnected.com/understanding-call-stack-and-heap-memory-in-js-e34bf8d3c3a4)

Basicamente, apesar do JS fazer grande parte do trabalho para nós, precisamos de um local onde nosso codigo possa ser executado e armazenado. É aqui que entram nossas pilhas de chamadas e os heaps de memoria, afinal, nossos programas apenas alocam, usam e liberam a memoria utilizada.

Quando definimos uma constante ("const number = 402"), estamos dizendo ao nosso SO, defina uma variavel com o nome "number" e aponte para o valor 402, assim podemos fazer para qualquer tipo de variavel, também objetos.

Dessa forma nosso SO armazena de forma aleatoria e desorganizada, por isso apontamos os valores a nossas variaveis de modo a "organizar" essa bagunça toda.

```
function subtractTwo (sum) {
  return sum - 2
}

function calculate() {
  sumTotal = 4 + 5
  return subtractTwo(sumTotal)
}

calculate()
```

Todas as vezes que executamos uma função, usamos a pilha de chamadas para adicionar a função ao topo dessa pilha e após a sua execução liberamos ela é removida dessa pilha, "First in, last out".

E a partir daqui temos outras preocupações como Estouro de Pilha e Vazamentos de memoria que veremos nos proximos modulos do curso.

### REFERÊNCIAS

- [Entendendo a pilha de chamadas e a memória heap em JS](https://levelup.gitconnected.com/understanding-call-stack-and-heap-memory-in-js-e34bf8d3c3a4)
- [Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
- [Javascript Fundamentals — Call Stack and Memory Heap](https://medium.com/@allansendagi/javascript-fundamentals-call-stack-and-memory-heap-401eb8713204)

## TIPO DE VALOR E TIPO DE REFERÊNCIA

...
...
...

### REFERÊNCIAS
