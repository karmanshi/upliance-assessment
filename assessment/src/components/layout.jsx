import React from "react";
import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="m-10 p-10 w-[90%]">
        <nav className="flex flex-rows gap-5 my-4">
          <span className="border border-2 py-1 px-3 text-center rounded-md">
            <Link to="/counter">Counter</Link>
          </span>
          <span className="border border-2 py-1 px-3 text-center rounded-md">
            <Link to="/text-editor">Text Editor</Link>
          </span>
        </nav>
        <section className="mt-10">{<Outlet />}</section>
      </div>
    </div>
  );
};

export default Layout;
