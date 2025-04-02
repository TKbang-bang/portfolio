import React, { useEffect, useState } from "react";
import axios from "axios";

function Contact() {
  const [copied, setCopied] = React.useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [sended, setSended] = useState(false);
  // const [about, setAbout] = useState("");
  const [formError, setFormError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 10000);
  }, [copied]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSended(true);
    setFormError(false);
    setErrorMsg("");

    if (userEmail == "" || purpose == "") {
      setFormError(true);
      setErrorMsg("Phill all the blank spaces");
      setSended(false);
    } else {
      try {
        const res = await axios.post("http://localhost:3000/maildata", {
          userEmail,
          about: document.querySelector("#about").value,
          purpose,
        });

        if (!res.data.ok) throw new Error(res.data.message);

        setSended(false);
        alert(res.data.message);

        setErrorMsg("");
        setFormError(false);
        setUserEmail("");
        setPurpose("");
      } catch (error) {
        setFormError(true);
        setErrorMsg(error.response.data.message);
        setSended(false);
      }
    }
  };

  return (
    <section className="contact" id="contact">
      <h1 className="title">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="from">
          <label htmlFor="from">From</label>
          <input
            type="text"
            name="from"
            id="from"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Your email..."
          />
        </div>

        <div className="to">
          <label htmlFor="to">To</label>
          <div className="to_">
            <input
              type="text"
              name="to"
              id="to"
              readOnly
              value={"woodleyklavensky@gmail"}
            />
            {!copied ? (
              <img
                src="/copy.png"
                alt=""
                onClick={() => {
                  navigator.clipboard.writeText("woodleyklavensky@gmail");
                  setCopied(true);
                }}
              />
            ) : (
              <img src="/check.png" />
            )}
          </div>
        </div>

        <div className="about">
          <label htmlFor="about" onChange={(e) => setAbout(e.target.value)}>
            About
          </label>
          <select name="about" id="about">
            <option value="services required">Services required</option>
            <option value="job offering">Job offering</option>
          </select>
        </div>

        <div className="purpose about">
          <label htmlFor="purpose">Purpose</label>
          <textarea
            name="purpose"
            id="purpose"
            cols="30"
            rows="10"
            maxLength={350}
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            placeholder="Your message..."
          ></textarea>
        </div>

        {formError && <p className="error">*{errorMsg}</p>}

        {sended ? (
          <button>Sending mail</button>
        ) : (
          <button type="submit">Send mail</button>
        )}
      </form>
    </section>
  );
}

export default Contact;
