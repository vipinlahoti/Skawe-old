import Skawe from '@skawe';
import constants from '@constants';
import Link from 'next/link';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class CartButton extends Component {

  getDomainList = async postData => {
    const getTosRes = await fetch(`https://www.secureserver.net/api/v1/cart/${constants.plId}`, {
      method: 'POST',
      body: JSON.stringify(postData)
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const addToCart = {
      items: [
        {
          id: this.props.id,
          domain: this.props.domain
        }
      ],
      skipCrossSell: this.props.skipCrossSell
    };

    this.getDomainList(addToCart);

    console.log('addToCart: ', addToCart);
  }

  render() {
    const { id, domain, skipCrossSell, type } = this.props;
    return (
      <Button variant="secondary" size="small" onClick={this.handleSubmit}>
        Add to Cart
      </Button>
    )
  }
}

Skawe.registerComponent('CartButton', CartButton);
