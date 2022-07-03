import React from "react";
import { useSelector } from "react-redux";
import AuthForm from "../../authForm/AuthForm";
import s from "./AuthPage.module.scss";
import { getLangValue } from "../../../redux/selectors/langSelectors";
import { contentLang } from "../../../options/langData";

const { mainDescr } = contentLang.authPage;

const AuthPage = () => {
  const lang = useSelector(getLangValue);

  return (
    <div className={s.container}>
      <div className={s.inner}>
        <div className={s.box}>
          <h2 className={s.header}>Pro Test</h2>
          <p className={s.content}>
            <strong>[</strong> {mainDescr[lang][0]}{" "}
            <span className={s.contentAccent}>{mainDescr[lang][1]}</span>{" "}
            {mainDescr[lang][2]}_<strong>]</strong>
          </p>
        </div>
        <AuthForm />
      </div>
    </div>
  );
};

export default AuthPage;
