import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";

// import AuthContext from "@/context/AuthContext";
import { FaUser } from "react-icons/fa";
import Layout from "@/components/Layout";
import Link from "next/link";
import styles from "@/styles/AuthForm.module.css";

export default function LoginPage() {
  const [username, setUserName] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== passwordConfirm) {
      toast.error("Passwords do not match");
      return;
    }
    // login({ email, password })
    console.log("formData: ", username, email, password);
  };
  return (
    <Layout title="User Registration">
      {" "}
      <div className={styles.auth}>
        <h1>
          <FaUser /> Register
        </h1>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              id="passwordConfirm"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>

          <input type="submit" value="Login" className="btn" />
        </form>

        <p>
          Already have an account? <Link href="/account/login">Log in</Link>
        </p>
      </div>
    </Layout>
  );
}
