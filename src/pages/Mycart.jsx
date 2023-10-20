import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";

const MyCart = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch(
      "https://brand-shop-server-en64uswb4-mahsin2004s-projects.vercel.app/myCart"
    )
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  const deleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://brand-shop-server-en64uswb4-mahsin2004s-projects.vercel.app/myCart/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            const remaining = carts.filter((brand) => brand._id !== id);
            setCarts(remaining);
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Successfully",
                text: "Coffee Item Deleted",
                icon: "success",
                confirmButtonText: "oky",
              });
            }
          });
      }
    });
  };

  return (
    <div className="py-20 max-w-[1440px] mx-auto px-4 lg:px-12">
      <div className="grid md:grid-cols-3 gap-5">
        {carts.length > 0 ? (
          <>
            {carts.map((brand) => (
              <div key={brand._id} className="rounded-[10px] drop-shadow-md">
                <div className="card bg-base-100 pb-8">
                  <figure className="border-y-2 rounded-xl">
                    <img
                      src={brand.image}
                      alt="image"
                      className="h-[250px] w-full rounded-xl "
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <p className="text-xl text-gray-700">{brand.name}</p>
                  </div>
                  <button
                    onClick={() => deleteItem(brand._id)}
                    className="py-2 px-4 bg-gray-800 mx-auto text-white rounded-md w-3/6"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className=" col-span-3">
            <div className="flex flex-col">
              <h1 className="text-5xl text-center text-red-600">
                No item was added.
              </h1>
              <div className="mx-auto mt-3">
                <Link to="/">
                  <p className="py-2 px-2 lg:py-3 lg:px-6  bg-gray-800 text-white rounded-md">
                    Go Back Home
                  </p>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCart;
