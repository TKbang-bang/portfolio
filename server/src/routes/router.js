const { Router } = require("express");
const dataValidation = require("../middleware/dataValidation");
const mailSender = require("../services/sendMail.service");
const router = Router();

router.post("/contact", dataValidation, async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const sendMail = await mailSender(name, email, subject, message);

    res.json({ ok: true, message: "Email sent successfully" });
  } catch (error) {
    return res
      .status(error.status || 500)
      .json({ ok: false, message: error.message || "Internal Server Error" });
  }
});

module.exports = router;
