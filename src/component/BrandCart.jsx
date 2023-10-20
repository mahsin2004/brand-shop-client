import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BrandCart = ({ brand }) => {
  const rate = parseFloat(brand.rating);

  return (
    <div>
      <div className="drop-shadow-md hover:drop-shadow-xl transition">
        <div className="bg-base-100 rounded-md">
          <figure>
            <img
              src={brand.image}
              alt="product"
              className="h-64 w-full rounded-lg border-b-2 border-t-2"
            />
          </figure>
          <div className="px-5 py-8 space-y-2">
            <div className="text-gray-700">
              <span className="font-medium">Name:</span> {brand.name}
            </div>
            <div>
              <span className="font-medium">Brand Name: </span>
              {brand.brandName}
            </div>
            <div>
              <span className="font-medium">Type: </span>
              {brand.type}
            </div>
            <div className="flex justify-between">
              <div>
                <span className="font-medium">Price: $</span> {brand.price}
              </div>
              <div className="flex gap-[6px] items-center">
                <p className="text-[15.5px] pt-[2.5px]">{rate}.0 </p>
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
            <div className="flex gap-5 justify-between pt-4">
              <Link to={`/update/${brand._id}`}>
                <button className="py-2 px-4 bg-gray-800 text-white rounded-md ">
                  Update
                </button>
              </Link>
              <Link to={`/details/${brand._id}`}>
                <button className="py-2 px-4 bg-gray-800 text-white rounded-md ">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BrandCart.propTypes = {
  brand: PropTypes.object,
};

export default BrandCart;
