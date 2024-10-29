import useProducts from "../../Hooks/useProducts";

export default function Test() {
 let x = useProducts();
console.log(x);

  return (
    <>
      <h2>Test</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus adipisci
        eos vel?
      </p>
    </>
  );
}
