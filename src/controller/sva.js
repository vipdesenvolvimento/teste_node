var Sva = require('../ServiceSva')();

module.exports = app => {
    
    const controller = {};

    controller.getSva =  async (req, res) => {

        contrato = req.params.contrato;

        const cliente = await Sva.getCliente(contrato);
        
        if(cliente.data){
            if(cliente.data.variables.status == 600){
                cpf = cliente.data.variables.ccpnj;

                const retorno = await Sva.getSva(cpf);
                if(retorno.data){
                    if(retorno.data.status == 200){
                        res.send(retorno.data);
                    }else{
                        res.send({status: false, message: 'Não foi possivel listar SVAs'});
                    }
                }else{
                    res.send({status: false, message: 'Não foi possivel requisitar SVAs!'});
                }
            }else{
                res.send({status: false, message: cliente.data.variables.message});
            }
        }else{
            res.send({status: false, message: 'Não foi possivel requisitar!'});
        }

    }

    return controller
}