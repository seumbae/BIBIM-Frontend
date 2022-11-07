import styled from "styled-components";

const InputComponent = styled.input`
	overflow: hidden;
	height: 45px;
	border: 1px solid #efefef;
	padding: 15px 15px;
	position: relative;
	border-radius: 7px;
`;

const Input = ({name, type, placeholder, autoComplete, onHandleChange}) => {
	return (
		<InputComponent
			name={name}
			type={type}
			placeholder={placeholder}
			autoComplete={autoComplete}
			onChange={onHandleChange}
		/>
	);
};

export default Input;
