import axios from "axios";
import React, { useState } from "react";
import Button from "../../components/atom/Button";
import Input from "../../components/atom/Input";
import Navbar from "../../molecules/Navbar";
import Axios from "axios";

const AddUser = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    const data = {
      first_name: fname,
      last_name: lname,
      email: email,
      avatar: "https://source.unsplash.com/random",
    };
    Axios.post("http://localhost:3004/users", data);
  };

  return (
    <div className="container-md mt-4">
      <Navbar />
      <h3>Add User</h3>

      <Input
        className="form-control form-control-sm"
        label="First name"
        placeholder="Masukan nama depan anda "
        value={fname}
        onChange={(event) => setFname(event.target.value)}
      />

      <Input
        className="form-control form-control-sm"
        label="Last name"
        placeholder="Masukan nama belakang anda"
        value={lname}
        onChange={(event) => setLname(event.target.value)}
      />

      <Input
        className="form-control form-control-sm"
        label="email"
        placeholder="Masukan email anda"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <br />
      <Button onSubmit={handleSubmit} text="Add User" />
    </div>
  );
};

export default AddUser;
