import { useEffect, useState } from "react";
import { api } from "../../../api";

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

  return (
    <>
      <div className="container mx-auto grid grid-cols-4 gap-4">
        {products?.map((product) => (
          <div className="border border-gray-300 p-4" key={product.id}>
            <img
              className="w-full h-64 object-cover"
              src={product.img}
              alt={product.name}
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price} $</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Statistic;
