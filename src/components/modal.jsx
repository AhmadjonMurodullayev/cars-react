import React, { useState, useEffect } from "react";
import { Modal,ModalBody, ModalHeader, ModalFooter} from "react-bootstrap";
import { nanoid } from "nanoid";
const GlobalModal = (props) => {
  const { open, toggle } = props;
};

return (
  <Modal isOpen={open} toggle={toggle} className="modal-dialog-centered">
    <ModalHeader>
      <h2> Add car</h2>
    </ModalHeader>
    <ModalBody>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="name" onChange={handleChange} className="form-control my-2" />
          </form>
        </div>
      </div>
    </ModalBody>
    <ModalFooter>
    </ModalFooter>
  </Modal>
);

export default GlobalModal;
