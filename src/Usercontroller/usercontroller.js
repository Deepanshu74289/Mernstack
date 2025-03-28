const { validname, validemail, validpassword } = require("../allvalidation/allvalidation.js");
const userModel = require("../Model/Usermodel.js");

exports.createUser = async (req, res) => {
    const data = req.body;
    const { name, EmailId, password } = data;

    if (!name) {
        return res.status(400).send({ status: false, msg: "Please provide a name" });
    }
    if (!validname(name)) {
        return res.status(400).send({ status: false, msg: "Name is not valid" });
    }

    if (!EmailId) {
        return res.status(400).send({ status: false, msg: "Please provide a valid EmailId" });
    }
    if (!validemail(EmailId)) {
        return res.status(400).send({ status: false, msg: "Please provide a valid EmailId" });
    }

    if (!password) {
        return res.status(400).send({ status: false, msg: "Please provide a valid password" });
    }
    if (!validpassword(password)) {
        return res.status(400).send({ status: false, msg: "Please provide a strong password" });
    }

    const existinguser = await userModel.findOne({ EmailId });
    if (existinguser) {
        return res.status(400).send({ status: false, msg: "EmailId is already registered" });
    }

    const userdb = await userModel.create(data);
    return res.status(201).send({ status: true, msg: "Data created successfully", data: userdb });
};
