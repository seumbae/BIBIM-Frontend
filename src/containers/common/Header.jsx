import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const HeaderBackground = styled.div`
  background-color: #2C2C2C;
  padding-left: 2.5rem;
  padding-right: 9%;
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
`
const Header = ({userName}) => {
  const navigate = useNavigate();
  return (
    <HeaderBackground>
      <Logo onClick={() => navigate('/dev') }>BIBIM</Logo>
      <UserInfo>
        <div>{userName}님</div>
        <DownIcon />
      </UserInfo>
    </HeaderBackground>
  );
}

export default Header;