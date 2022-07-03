import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { register, logIn } from "../../redux/operations/authOperations";
import { getAuthError } from "../../redux/selectors/authSelector";
import ModalErrorMessage from "./modalErrorMessage/ModalErrorMessage";
import s from "./AuthForm.module.scss";
import styles from "./modalAnimation.module.scss";
import { contentLang } from "../../options/langData";
import { getLangValue } from "../../redux/selectors/langSelectors";

const { formTitle, formBtns, inputPlaceholder } = contentLang.authPage;

class AuthForm extends Component {
  state = {
    email: "",
    password: "",
    isModal: false,
  };

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
    this.setState({ email: "", password: "", isModal: false });
  }

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = async (e) => {
    e.preventDefault();
    const target = e.nativeEvent.submitter.dataset.action;

    if (target === "login") {
      await this.props.onLogin({
        email: this.state.email,
        password: this.state.password,
      });
    } else {
      await this.props.onRegister({
        email: this.state.email,
        password: this.state.password,
      });
      await this.props.onLogin({
        email: this.state.email,
        password: this.state.password,
      });
    }

    if (!!this.props.error) {
      this.setState({ isModal: true });
      this.timeoutId = setTimeout(this.onToggleModal, 3000);
    }
  };

  onHandleSigIn = async () => {
    window.location.replace("https://protest-backend.goit.global/auth/google");
  };

  onToggleModal = () => {
    this.setState({ isModal: false });
  };

  render() {
    const { email, password, isModal } = this.state;
    const { error, lang } = this.props;
    return (
      <div className={s.container}>
        <CSSTransition
          in={!!error && isModal}
          classNames={styles}
          timeout={500}
          unmountOnExit
        >
          <ModalErrorMessage />
        </CSSTransition>
        {/* remove Google auth for QA marathon -START */}
        {/* <p className={s.desc}>You can use your Google Account to authorize:</p> */}

        {/* <button onClick={this.onHandleSigIn} className={s.googleButton}>
          Google
        </button> */}
        {/* remove Google auth for QA marathon -END */}
        <p className={s.desc}>{formTitle[lang]}:</p>

        <form className={s.form} onSubmit={this.onHandleSubmit}>
          <input
            type="email"
            className={s.input}
            name="email"
            value={email}
            placeholder={inputPlaceholder.email[lang]}
            required
            onChange={this.onHandleChange}
          />
          <input
            type="password"
            className={s.input}
            name="password"
            value={password}
            placeholder={inputPlaceholder.password[lang]}
            required
            onChange={this.onHandleChange}
          />
          <div className={s.buttonContainer}>
            <button type="submit" className={s.button} data-action="login">
              {formBtns.login[lang]}
            </button>
            <button type="submit" className={s.button} data-action="signup">
              {formBtns.register[lang]}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: getAuthError(state),
  lang: getLangValue(state),
});

const mapDispatchToProps = {
  onRegister: register,
  onLogin: logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
