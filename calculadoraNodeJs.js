const readline = require("readline");

const calcInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const validOperations = ["+", "-", "*", "/"];

async function main() {
  while (true) {
    const primeiroNumber = parseInt(await ask("digite primeiro numero "));
    console.log(primeiroNumber);
    if (isNaN(primeiroNumber)) {
      console.log("invalido");
    }
    const operacaoInput = await ask("qual operaçao? ");
    if (!validOperations.includes(operacaoInput)) {
      console.log("operacao invalida");
    }
    const segundoNumber = parseInt(await ask("digite segundo numero "));
    if (isNaN(segundoNumber)) {
      console.log("invalido");
    }
    const resultado = calcularResultado(
      primeiroNumber,
      operacaoInput,
      segundoNumber
    );
    console.log(`o reultado é: ${resultado}\n`);
    const continuarResponse = await ask("Continuar? (S | N)");
    if (continuarResponse.toLowerCase() !== "s") {
      calcInterface.close();
      break;
    }
  }
}

function ask(question) {
  return new Promise((resolve) => {
    calcInterface.question(question, resolve);
  });
}

function calcularResultado(primeiroNumber, operator, segundoNumber) {
  if (operator === "+") {
    return primeiroNumber + segundoNumber;
  }
  if (operator === "-") {
    return primeiroNumber - segundoNumber;
  }
  if (operator === "*") {
    return primeiroNumber * segundoNumber;
  }
  if (operator === "/") {
    if (segundoNumber == "0") {
      console.log("error");
      return;
    }
    return primeiroNumber / segundoNumber;
  }
}

main();
