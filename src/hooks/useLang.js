import { useSelector } from "react-redux";
import { getLangOption, getLangValue } from "../redux/selectors/langSelectors";

export const useLangOptions = () => useSelector(getLangOption);
export const useLangValue = () => useSelector(getLangValue);
