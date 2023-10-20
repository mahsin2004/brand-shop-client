
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BrandCart from "./BrandCart";
import Slider from "../brand/Slider";





const Products = () => {
    const [brandNames, setBrandNames] = useState([]);
    const [brands, setBrands] = useState([]);

    const {id} = useParams()

    useEffect(()=>{
        fetch("https://brand-shop-server-7rax2770d-mahsin2004s-projects.vercel.app/names")
        .then(res => res.json())
        .then(data => setBrandNames(data))
    },[])

   const brandName = brandNames.filter(brand => brand._id === id);
   
   useEffect(()=> {
      fetch("https://brand-shop-server-7rax2770d-mahsin2004s-projects.vercel.app/brands")
      .then(res => res.json())
      .then(data => setBrands(data))
   },[])
   
   const brand = brands.filter(brand => brand?.brandName === brandName[0]?.name)

    return (
        <div>
            <div>
                {brandName.map(brand => <Slider key={brand._id} brand={brand}></Slider>)}
            </div>
            <div className="max-w-[1400px] mx-auto px-10 py-20">
                <h1 className="text-5xl pb-10 text-center font-medium text-gray-700">Products</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {brand.map(brand => <BrandCart key={brand._id} brand={brand}></BrandCart>)}
                </div>
            </div>
        </div>
    );
};

export default Products;