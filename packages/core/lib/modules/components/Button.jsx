import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class SkaweButton extends Component {

  render() {
    const { type, variant, size, path, icon, children, ...rest } = this.props;
    const btnClass = `btn btn-${variant} btn-${size}`;

    return (
      <React.Fragment>
        {type === 'link' ?
          <Link to={{ pathname: path }} className={btnClass}>
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
