import React, { useState } from "react";
import Button from "../../components/atom/Button";
import Input from "../../components/atom/Input";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const data = {
      username: username,
      password: password,
    };
    console.log(data);
  };

  return (
    <div className="container-md mt-4">
      <h3>Login</h3>

      <Input
        className="form-control form-control-sm"
        label="Username"
        placeholder="Masukan username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />

      <Input
        className="form-control form-control-sm"
        label="Password"
        placeholder="Masukan password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <br />
      <Button onSubmit={handleSubmit} text="Submit" />
    </div>
  );
};

export default Login;
