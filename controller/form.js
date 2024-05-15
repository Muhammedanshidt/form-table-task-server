const formModel = require("../model/formModel");

const getData = async (req, res) => {
    console.log(req.body);
    const { name, university,rating } = req.body;

    try {
        const formData = new formModel({ name, university ,rating});
        await formData.save();
        res.status(200).json({ message: "Data saved successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

const getForm = async (req, res) => {

    try {
        console.log("ertyujikol")


        const data = await formModel.find()

        console.log(data);
            res.status(200).json({data})
        

    } catch (err) {
        console.log(err);
    }

}

module.exports = {
    getData,
    getForm
}
