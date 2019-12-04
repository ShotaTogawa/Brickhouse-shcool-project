import React from "react";
import Hero from "./hero/Hero";
import  VisibilitySensor from 'react-visibility-sensor';
import PressList from "./press/PressList";
import About from "./about/About";
import Partners from "./partners/Partners";
import Advisors from "./advisors/Advisors";
import Contact from "./contact/contact";
import Footer from "./footer/footer";

function IndexPage({ checkCurrentSection }) {

    const onChange = (isVisible, id) => {
        isVisible && checkCurrentSection(id);

    }

    return (
        <>
            <Hero />
            <VisibilitySensor onChange={(e) => onChange(e,"101")} partialVisibility >
                <About />
            </VisibilitySensor>
            <VisibilitySensor onChange={(e) => onChange(e,"102")} partialVisibility >
                <Partners />
            </VisibilitySensor>
            <VisibilitySensor onChange={(e) => onChange(e,"103")} partialVisibility >
                <Advisors />
            </VisibilitySensor>
            <VisibilitySensor onChange={(e) => onChange(e,"104")} partialVisibility >
                <PressList />
            </VisibilitySensor>
            <VisibilitySensor onChange={(e) => onChange(e,"105")} partialVisibility >
                <Contact />
            </VisibilitySensor>

            <Footer />
        </>
    );
}

export default IndexPage;