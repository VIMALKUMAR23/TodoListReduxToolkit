import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {


  return (
    <>
    <div>
     <h1 className=' text-4xl p-5 text-center text-white'>Manage Your tasks</h1>
     <AddTodo/>
     <TodoList/>
     </div>
    </>
  )
}

export default App
