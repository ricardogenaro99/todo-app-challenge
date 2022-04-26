import React, { useState } from 'react';
import styled from 'styled-components';
import darkBackground from '../assets/images/bg-desktop-dark.webp';
import lightBackground from '../assets/images/bg-desktop-light.webp';
import darkBackgroundMobile from '../assets/images/bg-mobile-dark.webp';
import lightBackgroundMobile from '../assets/images/bg-mobile-light.webp';
import Header from '../components/Header';
import Modal from '../components/Modal';

const Container = styled.div`
    background-image: url(${props => props.darkMode ? darkBackground : lightBackground});
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 100% 300px;
    background-color: ${props => props.darkMode ? 'var(--background-Dark)' : 'var(--background-Light)'};
    transition: background-color var(--transition);
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    h1{
        color: var(--very-Light-Gray);
    }
    @media (max-width: 500px) {
		background-image: url(${props => props.darkMode ? darkBackgroundMobile : lightBackgroundMobile});
	}
`

export default function Home() {
    const [mode, setMode] = useState(true);
    const maxWidth = '600px'
    return (
        <Container darkMode={mode}>
            <Header maxWidth={maxWidth} changeMode={() => setMode(!mode)} darkMode={mode} />
            <Modal maxWidth={maxWidth} darkMode={mode} />
        </Container>
    )
}
