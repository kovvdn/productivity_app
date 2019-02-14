import React from "react";

import Modal from "react-bootstrap/Modal";
const _Modal = ({ show, close, children }) => (
  <Modal show={show} onHide={close} size="lg">
    <Modal.Header closeButton>
      <Modal.Title>Настройки</Modal.Title>
    </Modal.Header>
    <Modal.Body>{children}</Modal.Body>
    <Modal.Footer />
  </Modal>
);

export default _Modal;
