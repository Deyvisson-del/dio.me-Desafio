// 1. Importa o módulo readline
const readline = require('readline');

// 2. Configura o input e output para o terminal
const rl = readline.createInterface({
    input: process.stdin, // Entrada padrão (teclado)
    output: process.stdout // Saída padrão (console)
});

// 3. Faz uma pergunta ao usuário
for (var i = 0; i < 3; i++) {

    rl.question('\nDigite o nome do seu personagem: ', (nomePersonagem) => {
        console.log(`Olá, Seja Bem vindo ${nomePersonagem}!`);

        rl.question(`Digite o Xp do seu personagem, ${nomePersonagem}: `, (xp) => {

            if (xp <= 1000) {
                xp = "Ferro";
                console.log(`O Herói de nome ${nomePersonagem} está no nível de ${xp}\n`)

            } else if (xp >= 1001 && xp <= 2000) {
                xp = "Bronze";
                console.log(`O Herói de nome ${nomePersonagem} está no nível de ${xp}\n`)

            } else if (xp >=  2001 && xp <= 5000) {
                xp = "Prata";
                console.log(`O Herói de nome ${nomePersonagem} está no nível de ${xp}\n`)

            } else if (xp >= 5001 && xp <= 7000) {
                xp = "Ouro";
                console.log(`O Herói de nome ${nomePersonagem} está no nível de ${xp}\n`)

            } else if (xp >= 7001 && xp <= 8000) {
                xp = "Platina";
                console.log(`O Herói de nome ${nomePersonagem} está no nível de ${xp}\n`)

            } else if (xp >= 8001 && xp <= 9000) {
                xp = "Ascendente";
                console.log(`O Herói de nome ${nomePersonagem} está no nível de ${xp}\n`)

            } else if (xp >= 9001 && xp <= 10000) {
                xp = "Imortal";
                console.log(`O Herói de nome ${nomePersonagem} está no nível de ${xp}\n`)

            } else {
                xp = "Imortal";
                console.log(`O Herói de nome ${nomePersonagem} está no nível de ${xp}\n`)

            };
            rl.close();
        });
    });
    return
}