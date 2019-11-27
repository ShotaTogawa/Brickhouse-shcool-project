import React from "react";
import Hero from "./hero/Hero";
import PressList from "./press/PressList";
import About from "./about/About";
import Advisors from "./advisors/Advisors";
import Partners from "./partners/Partners";

function IndexPage() {
    return (
        <>
            <Hero />
            <About />
            <Partners />
            <Advisors />
            <PressList />
        </>
  );
}

export default IndexPage;