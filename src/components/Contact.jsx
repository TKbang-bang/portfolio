import React, { useEffect, useState } from "react";

function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <section className="contact">
      <h2 className="hd">Contact</h2>

      <ul className="contact__list">
        <li>
          <img src="/email.png" alt="email" />
          <p className="email">klavesnkytanis@gmail.com</p>
          <div className="copy">
            {!copied ? (
              <img
                src="/copy.png"
                alt="copy"
                onClick={() => {
                  navigator.clipboard.writeText("klavesnkytanis@gmail.com");
                  setCopied(true);
                }}
              />
            ) : (
              <img src="/check.png" alt="check" />
            )}
          </div>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/woodley-tanis-k-666873357/">
            <img
              src="/linkedin.png"
              alt="linkedin"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            />
            <p>Linkedin</p>
          </a>
        </li>

        <li>
          <a href="">
            <img src="/whatsapp.png" alt="" />
            <p>Whatsapp</p>
          </a>
        </li>

        <li>
          <a href="">
            <img src="/icons8-github-96.png" alt="" />
            <p>github</p>
          </a>
        </li>

        <li>
          <a href="">
            <img src="/instagram.png" alt="" />
            <p>Instagram</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
