const fs = require("fs");
const prompSync = require("prompt-sync")();

let nomes = [];
let enderecos = [];
let distancias = [];
let valorKm = [];
let tipoEntregas = [];
let continuar = 1;
let custoEntregas = [];
let i;

for (let i = 0; continuar == 1; i++) {

    do {

        nomes[i] = prompSync(`Insira o nome do cliente: `);

    } while (!(isNaN(nomes[i])));

    do {

        enderecos[i] = prompSync(`Insira o endereço do cliente: `);

    } while (!(isNaN(enderecos[i])));

    do {

        distancias[i] = prompSync(`Insira a distância da entrega (em quilômetros): `);

    } while (isNaN(distancias[i]) || distancias == 0);

    do {

        valorKm[i] = prompSync(`Insira o valor cobrado por quilômetro: `);

    } while (isNaN(valorKm[i]) || valorKm == 0);

    do {

        tipoEntregas[i] = prompSync(`Entrega normal ou urgente? Digite 1 para urgente: `);

    } while (isNaN(tipoEntregas[i]));

    if (tipoEntregas[i] == 1) {

        custoEntregas[i] = (`Valor da entrega: R$${((distancias[i] * valorKm[i]) * 1.2 .toFixed(2))}`);
        tipoEntregas[i] = "Urgente";

    } else {

        custoEntregas[i] = (`Valor da entrega: R$${(distancias[i] * valorKm[i]) .toFixed(2)}`);
        tipoEntregas[i] = "Normal";

    }
    console.log(`\n ${nomes}\n ${enderecos} \n ${tipoEntregas} \n ${custoEntregas}`);

    do {

        continuar = prompSync(`Você deseja continuar? Digite 1 para continuar: `);

    } while (isNaN(continuar));
   
    console.log(`\n Total de entregas: ${i+1}`);
}


