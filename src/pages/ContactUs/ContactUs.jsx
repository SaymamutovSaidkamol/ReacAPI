import { useEffect, useState } from "react";
import { api } from "../../api";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [nameValue, setNameValue] = useState("");
  const [descValue, setDescValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [CategoryValue, setCategoryValue] = useState("");
  const [ImageValue, setImageValue] = useState("");

  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(nameValue);
    // console.log(descValue);
    // console.log(priceValue);
    console.log(ImageValue);

    const newProd = {
      name: nameValue,
      price: parseFloat(priceValue),
      description: descValue,
      categoryId: parseInt(CategoryValue),
      img: ImageValue,
    };

    if (update) {
      //
      api
        .patch(`/products/${update}`, newProd)
        .then((res) => {
          console.log(res.data);
          setNameValue("");
          setDescValue("");
          setPriceValue("");
          setCategoryValue("");
          setImageValue("");
          toast.success("Product Updated successfully");
          setReload((p) => !p);
          setUpdate(null);
        })
        .catch(() => {
          toast.error("Error");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      api
        .post("/products", newProd)
        .then((res) => {
          console.log(res.data);
          setNameValue("");
          setDescValue("");
          setPriceValue("");
          setCategoryValue("");
          toast.success("Product created successfully");
          setReload((p) => !p);
        })
        .catch(() => {
          toast.error("Error");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState(null);
  const [update, setUpdate] = useState(null);

  useEffect(() => {
    api
      .get("/categories")
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => console.error(err))
      .finally();

    api
      .get("/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error(err))
      .finally();
  }, [reload]);

  const handleDelete = (id) => {
    console.log(id);
    api
      .delete(`/products/${id}`)
      .then((res) => {
        setReload((p) => !p);
        toast.success("Product delete successfully");
      })
      .catch()
      .finally();
  };

  const handleUpdate = (product) => {
    setUpdate(product.id);
    console.log(product);
    setNameValue(product.name);
    setDescValue(product.description);
    setPriceValue(product.price);
    setCategoryValue(product.categoryId);
    setImageValue(product.img);
  };

  return (
    <>
      <div className="container mx-auto flex justify-center items-center">
        <div className="w-[562px] mt-[128px] mx-auto flex flex-col gap-4 justify-center items-center">
          <h3 className="text-[48px] font-bold">Contact Us</h3>
          <p className="text-center opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div className="bg-[#F4F6FC] py-12 px-8  mt-[64px]">
          <div className="max-w-[1061px] w-full mx-auto p-10 rounded-lg ">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="Provide context"
                  className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="Select Subject"
                  className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
                />
              </div>
              <div className="col-span-1 md:col-span-2 flex flex-col">
                <label className="text-sm font-semibold mb-1">Message</label>
                <textarea
                  placeholder="Write your question here"
                  rows="5"
                  className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
                ></textarea>
              </div>
              <div className="col-span-1 md:col-span-2">
                <button
                  type="submit"
                  className="bg-[#292D32] text-white px-6 py-3 rounded-full hover:bg-[#1f2328] transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex justify-center items-center mb-19 mt-9">
        <form
          onSubmit={handleSubmit}
          action=""
          className="w-[400px] shadow-2xl p-10 flex justify-center items-center flex-col gap-2.5"
        >
          <input
            type="text"
            placeholder="Enter name..."
            className=" w-full h-10 p-4 rounded-[5px] bg-[#eee] focus:outline-none"
            value={nameValue}
            onChange={(e) => {
              setNameValue(e.target.value);
            }}
          />
          <textarea
            placeholder="Enter description..."
            className="w-full p-4 rounded-[5px] bg-[#eee] focus:outline-none"
            value={descValue}
            onChange={(e) => {
              setDescValue(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Enter price..."
            className="w-full h-10 p-4 rounded-[5px] bg-[#eee] focus:outline-none"
            value={priceValue}
            onChange={(e) => {
              setPriceValue(e.target.value);
            }}
          />
          <select
            className="w-full h-10 rounded-[5px] bg-[#eee] focus:outline-none  px-4"
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
          <input
            type="file"
            className="w-full h-10 py-2 px-4 rounded-[5px] bg-[#eee] focus:outline-none"
            onChange={(e) => {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.onloadend = () => {
                setImageValue(reader.result); 
              };
              if (file) {
                reader.readAsDataURL(file);
              }
            }}
          />
          <button
            className="h-[40px] mt-5 w-[100px] rounded-[5px] bg-[#dad4d4] cursor-pointer hover:bg-[#eee]"
            disabled={loading}
          >
            {loading ? "Loading..." : update ? "Update" : "Submit"}
          </button>
        </form>
      </div>

      <div className="container mx-auto grid grid-cols-4 gap-4">
        {products?.data?.map((product) => (
          <div className="border border-gray-300 p-4" key={product.id}>
            <img
              className="w-full h-64 object-cover"
              src={product.img}
              alt={product.name}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price} $</p>
            <div className="flex justify-between">
              <button
                onClick={() => handleDelete(product.id)}
                className="border bg-red-500 text-white rounded-[4px] py-1 px-2 cursor-pointer hover:bg-red-700"
              >
                delete
              </button>
              <button
                onClick={() => handleUpdate(product)}
                className="border bg-green-500 text-white rounded-[4px]  py-1 px-2 cursor-pointer hover:bg-green-700"
              >
                update
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactUs;
