import Brands from "../brand/Brands";
import Banner from "../component/Banner";

import Contact from "../component/Contact";
import Services from "../component/Services";


const Home = () => {

    return (
        <div className="bg-base-200">
            <Banner></Banner>
            <Brands></Brands>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;