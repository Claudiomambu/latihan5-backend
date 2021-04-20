import React, { useState, useEffect } from "react";
import Navbar from "../../molecules/Navbar";
import Cards from "../../molecules/Cards";
import Axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3004/users").then((res) => setUser(res.data));
  }, [user]);
  console.log(user);
  return (
    <div>
      <Navbar />
      <h3> Dashboard </h3>
      <div className="row align-items-start">
        {user.map((item) => (
          <Cards
            //key={item.id}
            imageUrl={item.avatar}
            Name={`${item.first_name} ${item.last_name} `}
            email={item.email}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
