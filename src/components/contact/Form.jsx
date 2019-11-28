import React from "react";

const Form = () => {
  return (
    <form action="https://formspree.io/xpzwwolg" method="POST">
      <input type="email" placeholder="Your mail..." />
      <input type="text" placeholder="Your name..." />
      <textarea type="text" placeholder="Your message..." />
      <button>submit</button>
    </form>
  );
};

export default Form;