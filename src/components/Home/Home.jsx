// import { useContext } from "react";
// import { couterContext } from "../../Context/CounterContext";
import RecentProduct from "../RecentProduct/RecentProduct";
import Categorise from "../Categorise/Categorise";
import MainSlider from "../MainSlider/MainSlider";

export default function Home() {
  // let { count1, user, setCount1, setUser } = useContext(couterContext);

  return (
    <>
      <MainSlider />
      <Categorise />
      {/* <div className="py-6">
        <h2>
          Home <span>{count1}</span>
        </h2>
        <button
          className="p-2 bg-slate-500"
          onClick={() => setCount1(Math.random)}
        >
          Click
        </button>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
          adipisci eos vel?
        </p>
        <button
          className="bg-yellow-300"
          onClick={() => setUser("kero love basant")}
        >
          Click Now
        </button>
        <h1>{user}</h1>
      </div> */}
      <RecentProduct />
    </>
  );
}
