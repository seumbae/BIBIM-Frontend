import React, { useState, useEffect, MouseEvent } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProfileMenu from "./ProfileMenu";

const HeaderBackground = styled.div`
	background-color: #2c2c2c;
	padding-left: 2.5rem;
	padding-right: 9%;
	display: flex;
	height: 4rem;
	align-items: center;
	justify-content: space-between;
	min-width: 1190px;
`;

const Logo = styled.div`
	font-size: 2.5rem;
	font-weight: 700;
	color: #fff;
	line-height: 1.5;
	cursor: pointer;
`;
const UserInfo = styled.div`
	color: #ffffff;
	display: flex;
	align-items: center;
	font-size: 1.2rem;
	gap: 0.5rem;
	cursor: pointer;
`;

const Header = ({ userName }) => {
	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = useState(null);

	const onHandleMenu = (e) => {
		setAnchorEl(e.currentTarget);
	};
	return (
		<HeaderBackground>
			<Logo onClick={() => navigate("/dev")}>BIBIM</Logo>
			<div>
				<UserInfo onClick={onHandleMenu}>
					<div>{userName}님</div>
					<ExpandMoreIcon />
				</UserInfo>
				<ProfileMenu
					userName={userName}
					anchorEl={anchorEl}
					setAnchorEl={setAnchorEl}
				/>
			</div>
		</HeaderBackground>
	);
};

export default Header;
