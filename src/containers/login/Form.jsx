import { useState, useEffect } from "react";
import { tryLogin } from "../../services/axios";
import FormComponent from "../../components/login/Form";

const FormContainer = (props) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const onHandleChange = (e) => {
		const { name, value } = e.target;
		if (name === "username") setUsername(value);
		if (name === "password") setPassword(value);
	};

  const onHandleSubmit = (e) => {
    if(e && e.preventDefault) e.preventDefault();
    tryLogin({user_id:username, password}).then((res) => {
      console.log(res.data);
    });
		setUsername("");
		setPassword("");
  }

  useEffect(() => {
    onHandleSubmit();
  }, []);
	
	return (
		<FormComponent
			username={username}
			password={password}
			onHandleSubmit={onHandleSubmit}
			onHandleChange={onHandleChange}
		/>
	);
};

export default FormContainer;
