import React from "react";
import styled, { createGlobalStyle } from 'styled-components';
import '../css/Base.scss'

const TodoTemplateBlock = styled.div`
  width: 512px;
  min-height: 512px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 1px 1px 8px 0 rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align:left;
  padding:10px;
`;


const TodoTemplate = ({ children }) => {
    return (
        <div className='pageDiv' style={{background:'none', boxShadow: 'none'}}>
            <div className='pageContent'>
                <TodoTemplateBlock>
                    { children }
                </TodoTemplateBlock>
            </div>
        </div>
    )
}

export default TodoTemplate;