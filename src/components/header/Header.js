import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import UserInfo from "../userInfo/UserInfo";
import sprite from "../../sprites/sprite.svg";
import styles from "./Header.module.scss";
import { logOut } from "../../redux/operations/authOperations";
import { getIsAuth, getUserData } from "../../redux/selectors/authSelector";
import LangToggle from "../langToggle/LangToggle";

class Header extends Component {
  state = {
    isModalOn: false,
  };
  handleModal = () => this.setState({ isModalOn: !this.state.isModalOn });

  logOutUser = () => {
    const { logOut } = this.props;
    logOut();
  };
  render() {
    const { isModalOn } = this.state;
    const { isAuthorized, email } = this.props;
    return (
      <>
        <CSSTransition
          in={true}
          appear={true}
          timeout={250}
          classNames={styles}
          unmountOnExit
        >
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <Logo />
              {!isAuthorized && <LangToggle />}
              <div className={styles.nav}>
                <CSSTransition
                  in={true}
                  appear={true}
                  timeout={250}
                  classNames={styles}
                  unmountOnExit
                >
                  <div className={styles.navWrapper}>
                    <div className={styles.isHidden}>
                      <Navigation isAuthorized={isAuthorized} />
                    </div>
                    {isAuthorized && <LangToggle />}
                  </div>
                </CSSTransition>
                {email && <UserInfo email={email} />}
                {isAuthorized && (
                  <button
                    className={styles.logoutIcon}
                    onClick={this.logOutUser}
                  >
                    <svg className={styles.logout1}>
                      <use href={sprite + "#logOut_1"} />
                    </svg>
                    <svg className={styles.logout2}>
                      <use href={sprite + "#logOut_2"} />
                    </svg>
                  </button>
                )}
                {isModalOn ? (
                  <div className={styles.burger}>
                    <svg className={styles.burgerOn} onClick={this.handleModal}>
                      <use href={sprite + "#close"} />
                    </svg>
                  </div>
                ) : (
                  <div className={styles.burger}>
                    <svg className={styles.burgerOn} onClick={this.handleModal}>
                      <use href={sprite + "#burger"} />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CSSTransition>

        <CSSTransition
          in={isModalOn}
          timeout={250}
          classNames={styles}
          unmountOnExit
        >
          <Navigation
            isAuthorized={isAuthorized}
            onHandleModal={this.handleModal}
          />
        </CSSTransition>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthorized: getIsAuth(state),
  email: getUserData(state).email,
});

const mapDispatchToProps = { logOut };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
