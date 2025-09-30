import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/header";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Footer from "./components/Footer";
import ProductModal from "./components/modals/ProductModal";
import CategoriesLoading from "./components/CategoriesLoading";
import ProductsLoading from "./components/ProductsLoading";

export default function App() {
  // Models
  const [openProductModal, setOpenProductModal] = useState(false);
  const [productModal, setProductModal] = useState(null);

  function handleProductModal(data) {
    setProductModal(data);
    setOpenProductModal(true);
  }

  function handleCloseProductModal() {
    setOpenProductModal(false);
  }

  const [status, setStatus] = useState(0);
  const [products, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [searchFilter, setSearchFilter] = useState("");
  const [shop, setShop] = useState({
    name: "fakeShop",
    location: "Iran, Tehran",
  });

  const [loading, setLoading] = useState(true);

  const [showItems, setShowItems] = useState([]);

  // api
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProduct(res.data);
        setShowItems(res.data);
        setCategoryFilter(null);
        setSearchFilter("");
        setStatus(res.status);
        setLoading(false);
      })
      .catch((err) => {
        setCategoryFilter(null);
        setSearchFilter("");
      });
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      if (categoryFilter === "" && categoryFilter === null) {
        setShowItems(products);
      } else {
        var items = products;
        if (categoryFilter !== null) {
          items = items.filter((item) => item.category == categoryFilter);
        }
        if (searchFilter !== "") {
          items = items.filter((item) =>
            item.title.toLowerCase().includes(searchFilter.toLowerCase())
          );
        }
        setShowItems(items);
      }
    }
  }, [categoryFilter, searchFilter]);

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

  useEffect(() => {
    console.log("categories", categories);
  }, [categories]);

  useEffect(() => {
    console.log("categoryFilter", categoryFilter);
  }, [categoryFilter]);

  useEffect(() => {
    console.log("categoryFilter", searchFilter);
  }, [searchFilter]);

  // action handles
  function handleCategoryClick(name) {
    setCategoryFilter(name);
  }

  function handleSearchClick(search) {
    setSearchFilter(search.trim());
  }

  // jsx
  return (
    <>
      <ProductModal
        open={openProductModal}
        data={productModal}
        onClose={handleCloseProductModal}
      />

      <div className="w-full h-screen overflow-clip flex flex-col">
        <Header
          name={shop.name}
          location={shop.location}
          searchClick={handleSearchClick}
        />
        {loading ? (
          <CategoriesLoading />
        ) : (
          <Categories
            items={categories}
            onClick={handleCategoryClick}
            filter={categoryFilter}
          />
        )}

        {loading ? (
          <ProductsLoading />
        ) : (
          <Products items={showItems} onProductClick={handleProductModal} />
        )}

        <Footer />
      </div>
    </>
  );
}
