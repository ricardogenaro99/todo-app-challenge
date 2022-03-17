import React from 'react';
import styled from 'styled-components';
import check from '../assets/icons/icon-check.svg'

const DivStyled = styled.div`

    p{
        overflow-x: auto;  
    }

    border-bottom: 2px solid ${props => props.darkMode ? 'var(--border-Dark)' : 'var(--border-Ligth)'} ;
    transition: border-bottom var(--transition);
`

export function Task(props) {
    return (
        <DivStyled darkMode={props.darkMode} className='task'>
            <span><RadioButton darkMode={props.darkMode} done={props.done} /></span>
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
    background-color: ${props => props.done ? 'var(--check-Background)' : 'transparent'};
    border: 2px solid ${props => props.darkMode ? 'var(--border-Dark)' : 'var(--border-Ligth)'} ;
    transition: background-color var(--transition), border var(--transition);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
`

export function RadioButton(props) {
    return (
        <Span done={props.done} darkMode={props.darkMode} >{props.done && (<img src={check} alt="" srcset="" />)}</Span>
    )
}