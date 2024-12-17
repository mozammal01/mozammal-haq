import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Mozammal Haq</title>
    </Helmet>
    <div>
      <Banner></Banner>
    </div>
    </>
  );
};

export default Home;