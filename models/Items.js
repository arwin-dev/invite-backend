const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema(
    {
        itemID : {
            type: mongoose.Schema.Types.ObjectId,
            require:true
        },
        item : {
            type: String,
            require:true
        },
        type : {
            type: String,
            require:true
        },
        price : {
            type: Number,
            require:true
        },
        stock : {
            type: Number,
            require:false
        },
        description : {
            type: String,
        },
    },
        {
            timestamps:true
        }
)



module.exports = mongoose.model('Item',itemSchema)