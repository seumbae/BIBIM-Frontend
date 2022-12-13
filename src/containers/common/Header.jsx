import React, { useState, useEffect, MouseEvent } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

const HeaderBackground = styled.div`
  background-color: #2C2C2C;
  padding-left: 2.5rem;
  padding-right: 9%;
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.5;
  cursor: pointer;
`
const UserInfo = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  gap: 0.5rem;
`

const DownIcon = styled(ExpandMoreIcon)`
  cursor: pointer;
`;

const UserMenu = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const configurationHandle = () => {
    navigate('/configuration');
    handleClose();
  };
  

  return(
    <>
      <DownIcon onClick={handleClick}/>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Divider />
        <MenuItem onClick={configurationHandle}>Account Configuration</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  )
};

const Header = ({userName}) => {
  const navigate = useNavigate();
  return (
    <HeaderBackground>
      <Logo onClick={() => navigate('/dev') }>BIBIM</Logo>
      <UserInfo>
        <div>{userName}님</div>
        <UserMenu />
      </UserInfo>
    </HeaderBackground>
  );
}

export default Header;