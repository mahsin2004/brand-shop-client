import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ brand }) => {
  return (
    <Link to={`/products/${brand._id}`}>
    <div className="drop-shadow-md hover:drop-shadow-xl transition">
      <div className="card bg-base-100">
        <figure className="px-10 pt-10">
          <img
            src={brand.img_link}
            alt="Shoes"
            className="rounded-xl h-28"
          />
        </figure>
        <div className="card-body items-center text-center">
          <p className="text-3xl text-gray-700 font-semibold">{brand.name}</p>
        </div>
      </div>
    </div>
    </Link>
  );
};
Card.propTypes = {
  brand: PropTypes.object,
};

export default Card;
