import { useEffect, useState } from 'react';
import TodoFilter from './TodoFilter';
import { createPortal } from 'react-dom';
import Modal from '@/components/ui/Modal';
import TodoForm from './TodoForm';

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

// 함수형 컴포넌트(TodoHeader)
const TodoHeader = ({ onAdd,getFilter }) => {
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
      <TodoForm onAdd={onAdd} closeModal={closeModal} openFor={'add'}>
        New Todo
      </TodoForm>
    </Modal>, document.body)}
    <TodoFilter handleChangeSelect={(filter) => getFilter(filter)} />
  </div> 
)
}

export default TodoHeader;