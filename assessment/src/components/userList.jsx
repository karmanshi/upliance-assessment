import React, { useState, useEffect } from "react";

const UserList = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const userList = JSON.parse(localStorage.getItem("userData")) || [];
    setUserData([...userList]);
  }, []);
  return (
    <div className="relative overflow-x-auto">
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
          {userData.map((elem) => (
            <tr className="bg-white border-b border-gray-200" key={elem.userId}>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {elem.fullName}
              </th>
              <td className="px-6 py-4">{elem.email}</td>
              <td className="px-6 py-4">{elem.phone}</td>
              <td className="px-6 py-4"></td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default UserList;
