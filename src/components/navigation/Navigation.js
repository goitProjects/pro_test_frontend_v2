import React from "react";
import { NavLink } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import styles from "./Navigation.module.scss";
import routes from "../../routers/routers";
import { logOut } from "../../redux/operations/authOperations";
import sprite from "../../sprites/sprite.svg";
import { contentLang } from "../../options/langData";
import { getLangValue } from "../../redux/selectors/langSelectors";

const { navigation } = contentLang.header;

const Navigation = ({ isAuthorized, onHandleModal, logOut }) => {
  const lang = useSelector(getLangValue);

  return (
    <nav className={styles.mainNav}>
      <ul>
        {isAuthorized && (
          <li>
            <NavLink
              to={routes.mainPage}
              exact
              className={styles.link}
              activeClassName={styles.activeLink}
              onClick={onHandleModal}
            >
              {navigation.home[lang]}
            </NavLink>
          </li>
        )}
        {isAuthorized && (
          <li>
            <NavLink
              to={routes.usefulInfo}
              exact
              className={styles.link}
              activeClassName={styles.activeLink}
              onClick={onHandleModal}
            >
              {navigation.materials[lang]}
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            to={routes.contactsPage}
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
            onClick={onHandleModal}
          >
            {navigation.contacts[lang]}
          </NavLink>
        </li>
      </ul>
      {isAuthorized && (
        <div className={styles.posCenter}>
          <button className={styles.logoutIcon} onClick={logOut}>
            <svg className={styles.logout1}>
              <use href={sprite + "#logOut_1"} />
            </svg>
            <svg className={styles.logout2}>
              <use href={sprite + "#logOut_2"} />
            </svg>
          </button>
        </div>
      )}
    </nav>
  );
};

const mapDispatchToProps = { logOut };
export default connect(null, mapDispatchToProps)(Navigation);
