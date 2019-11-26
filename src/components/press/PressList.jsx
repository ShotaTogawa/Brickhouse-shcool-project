import React, { Component } from "react";
import Press from "./Press";
import "./PressList.scss";

class PressList extends Component {
  state = {
    presses: [
      {
        id: 1,
        category: "Invest",
        date: "week ago",
        title: "Nemo enim ipsam, Tempor incididunt",
        body:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLgb68i4i-SdxNtSX6kBDpKVW3XEM2JQiRMKyu-ggRW8qByj-g",
        avatar:
          "https://s3-media2.fl.yelpcdn.com/bphoto/ZmA5A0e_74G1qUZSiqmvHQ/ls.jpg",
        author: "Steave Kim",
        company: "CICCC"
      },
      {
        id: 2,
        category: "Invest",
        date: "week ago",
        title: "Nemo enim ipsam, Tempor incididunt",
        body:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLgb68i4i-SdxNtSX6kBDpKVW3XEM2JQiRMKyu-ggRW8qByj-g",
        avatar:
          "https://s3-media2.fl.yelpcdn.com/bphoto/ZmA5A0e_74G1qUZSiqmvHQ/ls.jpg",
        author: "Steave Kim",
        company: "CICCC"
      },
      {
        id: 3,
        category: "Invest",
        date: "week ago",
        title: "Nemo enim ipsam, Tempor incididunt",
        body:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLgb68i4i-SdxNtSX6kBDpKVW3XEM2JQiRMKyu-ggRW8qByj-g",
        avatar:
          "https://s3-media2.fl.yelpcdn.com/bphoto/ZmA5A0e_74G1qUZSiqmvHQ/ls.jpg",
        author: "Steave Kim",
        company: "CICCC"
      },
      {
        id: 4,
        category: "Invest",
        date: "week ago",
        title: "Nemo enim ipsam, Tempor incididunt",
        body:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. ",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLgb68i4i-SdxNtSX6kBDpKVW3XEM2JQiRMKyu-ggRW8qByj-g",
        avatar:
          "https://s3-media2.fl.yelpcdn.com/bphoto/ZmA5A0e_74G1qUZSiqmvHQ/ls.jpg",
        author: "Steave Kim",
        company: "CICCC"
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
      <section id="press" className="press_container">
        <div className="press_heading">PRESS</div>
        <div className="press_card_list">{this.renderPress()}</div>
      </section>
    );
  }
}

export default PressList;
