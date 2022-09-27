import axios from "../api/axios";
import React, { useEffect, useState, useRef } from "react";
import styles from "./signup.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SignupModal from "./signupModal";

const SIGNIN_URL = "/api/register";

function Signup() {
	const userRef = useRef();
	const errRef = useRef();
	const auth = "dev";
	const [user, setUser] = useState("");
	const [vaildUser, setVaildUser] = useState(false);
	const [userFocus, setUserFocus] = useState(false);

	const [pwd, setPwd] = useState("");
	const [vaildPwd, setVaildPwd] = useState(false);
	const [pwdFocus, setPwdFocus] = useState(false);

	const [matchPwd, setMatchPwd] = useState("");
	const [vaildMatch, setVaildMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);

	const [name, setName] = useState("");

	const [errMsg, setErrMsg] = useState("");
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		if (user) {
			userRef.current.focus();
		}
	}, [user]);

	useEffect(() => {
		const result = user.match(/^[a-zA-Z0-9]{4,12}$/);
		console.log(user);
		setVaildUser(result);
	}, [user]);

	useEffect(() => {
		const result = pwd.match(/^[a-zA-Z0-9]{4,20}$/);
		console.log(pwd);
		setVaildPwd(result);
		const match = pwd === matchPwd;
		setVaildMatch(match);
	}, [pwd, matchPwd]);

	useEffect(() => {
		setErrMsg("");
	}, [user, name, pwd, matchPwd]);

	const onHandleSubmit = async (event) => {
		event.preventDefault();
		console.log(user, pwd);
		try {
			await axios.post(
				SIGNIN_URL,
				{ id: user, password: pwd, name },
				{
					header: { "Context-Type": "application/json" },
				}
			);
			setSuccess(true);
		} catch (err) {
			if (!err?.response) {
				setErrMsg("No Server Response");
			} else if (err.response?.status === 409) {
				setErrMsg("User Already Exists");
			} else {
				setErrMsg("Registarion Failed");
			}
			errRef.current.focus();
		}
	};
	return (
		<div className={styles.card}>
			<p
				ref={errRef}
				className={errMsg ? "errmsg" : "offscreen"}
				aria-live="assertive"
			>
				{errMsg}
			</p>
			<h1>Sign up</h1>
			<TextField
				type="text"
				id="username"
				ref={userRef}
				autoComplete="off"
				placeholder="Username"
				onChange={(event) => setUser(event.target.value)}
				required
				aria-invalid={vaildUser ? false : true}
				onFocus={() => setUserFocus(true)}
				onBlur={() => setUserFocus(false)}
				sx={{ mt: 3, mb: 2 }}
			/>
			<TextField
				type="text"
				id="name"
				autoComplete="off"
				placeholder="Name"
				onChange={(event) => setName(event.target.value)}
				required
        sx={{mb: 2 }}
			/>
			<TextField
				type="password"
				id="password"
				placeholder="Password"
				onChange={(event) => setPwd(event.target.value)}
				required
				aria-invalid={vaildPwd ? false : true}
				onFocus={() => setPwdFocus(true)}
				onBlur={() => setPwdFocus(false)}
        sx={{mb: 2 }}
			/>
			<TextField
				type="password"
				id="confirm_pwd"
				placeholder="Confirm Password"
				onChange={(event) => setMatchPwd(event.target.value)}
				required
				aria-invalid={vaildMatch ? false : true}
				onFocus={() => setMatchFocus(true)}
				onBlur={() => setMatchFocus(false)}
        sx={{mb: 2 }}
				
			/>
			<Button
				variant="contained"
				onClick={onHandleSubmit}
				disabled={!vaildUser || !vaildPwd || !vaildMatch ? true : false}
			>
				Sign Up
			</Button>
			<div>{success ? <SignupModal /> : null}</div>
		</div>
	);
}

/**
 * 내가 짠거
 */
// function Signup(){
//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     console.log(event);
//     const id = event.target.id.value;
//     const password = event.target.password.value;
//     const auth = event.target.auth.value;
//     await axios.post("http://localhost:4000/api/database", { id, password, auth });
//   }

//   useEffect(() => {
//     onSubmitHandler();
//   },[])
//   return (
//     <div>
//       <h1>SignUp</h1>
//       <form onSubmit={onSubmitHandler}>
//         <input name="id" type="text" placeholder="Username" />
//         <input name="password" type="password" placeholder="Password" />
//         <input name="auth" type="text" placeholder="Dev/Sec/Ops" />
//         <button>SignUp</button>
//       </form>
//     </div>
//   );
// }

export default Signup;
