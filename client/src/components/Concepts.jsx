import React from "react";

function Concepts() {
  return (
    <section className="skills">
      <h2 className="title">Backend Knowledge</h2>

      <ul className="skills_list">
        <li>
          <strong>Multer:</strong> Upload and handle image files efficiently on
          the server.
        </li>
        <li>
          <strong>
            Sessions with <code>express-session</code> and{" "}
            <code>express-mysql-session</code>:
          </strong>
          Persistent session management stored in a MySQL database.
        </li>
        <li>
          <strong>JWT Authentication with Refresh Tokens:</strong>
          Secure login systems using access tokens and refresh tokens stored in
          httpOnly cookies.
        </li>
        <li>
          <strong>Socket.IO:</strong> Real-time communication between users and
          support for private rooms (chat system).
        </li>
        <li>
          <strong>TypeScript:</strong> Type-safe backend development with
          Node.js and Express.
        </li>
        <li>
          <strong>Nodemailer:</strong> Send and receive emails for features like
          password reset or account verification.
        </li>
        <li>
          <strong>Bcrypt:</strong> Secure password hashing and validation.
        </li>
        <li>
          <strong>Environment Variables:</strong> Configuration using `.env`
          files for sensitive data and environment-based settings.
        </li>
        <li>
          <strong>Modular Project Structure:</strong> Organized codebase using
          folders like <code>controllers</code>, <code>services</code>,{" "}
          <code>models</code>, and <code>middlewares</code>.
        </li>
        <li>
          <strong>Token Handling via httpOnly Cookies:</strong> Prevents
          client-side JavaScript access for better security.
        </li>
      </ul>
    </section>
  );
}

export default Concepts;
