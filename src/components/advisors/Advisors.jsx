import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Advisors.scss";
import advisors from "./advisorsInfo";
import Modal from "./Modal";

const Advisors = ({ isVisible, inView }) => {
    
    useEffect(() => {
        isVisible ? inView("103") : inView();
    }, [isVisible]);

    const [modalState, setModalState] = useState(false);
    const [modalText, setModalText] = useState();

    const showModal = (text) => {
        setModalState(true);
        setModalText(text);
    };

    const hideModal = () => {
        setModalState(false);
    };


    const settings = {
        arrows: false,
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        speed: 800,
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
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false
                }
            }
        ]
    };
    return (
        <section className="advisors_container" id="advisors">
            <h1 className="advisors_title">ADVISORS</h1>
            <Modal show={modalState} handleClose={hideModal}>
                <p>{modalText}</p>
            </Modal>
            <Slider {...settings}>
                {advisors.map((advisor, index) => {
                    return (
                        <div className="advisor" key={index} onClick={() => showModal(advisor.description)}>
                            <p className="advisor_name">{advisor.name}</p>
                            <p className="advisor_location">{advisor.location}</p>
                        </div>
                    );
                })}
            </Slider>
        </section>
    );
};

export default Advisors;
