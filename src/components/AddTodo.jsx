import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todos/todoSlice';
function AddTodo() {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();
  
    const handleAddTodo = () => {
      if (todo.trim() === "") return; // Prevent adding empty todos
      dispatch(addTodo(todo));
      setTodo(""); // Clear input after dispatch
    };
  
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        handleAddTodo();
      }
    };
  
    return (
      <div className="flex items-center justify-center">
        <div className="card bg-base-100 lg:w-[850px] shadow-2xl flex justify-center items-center">
          <div className="card-body">
            <h2 className="card-title">Enter Your Todo Here!</h2>
  
            <div className="card-actions flex flex-row items-center space-x-4 mt-4">
            <div className=' inline-flex'>
              <input
                type="text"
                placeholder="Enter todo"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                onKeyPress={handleKeyPress}
                className="input input-bordered input-warning w-full max-w-xs"
              />
              
              <button className="btn btn-primary mx-3" onClick={handleAddTodo}>
                ADD
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default AddTodo;