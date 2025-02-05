import React, { useEffect, useState } from "react";
import Button from "./common/button";
import InputComponent from "./common/input";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const navigate=useNavigate()
    const generateUserId=()=>{
        const curr_date=new Date() 
        let id_str=curr_date.toLocaleString().toLocaleUpperCase().replaceAll("/", "").replaceAll(",", '')
        id_str=id_str.replaceAll("AM", "").replaceAll("PM", "").replaceAll(":", "").replaceAll(" ", "")
        return id_str
    }

  const [newUser, setNewUser] = useState({
    userId:generateUserId(),
    fullName:"",
    email:"",
    address:"",
    phone:""
  });


  const handleAddUser = () => {
    const userDataList=JSON.parse(localStorage.getItem("userData"))||[]
    const newUserList = [...userDataList, newUser]
    localStorage.setItem("userData", JSON.stringify(newUserList))
    setNewUser({})
    alert("User Added Successfully")
    navigate("/add-user")
    
  };
  const handleUserDataChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col gap-10 justify-center w-full p-10 border border-2 rounded-md">
      <div className="w-full flex justify-center font-bold">Add User Data</div>
      <div className="grid grid-cols-2 gap-4 justify-start font-bold ">
        <InputComponent
          label="User Id"
          inputId="userId"
          inputName="userId"
          type="text"
          placeholder="User Id"
          value={newUser.userId}
          disabled={true}
          onChange={handleUserDataChange}
          />
        <InputComponent
          label="Full Name"
          inputId="fullName"
          inputName="fullName"
          type="text"
          placeholder="John Doe"
          value={newUser.fullName}
          onChange={handleUserDataChange}
          />
        <InputComponent
          label="Email"
          inputId="email"
          inputName="email"
          type="text"
          placeholder="john@gmail.com"
          value={newUser.email}
          onChange={handleUserDataChange}
          />
        <InputComponent
          label="Phone Number"
          inputId="phone"
          inputName="phone"
          type="text"
          placeholder="+91-1231231231"
          value={newUser.phone}
          onChange={handleUserDataChange}
          />
        <InputComponent
          label="Address"
          inputId="address"
          inputName="address"
          type="text"
          placeholder="177A Bleecker Street in Manhattan"
          value={newUser.address}
          onChange={handleUserDataChange}
        />
      </div>
      <div className="w-full flex justify-center gap-5">
        <Button
          onClick={handleAddUser}
          extra_css="bg-blue-400 hover:bg-blue-600"
          text="Save"
        />
      </div>
    </div>
  );
};

export default AddUser;
