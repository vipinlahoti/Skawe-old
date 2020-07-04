import Skawe from 'meteor/skawe:lib';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ModalTrigger extends PureComponent {
  state = {
    modalIsOpen: this.props.modalIsOpen !== undefined ? this.props.modalIsOpen : false,
  }

  clickHandler = (e) => {
    e.preventDefault();
    if (this.props.onClick) {
      this.props.onClick();
    }
    this.openModal();
  }

  openModal = () => {
    this.props.openCallback && this.props.openCallback();
    this.setState({ modalIsOpen: true });
    if (this.props.showModal) this.props.showModal(true);
  }

  closeModal = () => {
    this.props.closeCallback && this.props.closeCallback();
    this.setState({ modalIsOpen: false });
    if (this.props.showModal) this.props.showModal(false);
  }

  render() {
    const {
      trigger,
      component,
      children,
      label,
      className,
      dialogClassName,
      title,
      modalProps,
      header,
      footer,
      modalIsOpen
    } = this.props;

    let triggerComponent = trigger || component;
    triggerComponent = triggerComponent ? (
      <span onClick={this.clickHandler}>{triggerComponent}</span>
    ) : (
      <a href="javascript:void(0)" onClick={this.clickHandler}>
        {label}
      </a>
    );

    const modalOpen = 
        modalIsOpen !== undefined
      ? modalIsOpen
      : this.state.modalIsOpen

    const childrenComponent = React.cloneElement(children);
    const headerComponent = header && React.cloneElement(header, { closeModal: this.closeModal });
    const footerComponent = footer && React.cloneElement(footer, { closeModal: this.closeModal });

    return (
      <div className="modal-trigger">
        {triggerComponent}
        <Skawe.components.Modal
          className={className}
          show={modalOpen}
          onHide={this.closeModal}
          dialogClassName={dialogClassName}
          title={title}
          header={headerComponent}
          footer={footerComponent}
          {...modalProps}
        >
          {childrenComponent}
        </Skawe.components.Modal>
      </div>
    );
  }
}

ModalTrigger.propTypes = {
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  component: PropTypes.object, // keep for backwards compatibility
  trigger: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClick: PropTypes.func,
};

Skawe.registerComponent('ModalTrigger', ModalTrigger);
