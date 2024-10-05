import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleComplete } from '../features/todos/todoSlice';

function TodoList() {
    const todos = useSelector((state) => state.todo.value); 
    const dispatch=useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
      };
    
      const handleToggleComplete = (id) => {
        dispatch(toggleComplete(id));
      };
    return (
      <div className="flex justify-center items-center mt-10">
        <div className="card bg-green-300 text-primary-content w-96">
          <div className="card-body text-black">
            <h2 className="card-title">Todo List</h2>
            {/* Display the list here */}
            <ul className="mt-4">
            {todos.length === 0 ? (
              <li className="italic">No todos added yet.</li>
            ) : (
              todos.map((todo) => (
                <li
                  key={todo.id}
                  className={`py-2 border-b last:border-0 flex items-center justify-between ${
                    todo.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  <span>{todo.text}</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleToggleComplete(todo.id)}
                      className={`btn btn-sm ${
                        todo.completed
                          ? "btn-secondary"
                          : "btn-info"
                      }`}
                    >
                      {todo.completed ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
</svg>
 : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
 }
                    </button>
                    <button
                      onClick={() => handleDelete(todo.id)}
                      className="btn btn-sm bg-red-500 border-none"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>

                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default TodoList;
