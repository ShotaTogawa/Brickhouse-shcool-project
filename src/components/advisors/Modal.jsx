import React from 'react';
import closeButtonImg from '../../img/icons8-delete-64.png'

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button className="closeButton" onClick={handleClose}>
              <img src={closeButtonImg} alt="close_button" />
          </button>
        </section>
      </div>
    );
  };

export default Modal;