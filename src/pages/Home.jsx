
import Brands from "../brand/Brands";
import Banner from "../component/Banner";
import Contact from "../component/Contact";
import Services from "../component/Services";
import useAuth from "../hook/useAuth";

const Home = () => {
    const { loading } = useAuth();

    if (loading) {
        return (
            <div className="flex justify-center">
                <p className="loading loading-spinner loading-md"></p>
            </div>
        );
    }

    return (
        <div className="bg-base-200">
            <Banner />
            <Brands />
            <Services />
            <Contact />
        </div>
    );
};

export default Home;
