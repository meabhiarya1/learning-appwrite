import React, { useEffect, useState } from "react";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate, NavLink } from "react-router-dom";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

const Profile = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        console.log(response);
        setUserDetails(response);
      },

      function (error) {
        console.log(error);
      }
    );
  }, []);

  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
      await account.deleteSession("current");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {userDetails ? (
        <>
          <div className="min-h-min max-w-7xl mx-auto shadow-md flex justify-between text-right py-3 px-3 mt-2 rounded-md">
            <div>
              <p className="text-xl">Hello {userDetails.name.split(" ")[0]}</p>
            </div>
            <div>
              <button
                className="bg-red-400 text-white p-1 rounded-md"
                onClick={logoutHandler}
              >
                Logout
              </button>
            </div>
          </div>
          {/* TODO FORM */}
          <TodoForm />
          {/* TODOS BOX */}
          <Todos />
        </>
      ) : (
        <p className="mt-4">
          Please Login to go to Profile{" "}
          <NavLink to="/">
            <span className="bg-blue-500 p-2 cursor-pointer text-white rounded-md">
              Login
            </span>
          </NavLink>
        </p>
      )}
    </>
  );
};

export default Profile;
