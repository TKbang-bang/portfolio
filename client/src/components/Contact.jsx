import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Offer a job");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ name, email, subject, message });
  };

  return (
    <section className="contact" id="contact">
      <h1 className="title">Contact</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name or company name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your email or company email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <select
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        >
          <option>Offer a job</option>
          <option>Request a service</option>
          <option>General inquiry</option>
          <option>Feedback</option>
          <option>Other</option>
        </select>

        <textarea
          name="message"
          placeholder="Your message"
          rows="6"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Send</button>
        {status && <p className="status">{status}</p>}
      </form>
    </section>
  );
}

export default Contact;
