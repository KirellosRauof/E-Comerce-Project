import { createContext, useEffect, useState } from "react";

export let UserContext = createContext();

export function UserContextProvider(props) {
  const [userToken, setuserToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("userToken") !== "") {
      setuserToken(localStorage.getItem("userToken"));
    }
  }, []);
 

  return (
    <UserContext.Provider value={{ userToken, setuserToken }}>
      {props.children}
    </UserContext.Provider>
  );
}
