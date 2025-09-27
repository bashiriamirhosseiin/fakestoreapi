import axios from "axios";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/header";
import Categories from "./components/Categories";


export default function App() {
  // Models
  const [status, setStatus] = useState(0);
  const [products, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [searchFilter, setSearchFilter] = useState(null);
  const [shop, setShop] = useState({
    name: "fakeShop",
    location: "Iran, Tehran",
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

  // extract categoreis from products
  useEffect(() => {
    const uniqueCategories = [
      ...new Set(
        products
          .map((product) => product.category)
          .filter((category) => category && category.trim() !== "")
      ),
    ];
    setCategories(uniqueCategories);
  }, [products]);

  // models tracker
  useEffect(() => {
    console.log("products", products);
  }, [products]);

  useEffect(() => {
    console.log("status", status);
  }, [status]);

  useEffect(()=>{
    console.log("categories", categories);
  }, [categories])

  // jsx
  return (
    <div className="w-full h-screen overflow-clip">
      <Header name={shop.name} location={shop.location} />
      <Categories 
        items={categories}
      />
      <p>status : {status}</p>
      <div className="">
        {products.map((product) => (
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
