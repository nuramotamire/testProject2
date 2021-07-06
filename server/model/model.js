const mongoose=require('mongoose');

var schema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    dateofbirth:{
        type:Date,
        require:true,
    
    },
    salary:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        status:String
    }
})

const Userdb=mongoose.model('userdb',schema)

module.exports= Userdb