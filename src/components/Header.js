import React from "react";
import styled from "styled-components";
import iconMoon from "../assets/icons/icon-moon.svg";
import iconSun from "../assets/icons/icon-sun.svg";

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	margin: 50px 0 60px 0;
	h1 {
		font-size: 54px !important;
		letter-spacing: 21px !important;
		font-weight: 700 !important;
	}
	img {
		height: 25px;
		cursor: pointer;
	}
	width: 80%;
	max-width: ${(props) => props.maxWidth};
`;

export default function Header(props) {
	return (
		<HeaderContainer maxWidth={props.maxWidth}>
			<h1>TODO</h1>
			<img
				src={props.darkMode ? iconMoon : iconSun}
				alt=""
				onClick={props.changeMode}
			/>
		</HeaderContainer>
	);
}
