import React, { useState } from 'react'

const TodoModal = ({ isOpen, addTodo, closeModal }) => {
    const [newItem, setNewItem] = useState({})
    console.log(newItem);

    return (
        <div id="default-modal" aria-hidden="true" className="bg-blue fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 z-100">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Add new Todo
                        </h3>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="p-4 md:p-5 space-y-4">
                        <ul className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                            <li className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                                <label htmlFor="title">title</label>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="title" type="text" value={newItem.title} onChange={e=> setNewItem({...newItem, 'title' : e.target.value}) }/>
                            </li>
                            <li>
                                <label htmlFor="summary">summary</label>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="summary" type="text" value={newItem.summary} onChange={e=> setNewItem({...newItem, 'summary' : e.target.value}) }/>
                            </li>
                            <li>
                                <label htmlFor="category">category</label>
                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                name="category" defaultValue='TODO' onChange={(e)=> setNewItem({...newItem, 'category' : e.target.value})}>
                                    <option value="TODO">TODO</option>
                                    <option value="PROGRESS">PROGRESS</option>
                                    <option value="DONE">DONE</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- Modal footer --> */}
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => {
                            setNewItem(newItem); addTodo(newItem)}}>추가</button>
                        <button data-modal-hide="static-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={closeModal}>닫기</button>
                        </div>
                </div>
            </div>
        </div>
  )
}

export default TodoModal