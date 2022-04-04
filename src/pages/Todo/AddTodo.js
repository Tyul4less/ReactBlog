import React from "react";
import Ripples from 'react-ripples'
import '../../css/Todo.scss'
import { Button, ButtonToolbar } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import styled from "styled-components";


const TodoEdit = styled(TextField)({
    '& label.Mui-focused': {
        color: '#2478FF',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#5AAEFF',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#489CFF',
        },
        '&:hover fieldset': {
            borderColor: '#0042ED',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#0042ED',
        },
    },
});



const AddTodo = ({setInput, addTodo, todoKeyPress}) => {

    const todoEditReset = () => {
        document.querySelector("#outlined-basic").value='';
    }

    return (
        <div>
            <TodoEdit style={{minWidth: '420px', minHeight: '30px'}} size='small' id="outlined-basic" label="할 일 추가" variant="outlined"
                      onChange={setInput}  onKeyPress={ (e) => {if(e.key === 'Enter') {addTodo(); todoEditReset(); setInput(e)} } }/>
            <div style={{
                display: 'inline-flex',
                overflow: 'hidden',
                width: '85px',
                height: '40px',
                borderRadius: '8px'
            }}>
                <Ripples during={1000} color={'#DAFFFF'}>
                    <button id='button' className='addBtn' onClick={ (e) => {addTodo(); todoEditReset(); setInput(e)}}>등록</button>
                </Ripples>
            </div>
            <hr/>
        </div>
    )
}

export default AddTodo;