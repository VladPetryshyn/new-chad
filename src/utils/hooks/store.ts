import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import type { RootState } from "../../store/rootReducer";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () =>
  useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
