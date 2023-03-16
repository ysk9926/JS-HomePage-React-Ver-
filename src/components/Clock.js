import { useState } from "react";
import styles from "./Clock.module.css";

function Clock() {
  const [timer, setTimer] = useState("");
  const [loading, setLoading] = useState(true);

  const getClock = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    setTimer(` ${hours}시 ${minutes}분`);
    setLoading(false);
  };

  const startTimer = () => {
    setInterval(getClock, 1000);
  };

  startTimer();

  return (
    <div className={styles.container}>
      <div className={styles.clock}>
        {loading === true ? "00시 00분" : timer}{" "}
      </div>
    </div>
  );
}

export default Clock;

//asdfasdfasdfasd
