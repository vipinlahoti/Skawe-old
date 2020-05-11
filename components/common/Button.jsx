import Skawe from '@skawe';
import React, { Component } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

class SkaweButton extends Component {

  render() {
    const { variant, type, size, path, icon, children, ...rest } = this.props;
    const btnClass = `btn btn-${variant} btn-${size}`;

    return (
      <React.Fragment>
        {type === 'link' ?
          <Link href={path}>
            <a className={btnClass}>
              {icon ? <Skawe.components.Icon name={icon} /> : null}
              {children}
              {!icon ? <Skawe.components.Icon name="arrow_forward" /> : null}
            </a>
          </Link>
        :
          <Button variant={variant} size={size} {...rest}>
            {icon ? <Skawe.components.Icon name={icon} /> : null}
            {children}
            {!icon ? <Skawe.components.Icon name="arrow_forward" /> : null}
          </Button>
        }
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('Button', SkaweButton);
