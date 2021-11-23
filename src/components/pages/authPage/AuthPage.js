import React from "react";
import AuthForm from "../../authForm/AuthForm";
import s from "./AuthPage.module.scss";

const AuthPage = () => {
  return (
    <div className={s.container}>
      <div className={s.inner}>
        <div className={s.box}>
          <h2 className={s.header}>Pro Test</h2>
          <p className={s.content}>
            <strong>[</strong> We will help you find weak points in knowledge so
            that you can strengthen it. We will show you what is relevant to
            know for a <span className={s.contentAccent}>QA Engineer</span> and
            will try to make the learning process more diverse_{" "}
            <strong>]</strong>
          </p>
        </div>
        <AuthForm />
      </div>
    </div>
  );
};

export default AuthPage;
