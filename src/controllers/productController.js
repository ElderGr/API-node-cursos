const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        //um get simples
        // const products = await Product.find();

        //get com paginação
        //primeiro parametro são as condições da sua paginação(where...)
        //segundo parametro é a pagina atual e o segundo é o limite de item por página
        
        //captura o parametro page passado pela url
        const { page = 1 } = req.query;

        const products = await Product.paginate({}, { page, limit: 10});

        return res.json(products);
    },

    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async store(req, res){
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req, res){
        //os parametros do findByIdAndUpdate(qual registro, a modificação feita ,retorna o valor atualizado)
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.json(product);
    },

    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
}