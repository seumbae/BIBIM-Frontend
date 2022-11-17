import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";

const Btn = styled.div`
	width: 65px;
	height: 30px;
	background-color: #eeeef2;
	border-radius: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

const Button = ({ name, onHandleCreate, onHandleModify, onHandleDelete}) => {
  return (
		<>
			{name ? (
				<Btn onClick={name==="수정" ? onHandleModify : onHandleDelete}>
					<div style={{fontSize: '14px'}}>{name}</div>
				</Btn>
			) : (
				<Btn onClick={onHandleCreate}>
					<AddIcon />
				</Btn>
			)}
		</>
	);
};

export default Button;
