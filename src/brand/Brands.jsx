
import { useEffect, useState } from "react";
import Card from "./Card";


const Brands = () => {
   const [brands, setBrands] = useState([]);

    useEffect(()=> {
        fetch("/public/brand.json")
        .then(res => res.json())
        .then(data => setBrands(data))
    },[])
    console.log(brands);

    return (
        <div className="max-w-[1440px] mx-auto px-10 pb-5 pt-28 ">
            <h1 className="text-4xl text-center lg:text-5xl text-gray-800 font-semibold">Shop your favorite brand</h1>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-12">
                {brands.map(brand => (
                    <Card key={brand.id} brand={brand} ></Card>
                ))}
            </div>
        </div>
    );
};

export default Brands;