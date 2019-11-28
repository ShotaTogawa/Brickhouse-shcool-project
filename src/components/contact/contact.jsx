import React from "react";
import Form from "./Form.jsx";
import Title from "./Title.jsx";
import Contact_logo from "../../img/blue-logo.png";
import ContactDetails from "./ContactDetails.jsx";

import './Contact.scss';

const Contact = () => {
  return (
    <section className="contact_container">
      <div>
        <Title img={Contact_logo} text="SEND US A MESSAGE" />
        <Form />
      </div>
      <div className="contact_area">
        <Title img={Contact_logo} text="CONTACT US" />
        <h1 className="sub-title">CALL / EMAIL US</h1>
        <ContactDetails
          name="MATT HOFFAR"
          phoneNumber="604 616 1514"
          email="MATT@BRICKHOUSE.VENTURES"
        />
        <ContactDetails
          name="SPENER SMYL"
          phoneNumber="604 785 4229"
          email="SPENCER@BRICKHOUSE.VENTURES"
        />
        <h1 className="sub-title">VISIT US</h1>
        <p>303 570 GRANVILLESTREET VANCOUVER B.C.,V6C 3P1</p>
      </div>
    </section>
  );
};
export default Contact;
