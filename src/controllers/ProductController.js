
// Operações que podemos ter em determinado model ex: (listagem, criação, remoção, atualização e etc)
//Importar o mongoose pq vamos precisar de trabalhar com a parte de banco de dados

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit: 10});

        //retornar em formato de JSON
        return res.json(products);
    },

    async store(req, res) {
        //Criação
        const product = await Product.create(req.body);
        return res.json(product);
    },

    async show(req, res){
        const product = await Product.findById(req.params.id);
        return res.json(show);
    },
 
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new:true }); //new:true faz com que a função retornada para o product ja esteja atualizada
        return res.json(product);
    },

    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);
        return res.send(); //vai retornar apenas um status de sucesso sem nenhum conteudo
    } 
};