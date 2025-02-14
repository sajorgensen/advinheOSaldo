  
//exercício saldo conta
// gere um numero aleatório de 0 a 1000 para ser o saldo da conta
//deseje boas vindas ao usuário, e pergunte qual ele acha que é o saldo da conta
// verifique se o valor digitado é maior ou menor que o saldo atual
//      se for maior diga que ele é otimista, e mostre o saldo da conta 
//      se for menor diga que ele tem sorte, e mostre o saldo da conta
//Explique para o usuário que os juros estão altíssimos, então pergunte se ele quer ver o saldo novamente
//      se ele desejar, diga que vc gosta de jogos, por isso ele terá que adivinhar o saldo da conta novamente,
//      caso ele deseje sair, mostre a mensagem de despedida


alert ('Bem vindoooooo, welcomeeee little padawan!');

let advinhar = prompt ('Você gostaria de saber o saldo da sua conta? (sim/não)');

saldoConta = parseInt(Math.random() *2000)-1000;

if (advinhar == 'sim'){
    
   let i=1;
    alert ('Você sabe que eu gosto de jogos né? Então, você terá que adivinhar o saldo da conta!');

    function advinhacao (){
    
    chute = prompt ('Qual você acha que é o saldo atual da conta?');
    
    if (i>1){
        saldoConta = saldoConta*1.2;
        
    }
     
    if (chute > saldoConta){
    alert ('Você é otimista! O saldo da conta é: ' + saldoConta);
    }else if (chute < saldoConta){
    alert ('Você tem sorte! O saldo da conta é: ' + saldoConta);
    }else{
    alert ('Você acertou! O saldo da conta é: ' + saldoConta);
    }
    }
    

    advinhacao();

    let saldoAtualizado = prompt ('Os juros estão uma loucura, que tal tentar chutar o saldo atualizado? (sim/não)');
    if (saldoAtualizado == 'sim'){ 
        i++;
        advinhacao();

    }else{alert ('já desistiu? ¬¬');}

    let denovo = prompt ('Quer tentar novamente? (sim/não)');
    if (denovo == 'sim'){
        advinhacao();}else{}

    alert ('Quando quiser, estarei aqui....Adios good friend!');
}else{
    alert ('Ahhhhhhhhhhhhhhhh okkkk, até a próxima :D');}


