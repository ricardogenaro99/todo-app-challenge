import React, { useState } from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import { RadioButton, Task } from './Task';

const ModalContainer = styled.div`
    width: 80%;
    max-width: ${props => props.maxWidth};
    display: flex;
    flex-direction: column;
    gap: 40px;

    >form,>div{
        background-color: ${props => props.darkMode ? 'var(--background-Form-Dark)' : 'var(--background-Form-Light)'}; 
        transition: background-color var(--transition);
        border-radius: 10px;
        -webkit-box-shadow: 0px 6px 19px -7px rgba(0,0,0,0.65); 
        box-shadow: 0px 6px 19px -7px rgba(0,0,0,0.65);
    }

    >form{
        >input{
            border: none;
            outline: none;
            background-color: transparent;
            width: 100%;
        }
    }

    >form, .task{
        display: flex;
        align-items: center;
        gap: 25px;
        padding-left: 25px;
        padding-right: 25px;
    }

    input,.task, .filter{
        color: ${props => props.darkMode ? 'var(--color-Text-Dark)' : 'var(--color-Text-Ligth)'};
        transition: color var(--transition);
        padding-top: 18px;
        padding-bottom: 18px;
    }
    
`

export default function Modal(props) {
    const [valueInput, setValueInput] = useState('');
    const [tasks, setTask] = useState([])

    const handleInput = (e) => {
        setValueInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTask([...tasks, { '_id': tasks.length, done: false, content: valueInput }]);
        setValueInput('');
    }

    return (
        <ModalContainer darkMode={props.darkMode} maxWidth={props.maxWidth}>
            <form action="" onSubmit={handleSubmit}>
                <RadioButton darkMode={props.darkMode} />
                <input type="text" value={valueInput} onChange={handleInput} />
            </form>
            <div>
                <section>
                    {tasks.map((task) => <Task key={task._id} done={task.done} darkMode={props.darkMode} content={task.content} />)}
                </section>
                <section>
                    <Filter />
                </section>
            </div>

        </ModalContainer>
    )
}