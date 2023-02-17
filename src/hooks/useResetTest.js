import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetTest } from "../redux/actions/testAction";
import { getHasTest } from "../redux/selectors/testSelector";

export const useResetTest = () => {
  const dispatch = useDispatch();

  const hasTest = useSelector(getHasTest);

  useEffect(() => {
    hasTest && dispatch(resetTest());
  }, [dispatch, hasTest]);
};
