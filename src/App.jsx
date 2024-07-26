import { useReducer, useState, useContext, useEffect } from "react"
import TodoBody from "./components/todos/TodoBody"
import TodoHeader from "./components/todos/TodoHeader"
import TodoModal from "./components/todos/TodoModal"
import DefaultLayout from "./layouts/DefaultLayout"
import { TodoContext, TodoDispatchContext } from './contexts/TodoContext'

const reducer = (todos, action) => {
  console.log("Reducer action:", action);
  switch (action.type) {
    case "ADD":
      return [...todos, action.newTodo]
    case "UPDATE":
      return todos.map(todo => todo.id == action.newTodo.id ? action.newTodo : todo)
    case "DELETE":
      return todos.filter(todo => todo.id != action.newTodo.id)
  }
}

const dummyTodos = [
  {
    id: 1,
    title: 'React 공부',
    summary: 'React를 공부한다.',
    category: 'TODO',
  },
  {
    id: 2,
    title: '점심 먹기',
    summary: '점심을 먹는다.',
    category: 'PROGRESS',
  },
  {
    id: 3,
    title: '커피 마시기',
    summary: '커피를 마신다.',
    category: 'DONE',
  }
]

function App() {
  const [todos, dispatch] = useReducer(reducer, dummyTodos);
  const [category, setFilter] = useState('All');

  console.log(todos);

  useEffect(()=>console.log("렌더링...App... todos",todos ), [todos])

  // const filterTodos = () => selectedCategory === 'ALL' ?
  //                           todos : todos.filter(todo => todo.category === filter);
  // const filteredTodos = filterTodos();
  
  return (
    <>
      <DefaultLayout>
        <header>
          <div className="flex justify-center">
            <a to="/">
              <h1 className=' animate-bounce-slow py-8 text-red-200 max-w-max text-7xl'>todos</h1>
            </a>
          </div>
        </header>
        <section className="max-w-xl m-4 mx-auto">

          <TodoContext.Provider value={{ todos, category, setFilter }}>
            <TodoDispatchContext.Provider value={dispatch}>

              <TodoHeader />
              <TodoBody />

            </TodoDispatchContext.Provider>
          </TodoContext.Provider>
        </section>   
      </DefaultLayout>
    </>
  )
}

export default App
