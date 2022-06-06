var database = require("../database/config");

function homensAcordam(idAquario){
    instrucaoSql = ''
     if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT MAX(c) as totalCliqueHomensAcordam, hora as horaHomensAcordam FROM (
            select h.hora, COUNT(h.hora) as c, selecao, idUsuario, genero from recursiva 
            join usuario
            on fkUsuario = idUsuario
            join horaEscolhida as h
            on fkHora = idHora
            where genero = 'm' and selecao = 'acordar'
            GROUP BY genero, hora
            ) AS resultado;
        `;//Maior clique de homens
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mulheresAcordam(idAquario, limite_linhas) {

    instruaoSql = ''
    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT MAX(c) as totalCliqueMulheresAcordam, hora as horaMulheresAcordam FROM (
            select h.hora, COUNT(h.hora) as c, selecao, idUsuario, genero from recursiva 
            join usuario
            on fkUsuario = idUsuario
            join horaEscolhida as h
            on fkHora = idHora
            where genero = 'f' and selecao = 'acordar'
            GROUP BY genero, hora
            ) AS resultado;            
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function homensDormem(idAquario, limite_linhas){
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT MAX(c) as totalCliqueHomensDormem, hora as horaHomensDormem FROM (
            select h.hora, COUNT(h.hora) as c, selecao, idUsuario, genero from recursiva 
            join usuario
            on fkUsuario = idUsuario
            join horaEscolhida as h
            on fkHora = idHora
            where genero = 'm' and selecao = 'dormir'
            GROUP BY genero, hora
            ) AS resultado;

            
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mulheresDormem(idAquario, limite_linhas){
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT MAX(c) as totalCliqueMulheresDormem, hora as horaMulheresDormem FROM (
            select h.hora, COUNT(h.hora) as c, selecao, idUsuario, genero from recursiva 
            join usuario
            on fkUsuario = idUsuario
            join horaEscolhida as h
            on fkHora = idHora
            where genero = 'f' and selecao = 'dormir'
            GROUP BY genero, hora
            ) AS resultado;

            
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    homensAcordam,
    mulheresAcordam,
    homensDormem,
    mulheresDormem
}
