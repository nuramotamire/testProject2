const { timingSafeEqual } = require('crypto');
var Userdb = require('../model/model');

//create and save employer

exports.create=(req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"content can not be empity"});
        return;
    }
      //new employer
  const user=new Userdb({

    name:req.body.name,
    email:req.body.dateofbirth,
    gender:req.body.gender,
    salary:req.body.salary
    
})

 user
    .save(user)
    .then(data=>{
       // res.send(data)
       res.redirect('/add-user')
    })

    .catch(err=>{
        res.status(500).send({
            message:err.message||"some error ocured whaile creating a create operation"
        })
    })
 
}

//retrive and return

exports.find=(req,res)=>{

    if(req.query.id){
        
        const id= req.query.id
         Userdb.findById(id)
          .then(data=>{
              if(!data){
                  res.status(404).send({message:"not found employer with id"+ id})
              }
              else{
                  res.send(data)
              }
          })
          .catch(err=>{
              res.status(500).send({
                  message:"error retriving employe with id:"+ id
              })
          })

    }else{
        Userdb.find()
        .then(user=>{
            res.send(user)
        })
        .catch(err=>{
            res.status(500).send({message:err.message||"error occured while retriving user informoation"})
  
        })
    }
   
}

//update
exports.update=(req,res)=>{
    if(!req.body){
        return res
          .status(400)
          .send({message:"data appdate can not be empity"})
    }

    const id= req.params.id
    Userdb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
      .then(data=>{
          if(!data){
              res.status(404).send({message:"can not update employer with " +$(id)+" , maybe user not found "})

          }else{
              res.send(data)
          }
      })
      .catch(err =>{
          res.status(500).send({message:"error update employe information"})
      })

}

//delete
exports.delete=(req,res)=>{
    const id= req.params.id
      Userdb.findByIdAndDelete(id)
       .then(data=>{
           if(!data){
               res.status(404).send({message:"can not delet with $(id),may be id is wrong"})
           }else{
               res.send({
                   message:"employe deleted successfuly"
               })
           }
       }).catch(err=>{
           res.status(500).send({message:"could not delete with id"+ id});
       });

}