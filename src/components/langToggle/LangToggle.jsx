import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { getLangOption } from "../../redux/selectors/langSelectors";
import { changeLang } from "../../redux/slices/langSlice";
import { options } from "../../options/langToggleOptions";
import s from "./LangToggle.module.scss";
import { getIsAuth } from "../../redux/selectors/authSelector";

const LangToggle = () => {
  const dispatch = useDispatch(changeLang);
  const isAuth = useSelector(getIsAuth);
  const langOption = useSelector(getLangOption);

  const handleChange = (option) => {
    console.log(option);
    dispatch(changeLang(option));
  };

  return (
    <div className={`${isAuth ? s.container : s.containerNotAuth}`}>
      <Select
        options={options}
        defaultValue={langOption}
        onChange={handleChange}
      />
    </div>
  );
};

export default LangToggle;
