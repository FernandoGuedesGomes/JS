alert("Para prosseguir no nosso site precisamos coletar algumas informações, a seguir responda as perguntas.");


var nome = prompt ("Qual é seu nome?");
var nascimento = prompt ("Em que ano você nasceu? Escreva o ano completo, ex: 1996.");
var cidade = prompt ("Em qual cidade você mora?")
var telefone = prompt ("informe seu numero celular com DDD:");


var ano = 2022;
var idade =  (ano) - parseInt(nascimento);

alert("Olá, " + nome + " ! Registramos que você tem " + idade + " anos, mora na cidade " + cidade + " , e seu telefone é " + telefone + ".");

if(idade >= 18){
    alert("Parabéns!! Você ja tem idade para dirigir. Continue em nosso site e clique em SAIBA MAIS. ");
}
else{
    alert("Infelizmente você não possui idade o suficiente para tirar uma CNH. Volte futuramente.");
    window.location="https://www.noticiasautomotivas.com.br/idade-para-tirar-habilitacao/";
}

