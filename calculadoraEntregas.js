const fs = require("fs");
const prompSync = require("prompt-sync")();

let nomes = [];
let enderecos = [];
let continuar;

do {

    do {

        nomes = prompSync(`Insira o nome do cliente: `);

    } while (!(isNaN(nomes)));

    do {

        enderecos = prompSync(`Insira o endereço do cliente: `);

    } while (!(isNaN(enderecos)));

    do {

        continuar = prompSync(`Você deseja continuar? Digite 1 para continuar: `);
        
    } while (isNaN(continuar));

} while (continuar == 1);