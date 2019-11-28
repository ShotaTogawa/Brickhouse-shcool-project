import React from "react";
import "./Hero.scss";
import BG_Video from "../../video/Header_split.mp4"

const Hero = () => {
    return (
        <section className="hero_container" id="hero">
            
            <div className="hero_heading">
                SEEKING OPPORTUNITIES
                <span className="hero_subheading">IN EARLY STAGE ESPORTS, SPORTS & ENTERTAINMENT TECHNOLOGIES</span>
            </div>

            {/* <div style={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                }}>
                <video
                    style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    }}
                    src={BG_Video}
                    autoPlay
                />
            </div> */}

            {/* <video id="videoBG" autoPlay muted>
                <source src={BG_Video} type="video/mp4" />
            </video> */}
        </section>
    )
};

export default Hero;
