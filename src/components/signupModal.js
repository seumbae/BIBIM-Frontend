import Button from "@mui/material/Button";
import {useNavigate} from 'react-router-dom';
import styles from "../styles/signupModal.module.css";

function SignUpModal() {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate('/');
  }
  return (
    <div className={styles.modal}>
        <h1>회원가입 성공</h1>
        <Button variant="contained" onClick={onHandleClick}>확인</Button>
    </div>
  );
}

export default SignUpModal;