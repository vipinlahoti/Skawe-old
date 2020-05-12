import Skawe from '@skawe';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { Children } from 'react';

const NavLink = ({ children, activeClassName, ...props }) => {
  const { pathname } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''

  const className =
    pathname === props.href
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

NavLink.propTypes = {
  activeClassName: PropTypes.string,
}

Skawe.registerComponent('NavLink', NavLink);
