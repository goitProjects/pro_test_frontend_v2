import React from "react";
import styles from "./UserInfo.module.scss";

const UserInfo = ({ email }) => {
  const letter = email.slice(0, 1).toUpperCase();
  const shortName = `${letter}${email.split(".")[0].slice(1, 10)}`;

  return (
    <div className={styles.container}>
      <p className={styles.userLetter}>{letter}</p>
      <p className={styles.userName}>{shortName}</p>
    </div>
  );
};
export default UserInfo;
