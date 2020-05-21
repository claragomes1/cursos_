/*Schema é basicamente os campos que o produto deve ter e quais tipos de valores esses campos podem receber*/

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true, //O campo é obrigatorio
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: { //Vai ser preechida automaticamente salvando a data que o registro foi salvo no banco de dados
        type: Date,
        default: Date.now,
    },
});

ProductSchema.plugin(mongoosePaginate);

//Codigo para registrar um model na aplicação
mongoose.model('Product', ProductSchema);