import { useEffect, useState } from "react";
import styles from "./LoginForm.module.css";

function LoginForm() {
  const [userId, setUserId] = useState("");
  const [click, setClick] = useState(0);
  const USERNAMEKEY = "username";
  const getUserId = (event) => {
    const username = event.target.value;
    localStorage.setItem(USERNAMEKEY, username);
  };
  const onClick = () => {
    setUserId(localStorage.getItem(USERNAMEKEY));
    setClick((current) => current + 1);
  };
  const checkID = localStorage.getItem(USERNAMEKEY);
  useEffect(() => {}, [click]);
  return (
    <div>
      {checkID === null ? (
        <div className={styles.input_text}>
          <span>Write your name</span>
          <input type="text" className={styles.login} onChange={getUserId} />
          <button onClick={onClick} className={styles.button}>
            {" "}
            LogIn{" "}
          </button>
        </div>
      ) : (
        <div className={styles.text}> hello {checkID} </div>
      )}
    </div>
  );
}

export default LoginForm;
