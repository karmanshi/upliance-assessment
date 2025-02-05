import {useEffect, useState} from "react";
import Button from "./common/button";

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    const countNumber=localStorage.getItem("count_number")||0
    setCount(parseInt(countNumber))
  }, [])

  const updateData=(condition)=>{
    let updateValue=count
    switch (condition) {
      case "increase":
        updateValue=count + 1
        break;
      case "decrease":
        updateValue=count - 1
        break;
        
      default:
        updateValue=0
        break;
    }
    setCount(updateValue)
    localStorage.setItem("count_number", updateValue)
  }

  return (
    <div className="flex flex-col gap-10 justify-center w-full p-10 border border-2 rounded-md">
      <div className="w-full flex justify-center font-bold">{count}</div>
      <div className="w-full flex justify-center font-bold">COUNTER</div>
      <div className="w-full flex justify-center gap-5">
        <Button onClick={() => updateData('increase')} extra_css="bg-blue-400 hover:bg-blue-600" text="+" />
        <Button onClick={() => updateData('reset')} extra_css="bg-gray-400 hover:bg-gray-600" text="Reset" />
        <Button onClick={() => updateData('decrease')} extra_css="bg-blue-400 hover:bg-blue-600" text="-" />
      </div>
    </div>
  );
};

export default CounterComponent;
