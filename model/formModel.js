const mongoos = require('mongoose')

const formModel = mongoos.Schema({
    name: {
        type:String
    },
    subject:{
        type: Array
    },
    date:{
        type:Array
    },
    university:{
        type:String
    },
    rating:{
        type:Number

    }
})

module.exports = mongoos.model("Form",formModel)