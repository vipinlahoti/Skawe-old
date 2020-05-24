import { registerComponent, Components } from 'meteor/vulcan:lib';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class BootstrapButton extends Component {
  render() {
    const { isLink, children, variant, size, path, iconButton, className, ...rest } = this.props;
    const btnClass = `btn btn-${variant} btn-${size} ${className}`;

    return (
      <React.Fragment>
        {isLink ?
          <Link to={{ pathname: path }} className={btnClass} {...rest}>
            {children}
            <Components.Icon name="arrow_forward" />
          </Link>
        :
          <Button variant={variant} size={size} {...rest}>
            {children}
            <Components.Icon name="arrow_forward" />
          </Button>
        }
      </React.Fragment>
    )
  }
}

registerComponent('Button', BootstrapButton);
