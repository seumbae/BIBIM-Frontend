import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Login() {
  const toLogin = async() => {
    const data = await axios.get("http://localhost:4000/api/user");
    return data.data;
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const data = toLogin();
    //서버로부터 정보를 받아와서
    //event.target.id.value와 event.target.password.value를 비교하고
    //data.data.auth가 Dev/Sec/Ops인지 확인하여
    //Dev/Sec/Ops 페이지로 이동하게끔 만들어야함
    console.log(data);
  }

  useEffect( () =>{
    toLogin();
  },[])
  
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input name="id" type="text" placeholder="Username" />
        <input name="password" type="password" placeholder="Password" />
        <button>Login</button>
      </form>
      <Link to="/signup">SignUp</Link>
    </div>
    
  );
}

export default Login;