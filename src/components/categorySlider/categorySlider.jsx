import { useEffect, useMemo, useRef, useState } from "react";

// import Style from "./CategorySlider.module.css";

export default function CategorySlider() {
  // const [counter, setcounter] = useState(0);
  const [counter2, setcounter2] = useState(0);
  const [counter1, setcounter1] = useState(0);
  let HH = useRef();

  useEffect(() => {
    console.log(HH);
    // render.current += 1;
  });

  function counter_1() {
    setcounter1(counter1 + 2);
  }
  function counter_2() {
    setcounter2(counter2 + 1);
  }

  let checkCount2Even = useMemo(() => {
    console.log("check count call");
    return counter2 % 2 === 0;
  }, [counter2]);

  return (
    <>
      <div className="container text-center">
        <div className="row justify-around">
          <div className="col-span-2">
            <h1>counter1</h1>
            <h6>{counter1}</h6>
            <button onClick={counter_1} className="btn">
              +
            </button>
          </div>
          <div className="col-span-2">
            <h1>counter2</h1>
            <h6>{counter2}</h6>
            <h5>{checkCount2Even ? "even" : "odd"}</h5>
            <button onClick={counter_2} className="btn">
              -
            </button>
          </div>
        </div>
      </div>
      <h2>CategorySlider</h2>
      {/* <h1 ref={HH}>counter: {counter}</h1> */}
      {/* <h1>render: {render.current}</h1> */}
      {/* <button onClick={() => setcounter(counter + 1)}>+</button>
      <button onClick={() => setcounter(counter - 1)}>-</button> */}
    </>
  );
}
