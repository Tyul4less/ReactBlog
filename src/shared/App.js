import React, {useState, useRef, useCallback} from 'react';
import { Routes, Route } from "react-router-dom";
import { Head, LeftMenu, MainTemplate } from "../component";
import {Error, MainPage, Count, TodoTemplate, AddTodo, TodoList} from "../pages";
import { createGlobalStyle as GlobalStyle } from 'styled-components';


const App = () => {

    const [todoInput, setTodoInput] = useState('')

    const setInput = e => {
        console.log('setInput')
        setTodoInput(e.target.value);
    }

    const [Todos, setTodos] = useState([
        {
            id : 1,
            value : '리액트 공부하기'
        },
        {
            id : 2,
            value : '벨로퍼트가 머임?'
        }
    ])

    const nextId = useRef(3);

    const addTodo = useCallback(() => {
            console.log(nextId.current)
            const todo = {
                id: nextId.current,
                value : todoInput
            };

            setTodos(Todos.concat(todo));

            nextId.current += 1;
        }
    ,[todoInput])

    const todoDelete = useCallback(
        (deleteId) => {
            setTodos(
                Todos.filter ((todo, index) => {return todo.id!==deleteId})
            )
        }
    ,[Todos])

    return(
        <Routes>
            <Route exact path="/" element={<MainTemplate page={<MainPage/>}/>} />
            <Route path="/Count" element={<MainTemplate page={<Count/>}/>}/>
            <Route path="/TodoList" element={<MainTemplate page={
                <TodoTemplate>
                    <AddTodo setInput={setInput} addTodo={addTodo} />
                    <TodoList todos={Todos} todoDelete={todoDelete}/>
                </TodoTemplate>
            }/>}/>
            <Route path='*' element={<Error/>} />
        </Routes>
    )
}

export default App;