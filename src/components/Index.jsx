import React from "react";

import Hero from "./hero/Hero";
import PressList from "./press/PressList";
import About from "./about/About";
import Partners from "./partners/Partners";
import Advisors from "./advisors/Advisors";
import Footer from "./footer/footer";

function IndexPage() {
    return (
        <>
            <Hero />
            <About />
            <Partners />
            <Advisors />
            <PressList />
            <Footer />
        </>
  );
}

export default IndexPage;