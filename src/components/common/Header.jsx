import styled from "styled-components";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const HeaderBackground = styled.div`
  background-color: #2C2C2C;
  padding-left: 2.5rem;
  padding-right: 11.25rem;
  display: flex;
  heigth: 4rem;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.5;
`
const UserInfo = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  gap: 0.5rem;
`

const UserName = styled.div`
`

const DownIcon = styled(ExpandMoreIcon)`
  cursor: pointer;
`
// funtion 사용 X
const Header = ({userName}) => {
  return (
    <HeaderBackground>
      <Logo>BIBIM</Logo>
      <UserInfo>
        <UserName>{userName}</UserName>
        <DownIcon />
      </UserInfo>
    </HeaderBackground>
  );
}

export default Header;