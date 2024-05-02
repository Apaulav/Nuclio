const userModel=require("../models/user.model")

//funciones

 const allUsers = (req, res) => {
    //console.log('parametros: ', req.params)
    //const userFound = users.map(user => user)
    userModel.findOne()
    .then(userDb => {
        //console.log(userDb)
        return res.status(200).json(userDb)
    })
    .catch(err => {return res.status(500).json(err)})
    //console.log('parametros: ', taskFound.task.id)
    //res.json(userFound)
  } 

const findUsers = (req, res) => {
    //console.log('parametros: ', req.params)
    //const userFound = users.find(user => user.id == Number(req.params.id))
    userModel.findById(req.params.id)
    .then(userDb => {
        //console.log(userDb)
        return res.status(200).json(userDb)
    })
    //console.log('parametros: ', taskFound.task.id)
    //res.json(userFound)
  }

const addUser = (req,res) => {
    //console.log(req.body)
    userModel.create(req.body)
    .then(userDb => {return res.status(200).json(userDb)})
    .catch( err=>{ return res.status(500).json(err)})
    
}

module.exports = {
    //funciones
    allUsers,
    findUsers,
    addUser
}