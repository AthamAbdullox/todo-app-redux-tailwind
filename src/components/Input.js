import React from 'react';

import {useDispatch} from 'react-redux';
import { saveTodo } from '../features/todoSlice';

export default function Input() {
    const [ input, setInput ] = React.useState('')
    const dispatch = useDispatch()
    
    const addTodo = () => {
        console.log(`Adding "${input}"`)

        dispatch(saveTodo({
            item:input,
            done: false,
            id:Date.now()
        }))
        setInput("") 

    }
    return (
        <div className="flex content-center items-center rounded-md w-4/5 h-12 bg-white ">
            <input className="bg-none border-0 ml-3 flex-1 focus:outline-none" type="text" value={input} onChange={e=>setInput(e.target.value)} />
            <button className="mr-2 bg-gray-200 rounded-xl border-0 h-7 w-14 focus:w-16 focus:h-8" onClick={addTodo}>Add!</button>
        </div>
    )
}
