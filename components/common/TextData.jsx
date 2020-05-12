import Skawe from '@skawe';
import Link from 'next/link';
import React from 'react';

const TextData = ({ siteData }) => {
  return (
    <React.Fragment>
      {siteData}
    </React.Fragment>
  )
}

Skawe.registerComponent('TextData', TextData);
