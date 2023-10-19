import Swal from 'sweetalert2'

const UpdateProduct = () => {

    const productUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const shortDescription = form.shortDescription.value;
        const image = form.image.value;
        const brand = { name, brandName, type, price, rating, shortDescription, image}
        console.log(brand)
    
        fetch('https://brand-shop-server-jre203ja5-mahsin2004s-projects.vercel.app/brands', {
          method: "PUT",
          headers: {
            "content-type" : "application/json"
          },
          body: JSON.stringify(brand)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.modifiedCount> 0){
            Swal.fire({
              title: 'Successfully',
              text: 'Product Updated',
              icon: 'success',
              confirmButtonText: 'oky'
            })
            form.reset()
          }
        })
      }
    

    return (
        <div className="max-w-[991px] mx-auto my-16 px-5">
      <div className="bg-base-200 mt-6 px-10 lg:px-20 py-12">
        <div className="mx-auto text-center max-w-[600px] ">
          <h1 className="text-3xl lg:text-[45px] ">Add New Product</h1>
        </div>
        <form onSubmit={productUpdate} className="lg:card-body">
          <div className=" grid lg:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
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
                placeholder="Enter brand name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <input
                type="text"
                name="type"
                placeholder="Enter type"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
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
                placeholder="Enter image URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control lg:col-span-2 ">
              <button type="submit" className="py-3 bg-slate-700  text-white font-medium px-5 rounded-md">
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    );
};

export default UpdateProduct;