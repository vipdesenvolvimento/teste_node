const axios = require('axios');

module.exports = () => {
    const service = {};
    service.getSva = async (cpf) => {
        const retorno = {};
        await axios.get(process.env.apifacil_url+'/api/sva/lista_sva.php?cpf=' + cpf)
        .then((res) =>{
            retorno.data = res.data;
        }).catch((err) => {
            retorno.data = false;
        });
        return retorno;
    
    }


    service.getCliente = async (contrato) => {
        const retorno = {};
        await axios.get(process.env.apifacil_url+'/api/ngobjective/consulta_cpf.php?cpf=' + contrato)
        .then((res) =>{
            retorno.data = res.data;
        }).catch((err) => {
            retorno.data = false;
        });
        return retorno;
    
    }


    return service;
}