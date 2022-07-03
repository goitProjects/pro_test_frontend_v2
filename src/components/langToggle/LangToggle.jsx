import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { getLangOption } from "../../redux/selectors/langSelectors";
import { changeLang } from "../../redux/slices/langSlice";
import { options } from "../../options/langToggleOptions";
import s from "./LangToggle.module.scss";

// const customStyles = {
//     option: (provided, state) => ({
//       ...provided,
//     //   borderBottom: '1px dotted pink',
//     //   color: state.isSelected ? 'red' : 'blue',
//     //   padding: 20,
//     }),
//     control: () => ({
//       // none of react-select's styles are passed to <Control />
//       width: 80,
//     }),
//     singleValue: (provided, state) => {
//       const opacity = state.isDisabled ? 0.5 : 1;
//       const transition = 'opacity 300ms';
  
//       return { ...provided, opacity, transition };
//     }
//   }

const LangToggle = () => {
  const dispatch = useDispatch(changeLang);
  const langOption = useSelector(getLangOption);

  const handleChange = (option) => {
    console.log(option);
    dispatch(changeLang(option));
  };

  console.log("langOption :>> ", langOption);

  return (
    <div className={s.container}>
      <Select
        options={options}
        defaultValue={langOption}
        onChange={handleChange}
        // styles={customStyles}
      />
    </div>
  );
};

export default LangToggle;
