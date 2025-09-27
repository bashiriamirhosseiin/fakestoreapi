import axios from "axios";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";

export default function App() {

  // Models
  const [status, setStatus] = useState(0);
  const [products, setProduct] = useState([]);
  const [shop, setShop] = useState({
    name: 'fakeStoreShop',
    location: 'Iran Tehran'
  });

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
    <div className="w-full">
      <Header />
      <p>status : {status}</p>
      <div className="">
        {products.map((product)=>(
          <Cart 
            key={product.id}
            id={product.id}
            category={product.category}
            description={product.description}
            image={product.image}
            price={product.price}
            rating={product.rating}
            title={product.title}
          />
        ))}
      </div>
    </div>
  );
}
