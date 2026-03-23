import React, { useEffect, useState } from "react";
import axiosInstance from "../../config/axiosConfig";
import ProductCard from "./ProductCard";
import transition from "../../transition";

const ProductComponent = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const userRole = localStorage.getItem("role") || "user";

  const handleEdit = (category) => {
    console.log("Editing category:", category);
  };

  const handleDelete = (id) => {
    console.log("Deleting item with ID:", id);
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ProductCard
        datas={products}
        userRole={userRole}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default transition(ProductComponent);
