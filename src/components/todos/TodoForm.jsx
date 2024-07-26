import React, {useState, useEffect, useContext} from 'react';
import { TODO_CATEGORY_ICON } from '@/constants/icon';
import { TodoContext, TodoDispatchContext} from '@/contexts/TodoContext';

const TodoForm = ({ item,closeModal,openFor }) => {
    const dispatch = useContext(TodoDispatchContext);

    const [newItem, setNewItem] = useState({ id: '', title: '', summary: '', category: '' });
   
    const [filled, setFilled] = useState(true);
    const [initial, setInitial] = useState(true);
    const [isDisabled, setIsDisabled] = useState(true);

    // new인지, update인지 확인하는 함수
    // 리팩토링 : state를 하나의 Todo객체로 관리
    // const isNewTodoForm = (children) => children.startsWith('New') ? true : false;
    // const [title, setTitle] = useState(isNewTodoForm(children) ? '': todo.title);
    // const [summary, setSummary] = useState(isNewTodoForm(children) ? '': todo.summary);
    // const [category, setCategory] = useState(isNewTodoForm(children) ? '': todo.category);

    // 버튼 클릭 핸들러
    // const addOrUpdateTodoHandler = () => {
    //     if (isNewTodoForm(children)) {
    //         const newTodo = {title, summary, category};
    //         addTodoHandler(newTodo);
    //     } else {
    //         const updateTodo = {
    //             id: item.id,
    //             title,
    //             summary,
    //             category
    //         }
    //     }
    //     onUpdate(updateTodo);
    // }

    const btnclickHandler = () => {
        if (filled) {
            openFor === 'add' ? dispatch({ type: "ADD", newTodo: newItem }) : dispatch({ type: "UPDATE", newTodo: newItem });
            closeModal();
        }
    }

    useEffect(() => {   
        if (initial) {
            setInitial(false);
            return;
        }
        if (!newItem.title||!newItem.summary||!newItem.category){
            setFilled(false);
        }
        else {
            console.log(newItem);
            setFilled(true);
            setIsDisabled(false);
        }
    }, [newItem]);

    useEffect(()=>{
        if (openFor === 'update' && item) {
            setNewItem({
                id: item.id,
                title : item.title,
                summary : item.summary,
                category : item.category,
            })
            setIsDisabled(false);
        }
    }, [openFor, item])

    return (
        <>
            {/* <h3>{children}</h3> */}
            <form className='my-2'>
                <h1 className='block mb-2 text-2xl text-white'>{openFor} Todo</h1>
                <div>
                    <label className='block mb-2 text-xl text-white' htmlFor='title'>Title</label>
                    <input className='w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded' 
                           type='text' id='title' value={newItem.title} onChange={e=> setNewItem({...newItem, 'title' : e.target.value})}  />
                </div>
                <div>
                    <label className='block mb-2 text-xl text-white' htmlFor='summary'>Summary</label>
                    <textarea className='w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded' 
                              id='summary' rows='5' value={newItem.summary} onChange={e=> setNewItem({...newItem, 'summary' : e.target.value})}  />
                </div>
                <div>
                    <label className='block mb-2 text-xl text-white' htmlFor='category'>Category</label>
                    <select className='w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded' 
                            id='category'value={newItem.category} onChange={e=> setNewItem({...newItem, 'category' : e.target.value})}  >
                        <option value=''>카테고리</option>
                        <option value='TODO'>{TODO_CATEGORY_ICON.TODO} To do</option>
                        <option value='PROGRESS'>{TODO_CATEGORY_ICON.PROGRESS} On progress</option>
                        <option value='DONE'>{TODO_CATEGORY_ICON.DONE} Done</option>
                    </select>
                </div>
                {!filled && <p>모든 항목을 채워서 작성해주세요.</p>}
                {/* {isFormInValid && <div className='mt-2 text-red-500'>모든 항목을 채워서 작성해주세요</div>} */}
                <div className='flex justify-end gap-4'>
                    <button className='text-xl text-white' type='button' onClick={closeModal}>Cancel</button>
                    <button className='px-6 py-3 text-xl text-red-200' type='button' 
                    onClick={btnclickHandler} disabled={isDisabled}>{openFor}</button>
                </div>
            </form>
        </>
  )
}

export default TodoForm