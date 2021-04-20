import React, { useState } from "react";
import Button from "../../components/atom/Button";
import Input from "../../components/atom/Input";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [noltp, setnotlp] = useState("");
  const [alamat, setalamat] = useState("");

  const handleSubmit = () => {
    const dataRegister = {
      fullName: name,
      username: username,
      email: email,
      phone: noltp,
      address: alamat,
    };
    console.log(dataRegister);
  };

  return (
    <div className="container-md mt-4">
      <h3>Register</h3>

      <Input
        className="form-control"
        placeholder="masukan nama lengkap anda"
        label="Full Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Input
        className="form-control"
        placeholder="masukan username anda"
        label="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <Input
        className="form-control"
        placeholder="masukan email anda"
        label="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        className="form-control"
        placeholder="masukan nomor telefon anda"
        label="Phone Number"
        value={noltp}
        onChange={(event) => setnotlp(event.target.value)}
      />
      <Input
        className="form-control"
        placeholder="masukan alamat anda"
        label="Address"
        value={alamat}
        onChange={(event) => setalamat(event.target.value)}
      />
      <br />
      <Button onSubmit={handleSubmit} text="Register" />
    </div>
  );
};

export default Register;
