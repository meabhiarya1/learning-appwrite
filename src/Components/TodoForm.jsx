import React, { useState } from "react";
import { databases } from "../appwrite/appwriteConfig";
import { v4 as uuidv4 } from "uuid";
import Todos from "./Todos";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const [responseState, setResponseState] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const documentData = {
      todo: todo,
    };

    const promise = databases.createDocument(
      "65f9224c0b94a45cfe26",
      "65f922ae075227d5184a",
      uuidv4(),
      documentData
    );

    promise.then(
      function (response) {
        setResponseState(response);
        setTodo("")
        // console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
  };

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <form
        action=""
        className="flex justify-center mb-10"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Todo"
          className="border p-2 w-2/3 rounded-md"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button
          className="bg-purple-500 p-2 text-white ml-2 rounded-md"
          type="submit"
        >
          Add Todo
        </button>
      </form>
      <Todos responseState={responseState} />
    </div>
  );
};

export default TodoForm;
