import React, { Component } from "react";
import Press from "./Press";

class PressList extends Component {
  state = {
    presses: [
      {
        id: 1,
        category: "Invest",
        title: "Nemo enim ipsam, Tempor incididunt",
        body:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ",
        image: "",
        avatar: "",
        author: "",
        company: ""
      },
      {
        id: 2,
        category: "Invest",
        title: "Nemo enim ipsam, Tempor incididunt",
        body:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ",
        image: "",
        avatar: "",
        author: "",
        company: ""
      },
      {
        id: 3,
        category: "Invest",
        title: "Nemo enim ipsam, Tempor incididunt",
        body:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ",
        image: "",
        avatar: "",
        author: "",
        company: ""
      },
      {
        id: 4,
        category: "Invest",
        title: "Nemo enim ipsam, Tempor incididunt",
        body:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ",
        image: "",
        avatar: "",
        author: "",
        company: ""
      }
    ]
  };

  renderPress() {
    return this.state.presses.map(press => {
      return <Press key={press.id} press={press} />;
    });
  }

  render() {
    return (
      <section>
        <h2 style={{ textAlign: "center" }}>Press</h2>
        <div className="Container">{this.renderPress()}</div>
      </section>
    );
  }
}

export default PressList;
