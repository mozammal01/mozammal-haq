import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <div>
      <Banner></Banner>
    </div>
    </>
  );
};

export default Home;