import React, { useState } from 'react';
import styled from 'styled-components';
import iconMoon from '../assets/icons/icon-moon.svg'
import iconSun from '../assets/icons/icon-sun.svg'

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    width: 100%
    h1{
       letter-spacing :15px ;
    }

    img{
        height: 40px;
    }

    width: 80%;
    max-width: ${props => props.maxWidth};
`

export default function Header(props) {
  return (
    <HeaderContainer maxWidth={props.maxWidth}>
        <h1>TODO</h1>
        <img src={iconMoon} alt="" srcset="" />
    </HeaderContainer>
  )
}
