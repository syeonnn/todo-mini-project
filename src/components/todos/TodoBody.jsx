import React, { useState, useContext, useEffect } from 'react'
import TodoItem from './TodoItem';
import { TodoContext, TodoDispatchContext} from '@/contexts/TodoContext';

const TodoBody = () => {
  const { todos, category, setFilter } = useContext(TodoContext);
  // dispatch는 useEffect로 감싸기  추천함
  const dispatch = useContext(TodoDispatchContext);
  console.log("todos in TOdoBody", todos);

  useEffect(()=>console.log("렌더링...TodoBody... todos",todos ), [todos])

  return (
    <>
      <ul className='px-0 my-8'>
        {
          category === 'All' ?
          todos.map(todo => <TodoItem item={todo} key={todo.id}>{todo}</TodoItem>)
          : todos.filter(todo => todo.category === category).map(todo => <TodoItem item={todo} key={todo.id}>{todo}</TodoItem>)
        }
      </ul>
    </>
  )
}
export default TodoBody