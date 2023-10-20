import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Details = () => {
    const [brands, setBrands] = useState([]);
    const {id} = useParams();


    useEffect(()=> {
        fetch("https://brand-shop-server-7rax2770d-mahsin2004s-projects.vercel.app/brands")
        .then(res => res.json())
        .then(data => setBrands(data))
    },[])

    const brandName1 = brands.filter(brand => brand?._id === id);
  return (
    <div className="max-w-[700px] mx-auto my-16 px-5">
      <div className="drop-shadow-md  hover:drop-shadow-xl transition">
        <div className="bg-base-100 rounded-md">
          <figure>
            <img
              src={brandName1[0]?.image}
              alt="product"
              className="h-64 w-full rounded-lg border-b-2 border-t-2"
            />
          </figure>
          <div className="px-10 py-8 space-y-2">
            <div className="text-gray-700">
              <span className="font-medium">Name:</span> {brandName1[0]?.name}
            </div>
            <div>
              <span className="font-medium">Brand Name: </span>
              {brandName1[0]?.brandName}
            </div>
            <div>
              <span className="font-medium">Type: </span>
              {brandName1[0]?.type}
            </div>
            <div>
                <p><span className="font-medium">Description: </span>{brandName1[0]?.shortDescription}</p>
            </div>
            <div className="flex justify-between pt-4">
              <div>
                <span className="font-medium">Price: $</span> {brandName1[0]?.price}
              </div>
              <div className="flex gap-[6px] items-center">
                <p className="text-[15.5px] pt-[2.5px]">{brandName1[0]?.rating}.0 </p>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-5 justify-center pt-8">
              <button className="py-2 px-4 lg:py-3 lg:px-6 bg-gray-800 text-white rounded-md ">
                Add Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
