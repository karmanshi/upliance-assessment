import React, { useState, useEffect } from "react";
import InputComponent from "./common/input";

const UserList = () => {
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState("");
  const [filterdData, setFilteredData] = useState([]);

  const handleSearch = (e) => {
    let searchVal = e.target.value;
    setSearch(searchVal);
    if (searchVal == "") {
      setFilteredData(userData);
    }else{
      const filteredData = userData.filter((elem) => {
        if(elem.fullName.toLowerCase().includes(search.toLowerCase())){
          return elem;
        }
      });
      setFilteredData(filteredData);
    }
  };
  const handleDelete = (id) => {
    const deleteData= userData.filter((elem) => elem.userId !== id)
    setUserData(deleteData);
    setFilteredData(deleteData);
    localStorage.setItem("userData", JSON.stringify(deleteData));
    alert("User deleted successfully");
  }
  
  useEffect(() => {
    const userList = JSON.parse(localStorage.getItem("userData")) || [];
    setUserData([...userList]);
    setFilteredData([...userList]);
  }, []);
  return (
    <div className="relative overflow-x-auto">
      <div className="w-[35%] my-5">
        <InputComponent
          inputName="search"
          onChange={handleSearch}
          value={search}
          placeholder="Search by full name...."
          label=""
          inputId="search"
          type="search"
        />
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Full Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email Id
            </th>
            <th scope="col" className="px-6 py-3">
              Phone Number
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {filterdData.map((elem) => (
            <tr className="bg-white border-b border-gray-200" key={elem.userId}>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {elem.fullName}
              </th>
              <td className="px-6 py-4">{elem.email}</td>
              <td className="px-6 py-4">{elem.phone}</td>
              <td className="px-6 py-4">
                <button className="text-red-600 hover:text-red-900" onClick={() => handleDelete(elem.userId)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
