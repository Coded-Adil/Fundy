import Banner from "../components/Banner";
import About from "../components/About";
import Oparate from "../components/Oparate";
import Programs from "../components/Programs";
import Join from "../components/Join";

const Home = () => {
    return (
        <div className="container mx-auto">
            {/* Banner */}
            <header className="my-6">
                <Banner />
            </header>
            {/* About */}
            <section className="container mx-auto">
                <About />
            </section>
            {/* How It Works Section */}
            <section className="container mx-auto my-10">
                <Oparate />
            </section>
            {/* Programs */}
            <section className="bg-blue-300 py-10  rounded-md">
                <Programs />
            </section>
            {/* Join our team */}
            <section className="container mx-auto">
                <Join />
            </section>
        </div>
    );
};

export default Home;