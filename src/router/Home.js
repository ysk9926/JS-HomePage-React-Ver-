import { useEffect, useState } from "react";
import Clock from "../components/Clock";
import styles from "./Home.module.css";
import Quote from "../components/Quote";
import Weather from "../components/Weather";
import LoginForm from "../components/LoginForm";

function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <Weather />
        </div>
        <div className={styles.center_container}>
          <div>
            <Clock />
            <LoginForm />
          </div>
        </div>
        <div>
          <Quote />
        </div>
      </div>
    </div>
  );
}

export default Home;