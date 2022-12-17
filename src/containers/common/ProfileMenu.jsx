import { useContext } from "react";
import styled from "styled-components";

import sampleImage from '../../static/sample.png'
import Menu from "@mui/material/Menu";
import HorizonLine from "../../components/HorizonLine";
import { useNavigate } from "react-router-dom";
import { BuildContext } from "../../store/BuildContext";

const StyledMenu = styled(Menu)`
  .MuiPaper-root {
    background-color: #2C2C2C;
    border-radius: 0 0 6.4px 6.4px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    color: #FFFFFF;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem 0;
`
const ProfileArea = styled.div`
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
  width: 2rem;
  height: 2rem;
`

const Username = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
`

const Email = styled.div`
  font-size: 1rem;
`
const ProfileMenu = ({userName, anchorEl, setAnchorEl}) => {
  const buildContext = useContext(BuildContext);
  const navigation = useNavigate();
	const open = Boolean(anchorEl);
  const onHandleClose = (e) => {
    if(e.target.id === 'logout') {
      buildContext.logout();
    }
    if(e.target.id === 'account'){
      navigation('configuration');
    }
    setAnchorEl(null);
  };


  return (
		<StyledMenu open={open} anchorEl={anchorEl} onClose={onHandleClose}>
			<MenuItem onClick={onHandleClose}> 
        <Image src={sampleImage} />
				<ProfileArea>
          <Username>{buildContext.user}</Username>
          <Email>{buildContext.user}@bibim.com</Email>
        </ProfileArea>
			</MenuItem>
			<HorizonLine />
			<MenuItem style={{cursor: 'pointer'}} id="account" onClick={onHandleClose}>Account Configuration</MenuItem>
			{/* <MenuItem>Logout</MenuItem> */}
      <MenuItem style={{cursor: 'pointer'}} id="logout" onClick={onHandleClose} >Logout</MenuItem>
		</StyledMenu>
	);
};

export default ProfileMenu;
