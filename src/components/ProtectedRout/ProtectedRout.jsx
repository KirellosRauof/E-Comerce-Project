import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRout(props) {
  let { userToken } = useContext(UserContext);

  if (userToken !== null) {
    return props.children;
  } else {
    return <Navigate to={"/login"} />;
  }
}
