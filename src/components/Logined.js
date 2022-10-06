import styles from "../styles/Logined.module.css";

function Logined({ name }) {
	return (
		<div className={styles.box}>
			<div className={styles.name} >{name}님</div>
		</div>
	);
}

export default Logined;
