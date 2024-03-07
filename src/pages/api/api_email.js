const nodemailer = require("nodemailer"); const sendMail = (userData) => { var transporter = nodemailer.createTransport({ service: "gmail", auth: { user: "sazsappss@gmail.com", pass: "ffpyhmlljqbujfsr", }, }); var mailOptions = { from: "sazsappss@gmail.com", to: "sazsappss@gmail.com", subject: `Name: ${
    userData.name
    }`, text: `Content:${userData.comments} Phone No: ${userData.phoneno} Email: ${
    userData.email
    } `, }; transporter.sendMail(mailOptions, function (error, info) { if (error) { throw new Error(error); } else { console.log("Email Sent"); return true; } }); }; const handler = async (req, res) => { try { const {method} = req; switch (method) { case "POST": { //Do some thing
         await sendMail(req.body); res.status(200).send("Success"); break; } } } catch (err) { res.status(400).json({ error_code: "api_one", message: err.message, }); } }; export default handler;