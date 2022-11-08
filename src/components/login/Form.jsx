import styled from "styled-components";
import Button from "./Button";

const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`
const InputComponent = styled.input`
	overflow: hidden;
	height: 45px;
	border: 1px solid #efefef;
	padding: 15px 15px;
	position: relative;
	border-radius: 7px;
`;

const Form = ({username, password, onHandleChange, onHandleSubmit}) => {
  return (
    <FormComponent onSubmit={onHandleSubmit}>
      <InputComponent name="username" value={username} type="text" placeholder="Username" autoComplete="off" onChange={onHandleChange} />
      <InputComponent name="password" value={password} type="password" placeholder="Password" autoComplete="off" onChange={onHandleChange} />
      <Button />
    </FormComponent>
  );
}
export default Form;