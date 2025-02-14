//exercício saldo conta
// gere um numero aleatório de 0 a 1000 para ser o saldo da conta
//deseje bom dia ao usuário, e pergunte qual ele acha que é o saldo da conta, 
// se o saldo for positivo verifique se é maior ou menor que o saldo atual,
//      se for maior diga que ele é otimista, e mostre o saldo da conta, 
//      se for menor diga que ele tem sorte, e mostre o saldo da conta,
// se o saldo for negativo, verifique se é maior ou menor que o saldo atual,
//      se for maior diga que poderia ser pior, e mostre o saldo da conta,
//      se for mais negativo ainda diga que ele a situação tá feia, e mostre o saldo da conta,
//Explique para o usuário que como ele sabe, os juros estão altíssimos, então pergunte se ele quer ver o saldo novamente
//      se ele desejar, diga que vc gosta de jogos, por isso ele terá que adivinhar o saldo da conta novamente,
//      caso ele deseje sair, mostre a mensagem de despedida


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function greetUser() {
    alert("Bom dia!");
}

function getUserGuess() {
    const guess = prompt("Bom te ver aqui novamente. Qual você acha que é o saldo da conta?");
    return parseFloat(guess);
}

function checkBalance(guess, balance) {
    if (guess > balance) {
        alert("Você é otimista! O saldo da conta é: " + balance);
    } else if (guess < balance) {
        alert("Você tem sorte! O saldo da conta é: " + balance);
    } else {
        alert("Você acertou! O saldo da conta é: " + balance);
    }
}

function checkNegativeBalance(guess, balance) {
    if (guess > balance) {
        alert("Poderia ser pior! O saldo da conta é: " + balance);
    } else {
        alert("A situação tá feia! O saldo da conta é: " + balance);
    }
}

function askToPlayAgain() {
    const response = prompt("Os juros estão altíssimos. Você quer ver o saldo novamente? (sim/não)");
    return response.toLowerCase() === 'sim';
}

function main() {
    const balance = getRandomInt(1001);
    greetUser();
    let guess = getUserGuess();

    if (balance >= 0) {
        checkBalance(guess, balance);
    } else {
        checkNegativeBalance(guess, balance);
    }

    while (askToPlayAgain()) {
        alert("Eu gosto de jogos, então você terá que adivinhar o saldo da conta novamente.");
        guess = getUserGuess();

        if (balance >= 0) {
            checkBalance(guess, balance);
        } else {
            checkNegativeBalance(guess, balance);
        }
    }

    alert("Obrigado por jogar! Até a próxima.");
}

main();
