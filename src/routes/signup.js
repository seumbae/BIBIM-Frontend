import axios from "axios";
import { useEffect } from "react";

function Signup(){
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(event);
    const id = event.target.id.value;
    const password = event.target.password.value;
    const auth = event.target.auth.value;
    await axios.post("http://localhost:4000/api/user", { id, password, auth });
  }

  useEffect(() => {
    onSubmitHandler();
  },[])
  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="id" type="text" placeholder="Username" />
        <input name="password" type="password" placeholder="Password" />
        <input name="auth" type="text" placeholder="Dev/Sec/Ops" />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Signup;