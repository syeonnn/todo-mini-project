import { useReducer, useState, useContext }  from 'react';
import TodoFilter from './TodoFilter';
import { createPortal } from 'react-dom';
import Modal from '@/components/ui/Modal';
import TodoForm from './TodoForm';

// 함수형 컴포넌트(TodoHeader)
const TodoHeader = () => {
  const [IsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
      <div className="flex items-center justify-between mb-2" id="task-control">
        <button className="px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
                data-cy="add-todo-button" onClick={openModal}>
          Add Todo
        </button>
        {IsOpen && createPortal( <Modal closeModal={closeModal}>
          <TodoForm closeModal={closeModal} openFor={'add'}>
            New Todo
          </TodoForm>
        </Modal>, document.body)}
        <TodoFilter />
      </div>
)
}

export default TodoHeader;