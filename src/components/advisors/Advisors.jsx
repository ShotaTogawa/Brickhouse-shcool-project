import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Advisors.scss";
import advisors from "./advisorsInfo";

const Advisors = () => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        speed: 300,
        swipe: true,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false
            }
        },
        {
            breakpoint: 425,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false
            }
        }
        ]
    };
    return (
        <section class="advisors_container" id="advisors">
            <h1 className="advisors_title">Advisors</h1>
            <Slider {...settings}>
                {advisors.map((advisor, index) => {
                    return (
                        <div className="advisor" key={index}>
                        <img
                            className="advisor_image"
                            src="https://s3-media2.fl.yelpcdn.com/bphoto/ZmA5A0e_74G1qUZSiqmvHQ/ls.jpg"
                            alt={advisor.name}
                        />
                        <p className="advisor_name">{advisor.name}</p>
                        <p className="advisor_location">{advisor.location}</p>
                        <p className="advisor_description">{advisor.description}</p>
                        </div>
                    );
                })}
            </Slider>
        </section>
    );
};

export default Advisors;
