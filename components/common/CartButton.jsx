import Skawe from '@skawe';
import constants from '@constants';
import Link from 'next/link';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios'; 

class CartButton extends Component {

  getDomainList = async postData => {
    axios.post(`https://www.secureserver.net/api/v1/cart/${constants.plId}`, postData)
      .then(res => {
        alert(res);
      })
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
    return (
      <Button variant="secondary" size="small" onClick={this.handleSubmit}>
        Add to Cart
      </Button>
    )
  }
}

Skawe.registerComponent('CartButton', CartButton);
