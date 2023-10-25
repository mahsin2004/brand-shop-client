import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hook/useAuth";

const Update = () => {
  const [brands, setBrands] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://brand-shop-server-ee5q1ivi9-mahsin2004s-projects.vercel.app/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  const brandName1 = brands.filter((brand) => brand?._id === id);

  const productUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const shortDescription = form.shortDescription.value;
    const image = form.image.value;
    const brand = {
      name,
      brandName,
      type,
      price,
      rating,
      shortDescription,
      image,
    };
    console.log(brand);

    fetch(`https://brand-shop-server-ee5q1ivi9-mahsin2004s-projects.vercel.app/brands/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(brand),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Successfully",
            text: "Product Updated",
            icon: "success",
            confirmButtonText: "oky",
          });
          window.location.reload();
          form.reset();
        }
      });
  };

  const { loading } = useAuth();

    if (loading) {
        return (
            <div className="flex justify-center">
                <p className="loading loading-spinner loading-md"></p>
            </div>
        );
    }

  return (
    <div className="max-w-[991px] mx-auto my-16 px-5">
      <div className="bg-base-200 mt-6 px-2 lg:px-20 py-12">
        <div className="mx-auto text-center max-w-[600px] ">
          <h1 className="text-3xl lg:text-[45px] ">Update Product</h1>
        </div>
        <form onSubmit={productUpdate} className="">
          <div className=" grid lg:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={brandName1[0]?.name}
                placeholder="Enter name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                type="text"
                name="brandName"
                defaultValue={brandName1[0]?.brandName}
                placeholder="Enter brand name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <select
                name="type"
                placeholder="select type"
                className="input input-bordered"
                required
              >
                <option value={brandName1[0]?.type}>
                  {brandName1[0]?.type}
                </option>
                <option value="car">car</option>
                <option value="bus">bus</option>
                <option value="mini">mini bus</option>
                <option value="truck">truck</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={brandName1[0]?.price}
                placeholder="Enter price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                defaultValue={brandName1[0]?.rating}
                placeholder="Enter rating"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="shortDescription"
                defaultValue={brandName1[0]?.shortDescription}
                placeholder="Enter short description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control lg:col-span-2">
              <label className="label">
                <span className="label-text">Image Link</span>
              </label>
              <input
                type="text"
                name="image"
                defaultValue={brandName1[0]?.image}
                placeholder="Enter image URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control lg:col-span-2 ">
              <button
                type="submit"
                className="py-3 bg-slate-700  text-white font-medium px-5 rounded-md"
              >
                Submit Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
