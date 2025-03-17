/**
 * Processo principal
 * Estudo do Banco de dados MongoDB(CRUD)
 * @author Yesenia Salas
 */

// importação do módulo de conexão
const {conectar, desconectar} = require('./database.js')

// importação de modelo de dados do  clientes
const clienteModel = require('./src/models/cliente.js')

// Função para cadastrar um novo cliente
// ATENÇÃO! Para trabalhar com banco de dados usar sempre
// async-await e try-catch
const salvarCliente = async(nomeCli, foneCli, cpfCli) =>{
    try{
        // setar a estrutura de daos com os valores 
        // Obs: Usar os mesmos nome da estrutura.
        const novoCliente = new clienteModel({
            nomeCliente: nomeCli,
            foneCliente: foneCli,
            cpfCliente: cpfCli
        })
        // a linha abaixo salva os daos no banco de dados 
        await novoCliente.save()
        console.log("Cliente adicionado com o sucesso")
    }catch(error){
        console.log(erro)
    }

}
// ========================================================
const iniciarsistema = async()=>{
    console.clear()
    console.log("Estudo do MongoDB")
    console.log("----------------------------------")
    await conectar()
    // CRUD create (inserção no banco de dados)
    await salvarCliente("Yesenia Salas", "99999-9999", "123456789.09")
    await desconectar()
}
iniciarsistema()