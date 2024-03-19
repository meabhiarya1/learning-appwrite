import React, { useState, useEffect } from "react";
import { databases } from "../appwrite/appwriteConfig";

const Todos = ({ responseState }) => {
  const [todos, setTodos] = useState({});
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const getTodos = databases.listDocuments(
      "65f9224c0b94a45cfe26",
      "65f922ae075227d5184a"
    );

    getTodos.then(
      function (response) {
        setTodos(response.documents);
        console.log(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );
    setLoader(false);
  }, []);

  // useEffect(() => {
  //   if (responseState) {
  //     setTodos((prev) => {
  //       const copiedData = { ...prev };
  //       copiedData.documents.push(responseState);
  //       return copiedData;
  //     });
  //   }
  // }, [responseState]);

  // const deleteTodo = (id) => {
  //   const promise = databases.deleteDocument(
  //     "65f9224c0b94a45cfe26",
  //     "65f922ae075227d5184a",
  //     id
  //   );

  //   promise.then(
  //     function (response) {
  //       setTodos(response);
  //     },
  //     function (error) {
  //       console.log(error);
  //     }
  //   );
  // };

  // return (
  //   <div className="max-w-7xl mx-auto">
  //     <p className="text-xl font-bold mb-2">Todo List</p>
  //     {loader ? (
  //       <p>Loading ...</p>
  //     ) : (
  //       <div>
  //         {console.log(todos)}
  //         {todos.documents &&
  //           todos.documents.map((item, index) => (
  //             // console.log(item)
  //             <div key={index}>
  //               <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
  //                 <div>
  //                   <p>{item.todo}</p>
  //                 </div>
  //                 <div>
  //                   <span
  //                     className="text-red-400 cursor-pointer"
  //                     // onClick={() => {
  //                     //   deleteTodo(item.$id);
  //                     // }}
  //                   >
  //                     Delete
  //                   </span>
  //                 </div>
  //               </div>
  //             </div>
  //           ))}
  //       </div>
  //     )}
  //   </div>
  // );

  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-xl font-bold mb-2">Todo List</p>
      {loader ? (
        <p>Loading ...</p>
      ) : (
        <div>
          {todos.forEach((item) => {
            console.log(item);
          })}
          {/* {todos &&
            todos.forEach((item) => (
              <div>
                <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
                  <div>
                    <p>{item.todo}</p>
                  </div>
                  <div>
                    <span
                      className="text-red-400 cursor-pointer"
                      // onClick={() => {
                      //   deleteTodo(item.$id)
                      // }}
                    >
                      Delete
                    </span>
                  </div>
                </div>
              </div>
            ))} */}
        </div>
      )}
    </div>
  );

  // return (
  //   <></>
  // )
};

export default Todos;
