import styled from "styled-components";

const ButtonComponent = styled.button`
background-color: #007bff;
font-size: 14px;
color: white;
padding: 0 20px;
height: 45px;
border-radius: 5px;
margin-top: 10px;
border: none;
&:hover {
  cursor: pointer;
}
`

const Button = () => {
  return <ButtonComponent>LOGIN</ButtonComponent>;
}

export default Button;