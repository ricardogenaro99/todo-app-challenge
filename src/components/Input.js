import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
    background: var(--very-Dark-Grayish-Blue);
    border: none;
    outline: none;
    padding: 5px 12px;
`
export default function Input(props) {
    return (
        <InputStyled type="text" value={props.value} onChange={props.onChange}/>
    )
}
