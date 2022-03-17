import React, { useState } from 'react';
import styled from 'styled-components';
import darkBackground from '../assets/images/bg-desktop-dark.jpg';
import lightBackground from '../assets/images/bg-desktop-light.jpg';
import Header from '../components/Header';
import Modal from '../components/Modal';

const Container = styled.div`
    background-image: url(${props => props.darkMode ? darkBackground : lightBackground});
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 100% 300px;
    background-color: ${props => props.darkMode ? 'var(--backgroun-Dark)' : 'var(--backgroun-Light)'};
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 40px;
    h1{
        color: var(--very-Light-Gray);
    }
`

export default function Home() {
    const maxWidth = '600px'
    return (
        <Container darkMode={true}>
            <Header maxWidth={maxWidth} />
            <Modal maxWidth={maxWidth} />
        </Container>
    )
}
