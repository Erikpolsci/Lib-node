const fetch = require('node-fetch');

function manejaErros(erro) {
    throw new Error(erro.message);
}

async function checaStatus(geraArrayDeUrls) {

    try {
        const arrayStatus = await Promise
        .all(geraArrayDeUrls
            .map(async url => {
                const res = await fetch(url)
                return res.status;
            }))
    return arrayStatus;
    } catch(erro) {
        manejaErros(erro)
    }
   
}

function geraArrayDeUrls(arrayLinks) {
    return arrayLinks
        .map(objetoLink => Object
            .values(objetoLink).join());
}



async function validaUrls(arrayLinks) {
    const links = geraArrayDeUrls(arrayLinks);
    const statusLinks = await checaStatus(links);
    const resultados = arrayLinks.map((objeto, indice) => ({ 
        ...objeto,
        status : statusLinks[indice]
    }))
    return resultados
}

module.exports = validaUrls;