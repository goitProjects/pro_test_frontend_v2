import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import UserInfo from "../userInfo/UserInfo";
import sprite from "../../sprites/sprite.svg";
import styles from "./Header.module.scss";
import { logOut } from "../../redux/operations/authOperations";

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
              <div className={styles.nav}>
                <CSSTransition
                  in={true}
                  appear={true}
                  timeout={250}
                  classNames={styles}
                  unmountOnExit
                >
                  <div className={styles.isHidden}>
                    <Navigation isAuthorized={isAuthorized} />
                  </div>
                </CSSTransition>
                {isAuthorized && <UserInfo email={email} />}
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
  isAuthorized: state.auth.token,
  email: state.auth.user.userData.email,
});

const mapDispatchToProps = { logOut };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
