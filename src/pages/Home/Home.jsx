import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import About from "./About/About";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Mozammal Haq</title>
      </Helmet>
      <div>
        <Banner />
        <About />
      </div>
    </>
  );
};

export default Home;