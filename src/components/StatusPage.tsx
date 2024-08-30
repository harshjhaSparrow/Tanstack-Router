import React from "react";

import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import {
  decrement,
  increment,
} from "../redux/slices/exampleSlice";

const StatusPage: React.FC = () => {
  const count = useAppSelector((state) => state.example.value); 
  const dispatch = useAppDispatch(); 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default StatusPage;
