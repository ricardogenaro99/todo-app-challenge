import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';

const ModalContainer = styled.div`
    background: ${props => props.darkMode ? 'var(--backgroun-Dark)' : 'var(--backgroun-Light)'};
    form{
        
    }
    width: 80%;
    max-width: ${props => props.maxWidth};
`

export default function Modal(props) {
    const [valueInput, setValueInput] = useState('');

    const handleInput = (e) => {
        setValueInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(valueInput)
    }

    return (
        <ModalContainer darkMode={true} maxWidth={props.maxWidth}>
            <form action="" onSubmit={handleSubmit}>
                <Input value={valueInput} onChange={handleInput} />
            </form>
        </ModalContainer>
    )
}