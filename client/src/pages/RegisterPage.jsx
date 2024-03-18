import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secPassword, setSecPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== secPassword) {
        throw new Error("Password doesn't match. Please type again");
      }
      const response = await api.post("/user", { name, email, password });
      if (response.status(200)) {
        navigate("/login");
      } else {
        throw new Error(response.data.error);
      }
      console.log("response is", response);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="w-[30rem]">
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <h1>Sign up</h1>
        <label>User Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="type your user name here"
        />
        <label>Email Address</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="type your email address here"
        />
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="type your password here"
        />
        <label>Re-enter password</label>
        <input
          onChange={(e) => setSecPassword(e.target.value)}
          placeholder="make sure that you've entered the same one as above!"
        />
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default RegisterPage;
