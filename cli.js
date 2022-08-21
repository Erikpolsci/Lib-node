#!/usr/bin/env node

const validaUrls = require('./http-validao');
const chalk = require('chalk');
const pegaArquivo = require('./index');

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    if(caminho[3] === 'validar') {
     console.log(chalk.yellow('links validados'), await validaUrls(resultado));
    }else {
        console.log(chalk.yellow('lista de links'), resultado);
    }
    
}




processaTexto(caminho);