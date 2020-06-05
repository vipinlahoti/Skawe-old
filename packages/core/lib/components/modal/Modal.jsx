import Skawe from 'meteor/skawe:lib';
import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

const BootstrapModal = ({ children, show = false, onHide, title, showCloseButton = true, header, footer, ...rest }) => {
  let headerComponent;
  if (header) {
    headerComponent = <Modal.Header>{header}</Modal.Header>;
  } else if (title) {
    headerComponent = <Modal.Header closeButton={showCloseButton}><Modal.Title>{title}</Modal.Title></Modal.Header>;
  } else {
    headerComponent = <Modal.Header closeButton={showCloseButton}></Modal.Header>;
  }

  const footerComponent = footer ? <Modal.Footer>{footer}</Modal.Footer> : null;
  
  return (
    <Modal show={show} onHide={onHide} {...rest} keyboard={false} backdrop={'static'}>
      {headerComponent}
      <Modal.Body>
        {children}
      </Modal.Body>
      {footerComponent}
    </Modal>
  );
};

BootstrapModal.propTypes = {
  show: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  onHide: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Skawe.registerComponent('Modal', BootstrapModal);
