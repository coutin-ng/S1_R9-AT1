const fs = require("fs");
const prompSync = require("prompt-sync")();

let nomes = [];
let enderecos = [];
let distancias = [];
let valorKm = [];
let tipoEntregas = [];
let continuar = 1;
let custoEntregas = [];
let soma = 0;


for (i = 0; continuar == 1; i++) {

    do {

        nomes[i] = prompSync(`Insira o nome do cliente: `);

    } while (!(isNaN(nomes[i])));

    do {

        enderecos[i] = prompSync(`Insira o endereço do cliente: `);

    } while (!(isNaN(enderecos[i])));

    do {

        distancias[i] = prompSync(`Insira a distância da entrega (em quilômetros): `);

    } while (isNaN(distancias[i]) || distancias[i] == 0);

    do {

        valorKm[i] = prompSync(`Insira o valor cobrado por quilômetro: `);

    } while (isNaN(valorKm[i]) || valorKm[i] == 0);

    do {

        tipoEntregas[i] = prompSync(`Entrega normal ou urgente? Digite 1 para urgente: `);

    } while (isNaN(tipoEntregas[i]));

    if (tipoEntregas[i] == 1) {

        custoEntregas[i] = parseFloat(`${((distancias[i] * valorKm[i]) * 1.2).toFixed(2)}`);
        tipoEntregas[i] = "Urgente";
        soma += custoEntregas[i];

    } else {

        custoEntregas[i] = parseFloat(`${(distancias[i] * valorKm[i]).toFixed(2)}`);
        tipoEntregas[i] = "Normal";
        soma += custoEntregas[i];

    }
    
    do {

        continuar = prompSync(`Você deseja continuar? Digite 1 para continuar: `);

    } while (isNaN(continuar));

}

console.log(`\n ${nomes}\n ${enderecos} \n ${tipoEntregas} \n Valor das entregas: R$${custoEntregas}`);
    
let media = (soma / i)

console.log(`\n Total de entregas: ${i} \n A média do valor da entregas é : R$ ${media}`);

let conteudo = `\nNomes: ${nomes} \nEndereços: ${enderecos} \nDistâncias em km: ${distancias} \nValores por km: ${valorKm} \nTipos de Entregas: ${tipoEntregas} \nCusto das Entregas: ${custoEntregas}`
let historico = "historico.txt"
fs.writeFileSync(historico, conteudo, "utf8");

