import React from "react";
import { Link, Outlet } from "react-router-dom";
import { all_components } from "./paths";

const Layout = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="mx-10 px-10 py-4 w-[90%]">
        <nav className="flex flex-rows gap-5 my-4">
          {all_components.map((elem) => (
            <Link to={elem.route}>
              <span className="border border-2 border-gray-400 text-gray-600 font-bold py-1 px-3 text-center rounded-md hover:bg-gray-400 hover:text-white">
                {elem.title}
              </span>
            </Link>
          ))}
        </nav>
        <section className="mt-10">{<Outlet />}</section>
      </div>
    </div>
  );
};

export default Layout;
