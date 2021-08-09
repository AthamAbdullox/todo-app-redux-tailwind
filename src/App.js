import React from 'react';
// import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';

import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';

function App() {
  const todoList = useSelector(selectTodoList);

  return (
    <div className="w-full h-full bg-yellow-600 grid place-items-center">
      <div className="h-screen w-96 flex flex-col items-center bg-gray-100 rounded-xl px-8 py-0">
        <div className="flex-1 w-full flex flex-col content-center items-center overflow-y-auto">
          {
            todoList.map(item => (
              <TodoItem 
                name={item.item}
                done={item.done}
                id={item.id} />
            ))
          }
        </div>
        <Input />

      </div>
    </div>
  );
}

export default App;
