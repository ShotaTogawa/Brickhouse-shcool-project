import React from "react";

import Hero from "./hero/Hero";
import PressList from "./press/PressList";
import About from "./about/About";
import Partners from "./partners/Partners";
import Advisors from "./advisors/Advisors";
import Contact  from "./contact/contact";
import Footer from "./footer/footer";

function IndexPage() {
    return (
        <>
            <Hero />
            <About />
            <Partners />
            <Advisors />
            <PressList />
            <Contact />
            <Footer />
        </>
  );
}

export default IndexPage;