import grpModel from "../models/grpModel.js"


const addGrp = async function (req, res) {
    // console.log(req.body)
    try{
        const grpInstance = new grpModel(req.body)
        var result = await grpInstance.save();
        console.log(result);
        res.status(201).send({msg : "Group Addedd", data: result})
    }
    catch(error){
        res.send({error: error.message})
    }
}

const showGroup = async function (req, res) {
    try{
        var result = await grpModel.find()

        res.send({msg : "Showing Groups", data : result})

    }
    catch(err){
        res.send ({msg : err})
    }
}


export {
    addGrp,
    showGroup
}