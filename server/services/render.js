 
 const axios= require('axios')

exports.homeRoutes =(req,res)=>{
    //make gate request 
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
      
        res.render('index.ejs',{users:response.data});
        
    })

    .catch(err=>{
        res.send(err)
    })
   
}
exports.add_user =(req,res)=>{
    res.render('add_user.ejs');
}



//coment


exports.update_user =(req,res)=>{
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
    .then(function(userdata){
        res.render('Update-user.ejs',{user:userdata.data})
    })
    .catch(err=>{
        res.send(err)
    })
}