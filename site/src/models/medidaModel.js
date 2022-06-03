var database = require("../database/config");

function homensAcordam(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT MAX(c) as totalCliqueHomens, hora as horaHomens FROM (
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

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT MAX(c) as totalCliqueHomens, hora as horaHomens FROM (
            select h.hora, COUNT(h.hora) as c, selecao, idUsuario, genero from recursiva 
            join usuario
            on fkUsuario = idUsuario
            join horaEscolhida as h
            on fkHora = idHora
            where genero = 'f' where selecao = 'acordar'
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

function homensDormem(idAquario, limite_linhas){
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT MAX(c) as totalCliqueHomens, hora as horaHomens FROM (
            select h.hora, COUNT(h.hora) as c, selecao, idUsuario, genero from recursiva 
            join usuario
            on fkUsuario = idUsuario
            join horaEscolhida as h
            on fkHora = idHora
            where genero = 'm' and selecao = 'dormir'
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

function mulheresDormem(idAquario, limite_linhas){
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT MAX(c) as totalCliqueHomens, hora as horaHomens FROM (
            select h.hora, COUNT(h.hora) as c, selecao, idUsuario, genero from recursiva 
            join usuario
            on fkUsuario = idUsuario
            join horaEscolhida as h
            on fkHora = idHora
            where genero = 'f' and selecao = 'dormir'
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


















function buscarMedidasEmTempoReal(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc limit 1`;
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
    mulheresDormem,
    buscarMedidasEmTempoReal
}
