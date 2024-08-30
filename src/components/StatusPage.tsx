import React from "react";
import { useAppDispatch, useAppSelector } from "../miscellaneous/hooks/hooks";
import {
  decrement,
  increment,
} from "../miscellaneous/redux/slices/exampleSlice";

const StatusPage: React.FC = () => {
  const count = useAppSelector((state) => state.example.value); // Use the typed selector
  const dispatch = useAppDispatch(); // Use the typed dispatch

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default StatusPage;
