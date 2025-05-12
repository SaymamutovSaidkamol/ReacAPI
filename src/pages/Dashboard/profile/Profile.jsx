import { useEffect, useState } from "react";
import { api } from "../../../api";
import toast from "react-hot-toast";

const Profile = () => {
  const [products, setProducts] = useState(null);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        setProducts(res.data.data);
        console.log(res.data);
        setReload((p) => !p);

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

  return (
    <>
      <div className="container mx-auto px-4 py-10">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-slate-800 text-white text-left">
              <tr>
                <th className="px-6 py-4">Image</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Description</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {products?.map((product) => (
                <tr
                  key={product.id}
                  className="border-b hover:bg-slate-100 transition duration-200"
                >
                  <td className="px-6 py-4">
                    <img
                      className="w-16 h-16 rounded object-cover border"
                      src={product.img}
                      alt={product.name}
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold">{product.name}</td>
                  <td className="px-6 py-4 max-w-[200px] truncate">
                    {product.description}
                  </td>
                  <td className="px-6 py-4 text-green-600 font-medium">
                    ${product.price}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-200 shadow-sm cursor-pointer"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Profile;
