import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Header from "../common/Header";
import DeleteIcon from '@mui/icons-material/Delete';

import delete_logo from "../../static/delete.png";

const NavWarpper = styled.div`
	width: 13rem;
	height: 100vh;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-top: 3rem;
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

const TitleArea = styled.div`
  display: flex;
  align-items: end;
`;

const TitleName = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 19.2px;
  line-height: 23px;
`;

const SubTitle = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;

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
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;

const DivisionLine = styled.div`
  border: 0.5px solid #D9D9D9;
`;

const PasswordInput = styled.input.attrs(props => ({
  type: "password"
}))
`
  border: 1px solid #EEEEF2;
  width: 707px;
  height: 28px;
  left: 282px;
  top: 299px;
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
`;

const DeleteWarning = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  display: flex;
`;

const DeleteButton = styled.button`
  width: 67px;
  height: 22px;
  left: 282px;
  top: 714px;
  border: 1px solid #EEEEF2;
  border-radius: 6.4px;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
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

const ConfigurationSideNav = () => {
  const isActive = (path, location) => {
    //path가 현재 url과 같으면 true를 반환
    return path === location;
  }

  const location = useLocation();

	return (
		<NavWarpper>
			<ContentWrapper active={isActive(`/configuration`, location.pathname)}>
				<Content to='/configuration'>Configuration</Content>
			</ContentWrapper>
		</NavWarpper>
	);
};

const PasswordInputBox = ({setState}) => {
  const onChange = ({ target: { value } }) => {
    setState(value);
  };

  return(
    <PasswordInput onChange={onChange}></PasswordInput>
  );
};

// const DeleteAccountSubmit = () => {
//   const onClick = () => {
//     // user delete api
//   };

//   return(
//     <DeleteButton onClick={onClick}>DELETE</DeleteButton>
//   );
// };

const DeleteImageButton = () => {
  const onClick = () => {
    console.log("test")
  };

  return(
    <img src={delete_logo} alt="delete" onClick={onClick} style={{cursor:"pointer"}}/>
  );
};

const ConfigurationContainer = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  
  const passwordConfirm = () => {
    if(password === confirm) return true;
    else return false;
  };

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
          <TitleArea>
            <TitleName>Name</TitleName>
            <TipText>변경은 관리자에게 문의하십시오</TipText>
          </TitleArea>
          <UserName>admin</UserName>
          <DivisionLine />
          <TitleName>Password</TitleName>
          <SubTitle>password</SubTitle>
          <PasswordInputBox setState={setPassword} />
          <SubTitle>confirm password</SubTitle>
          <PasswordInputBox setState={setConfirm} />
          <DivisionLine />
          <TitleName>Notification</TitleName>
          <DivisionLine />
          <TitleArea style={ {justifyContent: 'space-between'} }>
            <TitleName>Jenkins Token</TitleName>
            <JenkinsNewButton>New token</JenkinsNewButton>
          </TitleArea>
          <TokenArea>
            <JenkinsToken>115761f7e63c6d7ce954ee86c604d934c2</JenkinsToken>
            <DeleteImageButton />
          </TokenArea>
          <DivisionLine />
          <TitleName>Delete account</TitleName>
          <DeleteWarning>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ...</DeleteWarning>
          <DeleteButton onClick={deleteButtonClick}>DELETE</DeleteButton>
        </ConfigurationArea>
      </Body>
    </>
  );
};

export default ConfigurationContainer;