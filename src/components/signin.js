import axios from "../api/axios";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "../styles/signin.module.css";

const SIGNIN_URL = "/api/signin";

function Login({ setLogin, setName }) {
	const navigate = useNavigate();
	// const {setAuth} = useContext(AuthContext);
	const [id, setId] = useState("");
	const [password, setPassword] = useState("");

	const onHandleChange = (event) => {
		const { name, value } = event.target;
		if (name === "id") setId(value);
		if (name === "password") setPassword(value);
	};

	const onHandleSubmit = async (event) => {
		event.preventDefault();
		console.log(id, password);
		const response = await axios.post(
			SIGNIN_URL,
			{ id, password },
			{
				header: { "Context-Type": "application/json" },
			}
		);
		setId("");
		setPassword("");
		//permission 1 == Dev, 2 == Sec, 3 == Ops, 4 == Admin
		const permission = response?.data?.permission;
		setLogin(true);
		setName(response?.data?.name);
		console.log(`permission: ${permission}`);
		if (permission === 1) {
			navigate("/dev");
		}
		if (permission === 2) {
			navigate("/sec");
		}
		if (permission === 3) {
			navigate("/ops");
		}
		if (permission === 4) {
			navigate("/admin");
		}
	};

	return (
		<div className={styles.card}>
			<main className={styles.main}>
				<div className={styles.container}>
					<div className={styles.box}>
						<div className={styles.sign}>Sign In</div>
						<form className={styles.form} onSubmit={onHandleSubmit}>
							<input
								className={styles.input}
								onChange={onHandleChange}
								name="id"
								type="text"
								autoComplete="off"
								placeholder="Username"
							/>
							<input
								className={styles.input}
								onChange={onHandleChange}
								name="password"
								type="password"
								placeholder="Password"
							/>
							<button className={styles.button}>SIGN IN</button>
						</form>
						<div className={styles.link}>
							<Link className={styles.signup} to="/signup">
								Sign Up
							</Link>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Login;
