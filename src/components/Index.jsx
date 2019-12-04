import React from "react";
// import TrackVisibility from 'react-on-screen';
import Hero from "./hero/Hero";
import  VisibilitySensor from 'react-visibility-sensor';
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
            <VisibilitySensor>
                <About inView={checkCurrentSection} onChange={onChange} />
            </VisibilitySensor>
            <VisibilitySensor>
                <Partners inView={checkCurrentSection} onChange={onChange} />
            </VisibilitySensor>
            <VisibilitySensor>
                <Advisors inView={checkCurrentSection} onChange={onChange} />
            </VisibilitySensor>
            <VisibilitySensor>
                <PressList inView={checkCurrentSection} onChange={onChange} />
            </VisibilitySensor>
            <VisibilitySensor>
                <Contact inView={checkCurrentSection} onChange={onChange} />
            </VisibilitySensor>

            <Footer />
        </>
    );
}

export default IndexPage;