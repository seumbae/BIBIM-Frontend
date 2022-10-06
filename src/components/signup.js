import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/signup.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SignupModal from "./signupModal";

const SIGNIN_URL = "/api/register";

function Signup() {
	const [user, setUser] = useState("");
	const [vaildUser, setVaildUser] = useState(false);

	const [pwd, setPwd] = useState("");
	const [vaildPwd, setVaildPwd] = useState(false);

	const [matchPwd, setMatchPwd] = useState("");
	const [vaildMatch, setVaildMatch] = useState(false);

	const [name, setName] = useState("");

	const [errMsg, setErrMsg] = useState("");
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		const result = user.match(/^[a-zA-Z0-9]{4,20}$/);
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
		}
	};
	return (
		<div className={styles.card}>
			<main className={styles.main}>
				<div className={styles.container}>
					<div className={styles.box}>
						<div className={styles.sign}>Sign Up</div>
						<form className={styles.form} onSubmit={onHandleSubmit}>
							<input
								className={styles.input}
								type="text"
								autoComplete="off"
								placeholder="Username"
								onChange={(event) => setUser(event.target.value)}
								required
								aria-invalid={vaildUser ? false : true}
							/>
							{vaildUser ? null : (
								<span className={styles.errMsg}>4~20자의 영문 소문자, 숫자만 사용 가능합니다.</span>
							)}
							<input
								className={styles.input}
								type="text"
								autoComplete="off"
								placeholder="Name"
								onChange={(event) => setName(event.target.value)}
								required
							/>
							{name === "" ? <span className={styles.errMsg}>필수 정보입니다.</span> : null}
							<input
								className={styles.input}
								type="password"
								id="password"
								placeholder="Password"
								onChange={(event) => setPwd(event.target.value)}
								required
								aria-invalid={vaildPwd ? false : true}
							/>
							
							{vaildPwd ? null : (
								<span className={styles.errMsg}>4~20자의 영문 소문자, 숫자만 사용 가능합니다.</span>
							)}
							<input
								className={styles.input}
								type="password"
								id="confirm_pwd"
								placeholder="Confirm Password"
								onChange={(event) => setMatchPwd(event.target.value)}
								required
								aria-invalid={vaildMatch ? false : true}
							/>
							{vaildMatch ? null : <span className={styles.errMsg}>동일하지 않습니다.</span>}
							<button
								className={styles.button}
								disabled={!vaildUser || !vaildPwd || !vaildMatch ? true : false}
							>
								Sign Up
							</button>
						</form>
					</div>
				</div>
			</main>
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
