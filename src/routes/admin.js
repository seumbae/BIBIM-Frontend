import axios from "../api/axios";
import UserInfo from "../components/userInfo";
import {useEffect, useState} from "react";

function Admin() {
  const [users, setUsers] = useState([]);
  const getUser = async () => {
    const response = await axios.get("/api/database");
    setUsers(response.data);
  }

  useEffect( () =>{
    getUser();
  }, []);

  return (
    <div>
      <h1>Admin</h1>
      {/* API Test, 테이블로 변경 예정 */}
      <h2>id auth</h2>
      {users.map((item) => (
        <UserInfo key={item.id} id={item.id} auth={item.auth}/>
      ))}
    </div>
  );
}

export default Admin;