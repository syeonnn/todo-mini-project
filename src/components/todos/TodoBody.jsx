import React, { useState } from 'react'
import TodoItem from './TodoItem';

const TodoBody = ({ todos, onUpdate, onDelete, filter }) => {
  // const [filteredTodos, setFilteredTodos] = useState('');

  // if (filter !== 'All')
  //   {setFilteredTodos(todos);}
  // else{
  //   setFilteredTodos(todos.filter(todo => todo.category === filter));
  // }

  return (
    <>
      <ul className='px-0 my-8'>
        {/* li 태그를 todos 배열의 요소만큼 렌더링 */}
        {
          filter === 'All' ?
          todos.map(todo => <TodoItem key={todo.id} item={todo} onUpdate={onUpdate} onDelete={onDelete}>{todo}</TodoItem>)
          : todos.filter(todo => todo.category === filter).map(todo => <TodoItem key={todo.id} item={todo} onUpdate={onUpdate} onDelete={onDelete}>{todo}</TodoItem>)
        }
      </ul>
    </>
  )
}
export default TodoBody