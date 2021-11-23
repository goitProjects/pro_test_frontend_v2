import s from "./ModalErrorMessage.module.scss";

const ModalErrorMessage = () => {
  return (
    <div className={s.container}>
      <h3>WARNING</h3>
      <p>Please make sure you're using a correct data</p>
    </div>
  );
};

export default ModalErrorMessage;
