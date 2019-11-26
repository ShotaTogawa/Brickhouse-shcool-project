import React from "react";
import Hero from "./hero/Hero";
import PressList from "./press/PressList";
import About from "./about/About";
import Advisors from "./advisors/Advisors";
import Footer from "./footer/footer";

function IndexPage() {
    return (
        <>
            <Hero />
            <About />
            <Advisors />
            <PressList />
            <Footer />
        </>
  );
}

export default IndexPage;