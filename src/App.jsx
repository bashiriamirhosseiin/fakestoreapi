import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {

  // Models
  const [status, setStatus] = useState(0);
  const [products, setProduct] = useState([]);

  // api
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProduct(res.data);
        setStatus(res.status);
        console.log("res: ", res);
      })
      .catch((err) => {
        console.log("res: ", err);
      });
  }, []);

  // model tracker
  useEffect(() => {
    console.log("products", products);
  }, [products]);

  useEffect(() => {
    console.log("products", status);
  }, [status]);

  // jsx
  return (
    <div className="">
      <p>status : {status}</p>
    </div>
  );
}
