import Skawe from '@skawe';
import Link from 'next/link';
import React from 'react';

const Logo = ({ siteTitle }) => {
  return (
    <Link href="/">
      <a className="navbar-brand">
        {siteTitle}
      </a>
    </Link>
  )
}

Skawe.registerComponent('Logo', Logo);
