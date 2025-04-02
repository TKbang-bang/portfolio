const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.json());

app.post("/maildata", async (req, res) => {
  const data = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${data.userEmail}" <${process.env.EMAIL}>`,
    replyTo: data.userEmail,
    to: `${process.env.EMAIL}`,
    subject: `Portfolio request`,
    html: `<div>
      <h1>${data.about}</h1>
      <p>${data.purpose}</p>
    </div>`,
  };

  const info = await transporter.sendMail(mailOptions);

  if (!info.accepted)
    return res.json({ ok: false, message: "The mail have'nt been sended" });

  return res.json({ ok: true, message: "Mail sended" });
});

app.listen(app.get("port"), () => console.log("Server on"));
