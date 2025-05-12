import React, { useEffect, useState } from "react";
import { api } from "../../../api"; // API import qilish
import toast from "react-hot-toast";


const Product = () => {
  const [nameValue, setNameValue] = useState("");
  const [descValue, setDescValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [CategoryValue, setCategoryValue] = useState("");

  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState(null);
  const [update, setUpdate] = useState(null);

  useEffect(() => {
    api
      .get("/categories")
      .then((res) => setCategory(res.data))
      .catch((err) => console.error(err));

    api
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, [reload]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const newProd = {
      name: nameValue,
      price: parseFloat(priceValue),
      description: descValue,
      categoryId: parseInt(CategoryValue),
      img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
    };

    api
      .post("/products", newProd)
      .then((res) => {
        setNameValue("");
        setDescValue("");
        setPriceValue("");
        setCategoryValue("");
        toast.success("Product created successfully");
        setReload((p) => !p);
      })
      .catch(() => {
        toast.error("Error creating product");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    api
      .delete(`/products/${id}`)
      .then((res) => {
        setReload((p) => !p);
        toast.success("Product deleted successfully");
      })
      .catch((err) => toast.error("Error deleting product"));
  };

  return (
    <div className="container mx-auto mt-20 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-[800px] shadow-2xl p-10 grid grid-cols-2 gap-3"
      >
        <input
          type="text"
          placeholder="Enter name..."
          className="w-full h-10 p-4 rounded-[5px] bg-[#eee] focus:outline-none"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
        <textarea
          placeholder="Enter description..."
          className="w-full p-4 rounded-[5px] bg-[#eee] focus:outline-none"
          value={descValue}
          onChange={(e) => setDescValue(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter price..."
          className="w-full h-10 p-4 rounded-[5px] bg-[#eee] focus:outline-none"
          value={priceValue}
          onChange={(e) => setPriceValue(e.target.value)}
        />
        <select
          className="w-full h-10 rounded-[5px] bg-[#eee] focus:outline-none px-4"
          value={CategoryValue}
          onChange={(e) => setCategoryValue(e.target.value)}
        >
          <option value="">Select a category</option>
          {category?.data?.map((categ) => (
            <option key={categ.id} value={String(categ.id)}>
              {categ.name}
            </option>
          ))}
        </select>
        <button
          className="h-[40px] mt-5 w-[100px] rounded-[5px] bg-[#dad4d4] cursor-pointer hover:bg-[#eee]"
          disabled={loading}
        >
          {loading ? "Loading..." : update ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Product;
