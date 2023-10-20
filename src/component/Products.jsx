import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import BrandCart from "./BrandCart";
import Slider from "../brand/Slider";
import useAuth from "../hook/useAuth";

const Products = () => {
  const [brandNames, setBrandNames] = useState([]);
  const [brands, setBrands] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(
      "https://brand-shop-server-7rax2770d-mahsin2004s-projects.vercel.app/names"
    )
      .then((res) => res.json())
      .then((data) => setBrandNames(data));
  }, []);

  const brandName = brandNames.filter((brand) => brand._id === id);

  useEffect(() => {
    fetch(
      "https://brand-shop-server-7rax2770d-mahsin2004s-projects.vercel.app/brands"
    )
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  const brand = brands.filter(
    (brand) => brand?.brandName === brandName[0]?.name
  );

  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center">
        <p className="loading loading-spinner loading-md"></p>
      </div>
    );
  }

  return (
    <div>
      <div>
        {brandName.map((brand) => (
          <Slider key={brand._id} brand={brand}></Slider>
        ))}
      </div>
      <div className="max-w-[1400px] mx-auto px-10 py-20 ">
        <h1 className="text-5xl pb-10 text-center font-medium text-gray-700">
          Products
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {brand.length > 0 ? (
            brand.map((brand) => (
              <BrandCart key={brand._id} brand={brand}></BrandCart>
            ))
          ) : (
            <div className=" col-span-3">
              <div className="flex flex-col">
                <h1 className="text-5xl text-center text-red-600">
                  No item was added
                </h1>
                <div className="mx-auto mt-3">
                  <Link to="/">
                    <p className="py-2 px-4 lg:py-3 lg:px-6  bg-gray-800 text-white rounded-md">
                      Go Back Home
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
