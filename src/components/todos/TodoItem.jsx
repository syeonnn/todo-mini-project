import React, { useEffect, useState, useContext } from 'react'
import IconButton from '@/components/ui/IconButton'
import { TODO_CATEGORY_ICON } from '@/constants/icon'
import Modal from '@/components/ui/Modal';
import TodoForm from './TodoForm';
import { createPortal } from 'react-dom';
import { TodoDispatchContext} from '@/contexts/TodoContext';

const TodoItem = ({ item }) => {
  const dispatch = useContext(TodoDispatchContext);
  const [IsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const UpdateHandler = () => {
    dispatch({ type: "UPDATE", newTodo: item })
    openModal()
    
  }
  const DeleteHandler = () => {
    dispatch({ type: "DELETE", newTodo: item })
  }

  return (
    <li className="flex gap-4 justify-between my-4 py-4 px-4 border-[1px] bg-gray-700 rounded-md shadow-xl">
        <div>
            <span className="text-lg font-medium text-gray-300">{ TODO_CATEGORY_ICON[item.category] }</span>
            <div>
                <h2 data-test="title" className="mb-0 text-lg font-bold text-gray-100 uppercase">{ item.title }</h2>
                <p className="mt-2 text-base text-gray-200">{ item.summary }</p>
            </div>
        </div>
        <div className="flex items-center gap-1">
            <IconButton icon={'✏️'} clickHandler={UpdateHandler} />
            <IconButton  textColor='text-red-300' icon={'🗑'} clickHandler={DeleteHandler} />
        </div>
        {IsOpen && createPortal( <Modal closeModal={closeModal}>
          <TodoForm item={item} closeModal={closeModal} openFor={'update'}>
          Update Todo
          </TodoForm>
        </Modal>, document.body)}
    </li>
  )
}

export default TodoItem