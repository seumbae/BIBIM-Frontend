import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Header from "../common/Header";
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HorizonLine from "../../components/HorizonLine";

const NavWarpper = styled.div`
	width: 13rem;
	height: 100vh;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	margin-left:2.5rem;
	min-width: 11rem;
`;

const ContentWrapper = styled.div`
	background-color: ${(props) => (props.active ? "#EEEEF2" : "#FFFFFF")};
  height: 2.5rem;
  border-radius: 6.4px;
  display: flex;
  align-items: center;
`;
const IconWrapper = styled.div`
  display: flex;
  height: 3rem;
  align-items: center;
`

const ArrowIcon = styled(ArrowBackIosIcon)`
  font-size: 1rem Important!;
  cursor: pointer;
  padding-left: 1rem;
`

const Content = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 1.2rem;
  cursor: pointer;
	padding-left: 1rem;
`;

const Body = styled.div`
  display: flex;
  gap: 1.3rem;
  padding-right: 500px;
`
const NameArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`
const TitleArea = styled.div`
  display: flex;
  align-items: baseline;
`;

const TitleName = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 19.2px;
`;

const PasswordArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

const SubTitle = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;

const NotiArea = styled.div`
`

const ConfigurationArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  padding-top: 3rem;
`;

const TipText = styled.div`
  color: #73738C;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  padding-left: 10px;
`;

const UserName = styled.div`
  color: #14141F;
  font-weight: 400;
  font-size: 1rem;
`;

const PasswordInput = styled.input.attrs(props => ({
  type: "password"
}))
`
  border: 1px solid #EEEEF2;
  border-radius: 6.4px;
  padding: 0.5rem;
`;

const JenkinsToken = styled.div`
  font-style: italic;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
`;

const TokenArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteWarning = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  display: flex;
`;

const DeleteButton = styled.button`
  width: 100px;
  height: 40px;
  border: 1px solid #EEEEF2;
  border-radius: 6.4px;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  color: #FF3030;
  cursor: pointer;
`;

const JenkinsNewButton = styled.button`
  width: 63.97px;
  height: 22px;
  left: 923.93px;
  top: 524px;
  border: 1px solid #EEEEF2;
  border-radius: 6.4px;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  cursor: pointer;
`;

const DeleteIconBtn = styled(DeleteIcon)`
  font-size: 1.2rem !important;
  cursor: pointer;
  color: #FF3030;
`

const SavePasswordButton = styled.div`
  width: 60px;
  height: 30px;
  background-color: #EEEEF2;
  border: 1px solid #EEEEF2;
  border-radius: 30px;
  text-align: center;
  line-height: 30px;
  align-self: end;
  &:hover {
    background-color: #DADAE6;
    cursor: pointer;
  }
`

const ConfigurationSideNav = () => {
  const isActive = (path, location) => {
    //path가 현재 url과 같으면 true를 반환
    return path === location;
  }

  const location = useLocation();
  const navigate = useNavigate();
	return (
		<NavWarpper>
      <IconWrapper>
        <ArrowIcon onClick={() => navigate(-1)}/>
      </IconWrapper>
			<ContentWrapper active={isActive(`/configuration`, location.pathname)}>
				<Content to='/configuration'>Configuration</Content>
			</ContentWrapper>
		</NavWarpper>
	);
};
 

const ConfigurationContainer = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  
  const passwordConfirm = () => {
    if(password === confirm) return true;
    else return false;
  };

  const onHandleChange = (e) => {
    if(e.target.name === "password"){
      setPassword(e.target.value);
    }
    else if(e.target.name === "confirm"){
      setConfirm(e.target.value);
    }
  }


  const onHandleChangePassword = () => {
    if(passwordConfirm()){
      console.log("password changed");
      setPassword("");
      setConfirm("");
    }
    else{
      console.log("password did not match");
    }
  }

  const onHandleNewToken = () => {
    // TODO: user token api
    console.log("new token");
  }

  const onHandleDeleteIcon = () => {
    // TODO: user delete api
    console.log("delete");
  }

  const deleteButtonClick = () => {
    // user delete api
    console.log("1")
  };

  useEffect(() => {
    if(passwordConfirm()){
      // 같을때 동작이 변경이 되도록 만듦.
    }
  }, [confirm]);

  return(
    <>
      <Header userName={'admin'} />
      <Body>
        <ConfigurationSideNav />
        <ConfigurationArea>
          <NameArea>
            <TitleArea>
              <TitleName>Name</TitleName>
              <TipText>변경은 관리자에게 문의하십시오</TipText>
            </TitleArea>
            <UserName>admin</UserName>
          </NameArea>
          <HorizonLine />
          <PasswordArea>
            <TitleName>Password</TitleName>
            <SubTitle>password</SubTitle>
            <PasswordInput name='password' value={password} onChange={onHandleChange}></PasswordInput>
            <SubTitle>confirm password</SubTitle>
            <PasswordInput name='confirm' value={confirm} onChange={onHandleChange}></PasswordInput>
            {password.length > 0 || confirm.length > 0 ?<SavePasswordButton onClick={onHandleChangePassword}>Save</SavePasswordButton> : null}
          </PasswordArea>
          <HorizonLine />
          <NotiArea>
            <TitleName>Notification</TitleName>
          </NotiArea>
          <HorizonLine />
          <TitleArea style={ {justifyContent: 'space-between'} }>
            <TitleName>Jenkins Token</TitleName>
            <JenkinsNewButton onClick={onHandleNewToken}>New token</JenkinsNewButton>
          </TitleArea>
          <TokenArea>
            <JenkinsToken>115761f7e63c6d7ce954ee86c604d934c2</JenkinsToken>
            <DeleteIconBtn onClick={onHandleDeleteIcon} />
          </TokenArea>
          <HorizonLine />
          <TitleName>Delete account</TitleName>
          <DeleteWarning>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ...</DeleteWarning>
          <DeleteButton onClick={deleteButtonClick}>DELETE</DeleteButton>
        </ConfigurationArea>
      </Body>
    </>
  );
};

export default ConfigurationContainer;