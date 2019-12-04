import React from "react";
import TrackVisibility from 'react-on-screen';
import Hero from "./hero/Hero";
import PressList from "./press/PressList";
import About from "./about/About";
import Partners from "./partners/Partners";
import Advisors from "./advisors/Advisors";
import Contact from "./contact/contact";
import Footer from "./footer/footer";

function IndexPage({ checkCurrentSection }) {
    return (
        <>
            <Hero />
            <TrackVisibility partialVisibility>
                <About inView={checkCurrentSection} />
            </TrackVisibility>
            <TrackVisibility partialVisibility>
                <Partners inView={checkCurrentSection} />
            </TrackVisibility>
            <TrackVisibility>
                <Advisors inView={checkCurrentSection} />
            </TrackVisibility>
            <TrackVisibility>
                <PressList inView={checkCurrentSection} />
            </TrackVisibility>
            <TrackVisibility>
                <Contact inView={checkCurrentSection} />
            </TrackVisibility>

            <Footer />
        </>
    );
}

export default IndexPage;