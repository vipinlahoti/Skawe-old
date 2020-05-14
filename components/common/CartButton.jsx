import Skawe from '@skawe';
import constants from '@constants';
import Link from 'next/link';
import React, { Component } from 'react';
import axios from 'axios'; 
import Button from 'react-bootstrap/Button';

class CartButton extends Component {

  getDomainList = async postData => {
    axios.post(`${constants.host}/cart/${constants.plId}`, postData)
      .then(res => {
        console.log('Added to Cart Response: ', res);
      })

    // www.secureserver.net/api/dpp/searchresultscart/13?applyBP=1&domain=skaweewaks.com&plid=561121&domainstatus=available

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
    console.log('AddToCart: ', addToCart);
  }

  render() {
    return (
      <Button variant={this.props.variant} size="small" onClick={this.handleSubmit}>
        Add to Cart
      </Button>
    )
  }
}

Skawe.registerComponent('CartButton', CartButton);
