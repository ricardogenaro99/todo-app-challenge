import React, { useState } from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import { RadioButton, Task } from './Task';
import useLocalStorage from '../customs/useLocalStorage'
import { v4 as uuidv4 } from 'uuid';

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
    input,.task, .filter, >p, .portFolioRef{
        color: ${props => props.darkMode ? 'var(--color-Text-Dark)' : 'var(--color-Text-Ligth)'};
        transition: color var(--transition);
        padding-top: 18px;
        padding-bottom: 18px;
    }
    >p{
        opacity: .40;
        font-size: .90rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
    .portFolioRef{
        :hover{
            color:  ${props => props.darkMode ? '#fff' : '#333'};
        }
        padding: 0;
    }
`

export default function Modal(props) {
    const [valueInput, setValueInput] = useState('');
    const [tasks, setTask] = useLocalStorage('tasks', [])
    const [activatedFilter, setActivatedFilter] = useState(true)
    const [completedFilter, setCompletedFilter] = useState(true)

    const handleInput = (e) => {
        setValueInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTask([...tasks, { '_id': uuidv4(), 'done': false, 'content': valueInput }]);
        setValueInput('');
    }

    const clickTask = (task) => {
        const tmp = tasks.filter(e => e._id !== task._id)
        setTask([...tmp, { '_id': task._id, 'done': !task.done, 'content': task.content }]);
    }

    const leftTasks = () => {
        return tasks.filter(e => e.done === false).length
    }

    const clearDoneTasks = () => {
        setTask(tasks.filter(e => e.done === false));
    }

    const clickAll = () => {
        setActivatedFilter(true);
        setCompletedFilter(true);
    }

    const clickActivated = () => {
        setActivatedFilter(true);
        setCompletedFilter(false);
    }

    const clickCompleted = () => {
        setActivatedFilter(false);
        setCompletedFilter(true);
    }



    return (
        <ModalContainer darkMode={props.darkMode} maxWidth={props.maxWidth}>
            <form action="" onSubmit={handleSubmit}>
                <RadioButton darkMode={props.darkMode} click={handleSubmit} />
                <input type="text" value={valueInput} onChange={handleInput} />
            </form>
            <div>
                <section>
                    {tasks.map((task) => {
                        if (activatedFilter && completedFilter) {
                            return <Task key={task._id} done={task.done} darkMode={props.darkMode} content={task.content} click={() => clickTask(task)} />
                        }
                        if (activatedFilter && !task.done) {
                            return <Task key={task._id} done={task.done} darkMode={props.darkMode} content={task.content} click={() => clickTask(task)} />
                        }
                        if (completedFilter && task.done) {
                            return <Task key={task._id} done={task.done} darkMode={props.darkMode} content={task.content} click={() => clickTask(task)} />
                        }
                    })}
                </section>
                <section>
                    <Filter left={leftTasks()} clearCompleted={clearDoneTasks} clickAll={clickAll} clickActivated={clickActivated} clickCompleted={clickCompleted} />
                </section>
            </div>
            <p>
                <span>Challenge by <b>Frontend Mentor</b></span>
                <span>
                    Coded by <b><a href="https://www.instagram.com/ricardogenaro99/" className='portFolioRef' target="_blank" rel="noopener noreferrer">Ricardo Genaro</a></b>
                </span>
            </p>
        </ModalContainer>
    )
}