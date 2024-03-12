const TodoModel = require('../model/todoModel')

exports.createTodo = async (req, res) => {
  try{
    // let email = 
    let reqBody = req.body
    reqBody.email = req.headers['email'];

    const todo = await TodoModel.create(reqBody)
    res.status(201).json({status: 'TO-DO LIST Create success', data: todo})


  }catch(err) {
    res.status(401).json({status: 'TO-DO LIST create failed'})
  }
}

exports.todoUPdate = async (req, res) => {

    try{
      let email = req.headers['email']
      let {_id} = req.params
      let reqBody = req.body;

      const todoUP = await TodoModel.updateOne({_id:_id, email: email}, {reqBody:reqBody})
      res.status(201).json({status: 'TODO update sucess', data:todoUP})

    }catch(err){
      res.status(401).json({status: ''})
    }

}

exports.todoRead = async (req, res) => {

  try{

    let email = req.headers['email']
    let reqBody = req.body;

    const data = await TodoModel.find({email:email})
    res.status(200).json({status: 'TO-DO LIST presented', data: data})

  }catch(err){
    res.status(401).json({status: 'TO-DO LIST Define failed'})
  }

}

exports.removeTodo = async (req, res) => {

  try{
    let email = req.headers['email']
    let {id} = req.params;

    await TodoModel.deleteOne({_id:id, email:email})
    res.status(200).json({status: 'TO-DO LIST remove sucess'})

  }catch(err){
    res.status(401).json({status: 'TO-DO LIST remove failed'})
  }

}

exports.statsMark = async (req, res) => {

  try{

    let email = req.headers['email'];
    let {id} = req.params;
    let reqBody = req.body;


    await TodoModel.updateOne({_id: id, email:email}, reqBody)
    res.status(200).json({status: `Status mark changed as a ${reqBody['status']}`})


  }catch(err){
    res.status(401).json({status: 'Failed to changed status mark'})
  }

}