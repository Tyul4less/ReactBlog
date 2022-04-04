import React, {useRef, useState} from "react";
import TextField from '@mui/material/TextField';
import { MdDone, MdDelete } from 'react-icons/md';
import styled, { css } from 'styled-components';
import '../../css/Todo.scss'

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;
const TodoListField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#5AAEFF',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#5AAEFF',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#00D8FF',
        },
        '&:hover fieldset': {
            borderColor: '#5AAEFF',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#5AAEFF',
        },
    },
});


const TodoList = ({todos, todoDelete}) => {

    const [visible, setVisible] = useState('hidden')

    const trashIconOverEvent = (target) => {
        document.querySelector('#'+target).style.visibility='visible'
    }
    const trashIconOutEvent = (target) => {
        document.querySelector('#'+target).style.visibility='hidden'
    }

    return (
        <>
            {todos.map((todo, index) => {
                    return (
                        <div key={todo.id} style={{marginTop:'10px'}} onMouseOver={() => trashIconOverEvent('a'+todo.id)} onMouseOut={() => trashIconOutEvent('a'+todo.id)}>
                            <TodoListField
                                style={{minWidth: '480px', minHeight: '30px'}}
                                size='small'
                                id="outlined-number"
                                label={todo.id}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={todo.value}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <span style={{height:'30px', width:'auto'}} onClick={() => todoDelete(todo.id)} >
                                <MdDelete id={'a'+todo.id} className='trashIcon' style={{visibility: `${visible}`}}/>
                            </span>
                        </div>
                    )
                })
            }
        </>
    )
}

export default React.memo(TodoList);