import * as React from "react";
import {
  Header,
  Banner,
  About,
  CTA,
  Newsletter,
  Pricing,
  Team,
  Blogs,
  Footer
} from "./pages/sections/index";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <CTA />
      <Newsletter />
      <Pricing />
      <Team />
      <Blogs />
      <Footer />
    </>
  );
};

export default Home;
