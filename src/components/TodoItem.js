import React from 'react'
import '../tailwind/tailwind.css';


import Checkbox from '@material-ui/core/Checkbox';

import { useDispatch } from 'react-redux';
import { setChecked } from '../features/todoSlice'

export default function TodoItem({ name, done, id }) {
    const dispatch = useDispatch()

    const handleCheck = () => {
        dispatch(setChecked(id))
    }
    return (
        <div className="flex items-center w-4/5 h-10 bg-white text-gray-600 mx-1 my-1 rounded-lg">
            <Checkbox
                checked={done}
                color="default"
                onChange={handleCheck}
                inputProps={{ 'aria-label':'secondary checkbox'}}
            />

            <p className={`flex-1 ${done && 'line-through'}`}>{name}</p>
        </div>
    )
}
