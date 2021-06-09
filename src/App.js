import React from 'react'
import './App.css'
import Input from './components/input'
import TodoItem from './components/todoItem'
import {useSelector} from 'react-redux'
import {selectTodoList} from './features/todoSlice'

function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map(item => (
            <TodoItem 
            name={item.item}
            done={item.done}
            id={item.id}
            />
          ))}
        </div>
        <Input />
      </div>
      
    </div>
  )
}

export default App
