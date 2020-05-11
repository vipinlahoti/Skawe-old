import Skawe from '@skawe';
import Link from 'next/link';
import React from 'react';
import { Form, Button } from 'react-bootstrap';

const DomainSearch = ({ title, placeholder, domainLinks }) => {
  return (
    <div className="text-left">
      {title ? (
        <h3 className="title-3">
          {title}
        </h3>
      ) : null}
      <p className="lead">With Privacy Protection and lots more.</p>
      
      <Form className="domain-search">
        <Form.Control type="text" placeholder={placeholder} />
        
        <Button type="submit" variant="black-fill">
          <Skawe.components.Icon name="search" />
        </Button>
      </Form>

      {domainLinks ?
        (<p className="domain-links mt-xs">
          <Link href="/domain-transfer">
            <a>Transfer your domain to us.</a>
          </Link>
        </p>)
      : null }
    </div>
  )
}

Skawe.registerComponent('DomainSearch', DomainSearch);
