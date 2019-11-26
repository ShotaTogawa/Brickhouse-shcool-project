import React from "react";
import Hero from "./hero/Hero";
import PressList from "./press/PressList";
import About from "./about/About";
import Advisors from "./advisors/Advisors";

function IndexPage() {
    return (
        <>
            <Hero />
            <About />
            <Advisors />
            <PressList />
        </>
  );
}

export default IndexPage;