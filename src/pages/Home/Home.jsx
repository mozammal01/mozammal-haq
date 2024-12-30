import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import About from "./About/About";
import MySkills from "./About/MySkills/MySkills";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Mozammal Haq</title>
      </Helmet>
      <div>
        {/* <Banner />
        <About />
        <MySkills /> */}
        <SectionTitle />
      </div>
    </>
  );
};

export default Home;