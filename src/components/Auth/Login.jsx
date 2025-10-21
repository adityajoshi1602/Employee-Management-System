import React, { useState } from "react";
import styles from "./Login.module.css";

function Login({ loginHandle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (loginHandle) loginHandle(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.main_login}>
      <div className={styles.login_box}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>Login</h1>
        </div>
        <form onSubmit={submitHandler}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Enter Your Password"
          />
          <button className={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
