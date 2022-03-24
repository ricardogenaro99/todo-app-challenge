import React from 'react';
import styled from 'styled-components';
import check from '../assets/icons/icon-check.svg'

const DivStyled = styled.div`
    p{
        overflow-x: auto;  
        text-decoration:${props => props.done ? 'line-through' : 'none'} ;
        opacity:${props => props.done ? '.4' : '1'} ;
        transition: text-decoration var(--transition), opacity var(--transition);
    }
    border-bottom: 2px solid ${props => props.darkMode ? 'var(--border-Dark)' : 'var(--border-Ligth)'} ;
    transition: border-bottom var(--transition);
`

export function Task(props) {
    return (
        <DivStyled darkMode={props.darkMode} done={props.done} className='task'>
            <span><RadioButton click={props.click} darkMode={props.darkMode} done={props.done} /></span>
            <p>
                {props.content}
            </p>
        </DivStyled>
    )
}

const Span = styled.span`
    min-width: 22px;
    min-height: 22px;
    max-width: 22px;
    max-height: 22px;
    border-radius: 100%;
    background: ${props => props.done ? 'var(--check-Background)' : 'transparent'};
    border: 2px solid ${props => props.darkMode ? 'var(--border-Dark)' : 'var(--border-Ligth)'} ;
    transition: background var(--transition), border var(--transition);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export function RadioButton(props) {
    return (
        <Span onClick={props.click} done={props.done} darkMode={props.darkMode} >{props.done && (<img src={check} alt="" />)}</Span>
    )
}