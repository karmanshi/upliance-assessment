import {useState} from "react";
import Button from "./button";

const CounterComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col gap-10 justify-center w-full p-10 border border-2 rounded-md">
      <div className="w-full flex justify-center font-bold">{count}</div>
      <div className="w-full flex justify-center font-bold">COUNTER</div>
      <div className="w-full flex justify-center gap-5">
        <Button onClick={() => setCount(count + 1)} extra_css="bg-blue-400 hover:bg-blue-600" text="+" />
        <Button onClick={() => setCount(0)} extra_css="bg-gray-400 hover:bg-gray-600" text="Reset" />
        <Button onClick={() => setCount(count - 1)} extra_css="bg-blue-400 hover:bg-blue-600" text="-" />
      </div>
    </div>
  );
};

export default CounterComponent;
