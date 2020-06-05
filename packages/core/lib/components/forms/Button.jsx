import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class SkaweButton extends Component {

  render() {
    const { isLink, variant, size, path, icon, className, children, ...rest } = this.props;
    const btnVariant = variant ? `btn-${variant}` : '';
    const btnSize = size ? `btn-${size}` : '';
    const btnClassName = className ? `${className}` : '';
    const linkClass = `btn ${btnVariant} ${btnSize} ${btnClassName}`;

    return (
      <React.Fragment>
        {isLink ?
          <Link to={{ pathname: path }} className={linkClass} {...rest}>
            {children}
            <Skawe.components.Icon name="arrow_forward" />
          </Link>
        :
          <Button variant={variant} size={size} className={className} {...rest}>
            {children}
            <Skawe.components.Icon name="arrow_forward" />
          </Button>
        }
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('Button', SkaweButton);
