import { useState, useEffect } from "react";
import { tryLogin } from "../../services/axios";
import styled from "styled-components";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import TooltipMsg from "../../components/Tooltip";

const LoginComponent = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const LoginWrapper = styled.div`
	width: 100%;
	max-width: 500px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
const Title = styled.div`
	font-size: 2rem;
	font-weight: 600;
	margin-bottom: 1rem;
`;

const Button = styled.button`
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
`;

const FormComponent = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 0.5rem;
`;
const InputComponent = styled.input`
	overflow: hidden;
	height: 45px;
	border: 1px solid #efefef;
	padding: 15px 15px;
	position: relative;
	border-radius: 7px;
	&:focus {
		outline: none;
	}
`;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	font-size: 0.8rem;
`;
const Find = styled.div`
	color: #707070;
	padding-left: 0.1rem;
	&:hover {
		cursor: pointer;
	}
`;
const SignUp = styled.div`
	color: #707070;
	&:hover {
		cursor: pointer;
	}
`;

const Login = (props) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [signupOpen, setSignupOpen] = useState(false);
	const [forgotOpen, setForgotOpen] = useState(false);

	const onHandleSignupTooltipOpen = () => {
		setSignupOpen((prev) => !prev);
	};

	const onHandleSignupForgotOpen = () => {
		setForgotOpen((prev) => !prev);
	};
	const onHandleChange = (e) => {
		const { name, value } = e.target;
		if (name === "username") setUsername(value);
		if (name === "password") setPassword(value);
	};

	const onHandleSubmit = (e) => {
		if (e && e.preventDefault) e.preventDefault();
		tryLogin({ user_id: username, password }).then((res) => {});
		setUsername("");
		setPassword("");
	};

	return (
		<LoginComponent>
			<LoginWrapper>
				<Title>Login</Title>
				<FormComponent onSubmit={onHandleSubmit}>
					<InputComponent
						name="username"
						value={username}
						type="text"
						placeholder="Username"
						autoComplete="off"
						onChange={onHandleChange}
					/>
					<InputComponent
						name="password"
						value={password}
						type="password"
						placeholder="Password"
						autoComplete="off"
						onChange={onHandleChange}
					/>
					<Button> Login </Button>
				</FormComponent>
				<Wrapper>
					<TooltipMsg
						title="관리자에게 문의하십시오."
						open={forgotOpen}
						setOpen={setForgotOpen}
					>
						<Find onClick={onHandleSignupForgotOpen}>
							Forgot Username/Password?
						</Find>
					</TooltipMsg>
					<TooltipMsg
						title="관리자에게 문의하십시오."
						open={signupOpen}
						setOpen={setSignupOpen}
					>
						<SignUp onClick={onHandleSignupTooltipOpen}>Sign Up</SignUp>
					</TooltipMsg>
				</Wrapper>
			</LoginWrapper>
		</LoginComponent>
	);
};

export default Login;