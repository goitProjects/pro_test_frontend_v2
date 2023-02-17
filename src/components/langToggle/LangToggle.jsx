import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { changeLang } from "../../redux/slices/langSlice";
import { options } from "../../options/langToggleOptions";
import s from "./LangToggle.module.scss";
import { getIsAuth } from "../../redux/selectors/authSelector";
import { useLangOptions } from "../../hooks/useLang";

const LangToggle = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  const langOption = useLangOptions();

  const handleChange = (option) => {
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
