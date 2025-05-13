import { useEffect, useState } from "react";
import { api } from "../../../api";
import { useNavigate } from "react-router-dom";

const Statistic = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        setProducts(res.data.data);
        console.log(res.data);
        
      })
      .catch((err) => console.error(err))
      .finally();
  }, []);

  const navigate = useNavigate()

  return (
    <>
      <div className="container mx-auto grid grid-cols-4 gap-4 mt-6">
        {products?.map((product) => (
          <div className="border border-gray-300 p-4 rounded-2xl" key={product.id}>
            <img
              className="w-full h-64 object-cover" onClick={()=> navigate(`/dashboard/statistic/product/${product.id}`)}
              src={product.img}
              alt={product.name}
            />
            <h3 className="text-4xl mt-4">{product.name}</h3>
            <p className="text-2xl">{product.description}</p>
            <p className="text-amber-500">{product.price} $</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Statistic;
