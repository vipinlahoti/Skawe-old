import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class SkaweButton extends Component {

  render() {
    const { isLink, variant, size, path, icon, className, children, ...rest } = this.props;
    const btnClass = `btn btn-${variant} btn-${size} ${className}`;

    return (
      <React.Fragment>
        {isLink ?
          <Link to={{ pathname: path }} className={btnClass} {...rest}>
            {children}
            <Skawe.components.Icon name="arrow_forward" />
          </Link>
        :
          <Button variant={variant} size={size} {...rest}>
            {children}
            <Skawe.components.Icon name="arrow_forward" />
          </Button>
        }
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('Button', SkaweButton);
