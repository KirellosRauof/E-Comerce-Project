import { createContext, useState } from "react";

export let couterContext = createContext(0);

export function CounterContextProvider(props) {
  let [count1, setCount1] = useState(0);
  let [user, setUser] = useState("");

  return (
    <couterContext.Provider value={{ count1, user, setCount1, setUser }}>
      {props.children}
    </couterContext.Provider>
  );
}
