import React from "react";
import Hero from "./hero/Hero";
import PressList from "./press/PressList";
import About from "./about/About";

function IndexPage() {
    return (
        <>
            <Hero />
            <About />
            <PressList />
        </>
  );
}

export default IndexPage;