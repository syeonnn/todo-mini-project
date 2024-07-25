import { useState } from "react"
import TodoBody from "./components/todos/TodoBody"
import TodoHeader from "./components/todos/TodoHeader"
import TodoModal from "./components/todos/TodoModal"
import DefaultLayout from "./layouts/DefaultLayout"

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
  const [todos, setTodos] = useState(dummyTodos);
  const [filter, setFilter] = useState('');

  const getFilter = (category) => setFilter(category);
  // const [modalIsOpen, setIsOpen] = useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  const addTodoHandler = ({title, summary, category}) => {
    const newTodo = {
      id: self.crypto.randomUUID(), // Web crypto API
      title, 
      summary,
      category
    }
    console.log(newTodo);
    setTodos([...todos, newTodo])
  }

  // const updateTodoHandler = ({id, title, summary, category}) => {
  //   console.log({id, title, summary, category});

  //   setTodos(prevTodos => 
  //     prevTodos.map(todo => 
  //       todo.id === id 
  //         ? { ...todo, title, summary, category } 
  //         : todo
  //     ));
    
  //     todos.map(todo => todo.id == updateTodo.id ? updateTodo)
  // }

  const updateTodoHandler = (updateTodo) => {
    const updatedTodos = todos.map(todo => todo.id == updateTodo.id ? updateTodo : todo)
    setTodos(updatedTodos)
  }

  const deleteTodoHandler = ({id, title, summary, category}) => {
    // 필터링
    const deletedTodos = todos.filter(todo => todo.id != id);
    setTodos(deletedTodos);
  }
  
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
          <TodoHeader onAdd={addTodoHandler} getFilter={getFilter} />
          <TodoBody todos={todos} onUpdate={updateTodoHandler} onDelete={deleteTodoHandler} filter={filter} />
          {/* {modalIsOpen && 
          <Modal
            isOpen={modalIsOpen}
            addTodo={(newTodo) => setTodos([...todos,newTodo ])}
            closeModal={closeModal}
          />} */}
        </section>   
      </DefaultLayout>
    </>
  )
}

export default App
