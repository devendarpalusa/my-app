import { useState } from "react";
const UseStateExample2 = () => {
  const [timer, setTimer] = useState(100);

  const handleChange = () => {
    setInterval(() => {
      setTimer(time => time - 1);
    }, 1000);
  };

  return (
    <>
      <h1>timer{timer}</h1>
      <button
        onClick={
          handleChange
        }
      >timer</button>
    </>
  );
};
export default UseStateExample2;
