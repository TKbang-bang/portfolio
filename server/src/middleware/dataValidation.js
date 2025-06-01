const dataValidation = (req, res, next) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ ok: false, message: "Missing data" });
  }

  // name validation
  if (typeof name !== "string")
    return res
      .status(400)
      .json({ ok: false, message: "Name should be a string" });

  if (!/^[A-Za-z\s]+$/.test(name)) {
    return res.status(400).json({
      ok: false,
      message: "Name should only contain letters and spaces",
    });
  }

  if (name.endsWith(" ")) {
    req.body.name = name.trim();
  }

  // email validation
  if (typeof email !== "string")
    return res
      .status(400)
      .json({ ok: false, message: "Email should be a string" });

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({
      ok: false,
      message: "Email should be a valid email address",
    });
  }

  if (email.endsWith(" ")) {
    req.body.email = email.trim();
  }

  // subject validation
  if (typeof subject !== "string")
    return res
      .status(400)
      .json({ ok: false, message: "Subject should be a string" });

  if (subject.endsWith(" ")) {
    req.body.subject = subject.trim();
  }

  // message validation
  if (typeof message !== "string")
    return res
      .status(400)
      .json({ ok: false, message: "Message should be a string" });

  if (message.endsWith(" ")) {
    req.body.message = message.trim();
  }

  next();
};

module.exports = dataValidation;
