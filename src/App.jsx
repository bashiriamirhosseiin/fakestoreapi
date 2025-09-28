import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/header";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Footer from "./components/Footer";


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
    <div className="w-full h-screen overflow-clip flex flex-col">
      <Header name={shop.name} location={shop.location} />
      <Categories 
        items={categories}
      />
      <Products 
        items={products}  
      />
      <Footer />
    </div>
  );
}
