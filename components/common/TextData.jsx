import Skawe from '@skawe';
import Link from 'next/link';
import React from 'react';

const TextData = ({ siteData }) => {
  return (
    <div className="text-left text-data" dangerouslySetInnerHTML={{ __html: siteData }}></div>
  )
}

Skawe.registerComponent('TextData', TextData);
