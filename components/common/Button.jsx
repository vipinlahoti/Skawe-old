import Skawe from '@skawe';
import React, { Component } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

class SkaweButton extends Component {

  render() {
    const { variant, type, size, path, icon, children, ...rest } = this.props;
    const btnClass = `btn btn-${variant}`;

    return (
      <React.Fragment>
        {type === 'link' ?
          <Link href={path}>
            <a className={btnClass}>
              {icon ? <Skawe.components.Icon name={icon} /> : null}
              {children}
            </a>
          </Link>
        :
          <Button variant={variant} size={size} {...rest}>
            {icon ? <Skawe.components.Icon name={icon} /> : null}
            {children}
          </Button>
        }
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('Button', SkaweButton);
