import styles from './userInfo.module.css';
import { useEffect, useState } from 'react';
import Admin from '../routes/admin';
import axios from '../api/axios';

const CHANGE_URL = '/api/changeAuth';

function UserInfo({ id, auth}) {
  const [selected, setSelected] = useState("변경");
  const [edit, setEdit] = useState(false);
  const onHandleSelect = (event) => {
    setSelected(event.target.value);
  };
  const onHandleClick = () => {
    axios.post(CHANGE_URL, { id, auth: selected },{
      header : { 'Context-Type' : 'application/json'}
    });
    console.log("변경되었습니다.");
  }

  useEffect(() => {
    if(selected !== "변경") setEdit(true);
    else setEdit(false);

  },[selected]);

  return (
    <div>
      <ul>
        <li className={styles.li}>{id} {auth}</li>
        <select onChange={onHandleSelect} value={selected}>
          <option value="변경">변경</option>
          <option value="dev">dev</option>
          <option value="ops">ops</option>
          <option value="sec">sec</option>
        </select>
        {edit ? <button onClick={onHandleClick}>edit</button> : null}
      </ul>
    </div>
    
  );
}

export default UserInfo;