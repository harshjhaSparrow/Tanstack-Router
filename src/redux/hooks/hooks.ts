// src/redux/hooks.ts
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
// Custom hook to use the typed dispatch function
export const useAppDispatch = () => useDispatch<AppDispatch>();
// Custom hook to use the typed selector function
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
