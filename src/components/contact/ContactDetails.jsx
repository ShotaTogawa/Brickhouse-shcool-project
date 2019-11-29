import React from "react";

const ContactDetails = ({ name, phoneNumber, email }) => {
  return (
    <div className="employee_details">
      <p className="employee_name">{name}</p>
      <div className="employee_address">
        <p>{phoneNumber}</p>
        <span>|</span>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default ContactDetails;
