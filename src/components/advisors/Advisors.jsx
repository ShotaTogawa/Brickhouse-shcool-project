import React from "react";
import Media from "react-media";
import data from "./advisorsInfo";
import "./Advisors.scss";

class Advisors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            advisorsList: data.advisors,
            displayAdvisor: data.advisors[0],
            displayAdvisorsNum: 4
        };
    }

    nextAdvisor = () => {
        const newIndex = this.state.displayAdvisor.index + 1;
        this.setState({
            displayAdvisor: data.advisors[newIndex]
        });
    };

    prevAdvisor = () => {
        const newIndex = this.state.displayAdvisor.index - 1;
        this.setState({
            displayAdvisor: data.advisors[newIndex]
        });
    };

    changedisplayAdvisorsNum = matches => {
        let displayAdvisorsNum;
        if (matches.small && matches.medium) {
            displayAdvisorsNum = 1;
        } else if (matches.medium) {
            displayAdvisorsNum = 2;
        } else {
            displayAdvisorsNum = 4;
        }
        this.setState({
            displayAdvisorsNum
        });
    };

    render() {
        const { advisorsList, displayAdvisor, displayAdvisorsNum } = this.state;
        return (
            <section id="advisors">

                <Media
                    queries={{
                        small: "(max-width: 660px)",
                        medium: "(max-width: 960px)"
                    }}
                    onChange={matches => this.changedisplayAdvisorsNum(matches)}
                />

                <div className="advisors_container">

                    <button
                        onClick={() => this.prevAdvisor()}
                        disabled={displayAdvisor.index === 0}
                    >
                        Prev
                    </button>
                    <button
                        onClick={() => this.nextAdvisor()}
                        disabled={
                            displayAdvisor.index === data.advisors.length - displayAdvisorsNum
                        }
                    >
                        Next
                    </button>

                    <h1 className="advisors_title">Advisors</h1>
                    <div
                        className={`advisors_slider active_slide_${displayAdvisor.index}`}
                    >
                        <div
                            className="advisors"
                            style={{
                            transform: `translateX(-${displayAdvisor.index *
                                (100 / displayAdvisorsNum)}%)`
                            }}
                        >
                            {advisorsList.map(advisorInfo => {
                                return (
                                    <div
                                        id={`advisor_${advisorInfo.index}`}
                                        className="advisor"
                                        key={advisorInfo.index}
                                    >
                                    <img
                                        className="advisor_image"
                                        src="https://s3-media2.fl.yelpcdn.com/bphoto/ZmA5A0e_74G1qUZSiqmvHQ/ls.jpg"
                                        alt={advisorInfo.name}
                                    />
                                    <p className="advisor_name">{advisorInfo.name}</p>
                                    <p className="advisor_location">{advisorInfo.location}</p>
                                    <p className="advisor_description">
                                        {advisorInfo.description}
                                    </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Advisors;
