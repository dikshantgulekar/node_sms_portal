import libModel from "../models/libModel.js";

const addLibrary = async function (req, res) {
    console.log("addLibrary");
    console.log(req.body);
    try {
        const libInstance = new libModel(req.body); 
        const result = await libInstance.save(); 
        console.log(result);
        res.status(201).send({ msg: "Library Added", data: result }); 
    } catch (err) {
        res.status(500).send({ err: err.message }); 
        console.log(err, "error");
    }
};

const showLibrary = async function (req, res) {
    try {
        const result = await libModel.find(); 
        console.log(result);
        res.status(200).send({ msg: "Showing Libraries", data: result }); 
    } catch (err) {
        res.status(500).send({ err: err.message });
        console.log(err, "error");
    }
};

export { addLibrary, showLibrary };
