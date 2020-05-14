import Skawe from '@skawe';
import constants from '@constants';
import React, { Component } from 'react';
import axios from 'axios'; 
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

class Cart extends Component {
  state = {
    cartResult: null,
  }

  getCartList = async ctx => {
    axios.get(`${constants.host}/cart/${constants.plId}`)
      .then(getCart => {
        this.setState({cartResult: getCart.data})
      })
  };

  componentDidMount() {
    this.getCartList();
  }

  render() {
    const { cartResult } = this.state;
    console.log(cartResult)
    return (
      <Skawe.components.Layout>
        <Skawe.components.HeadTags title="Cart" description="Cart Page" />
        
        <Skawe.components.InnerBanner title="Cart" />

        <div className="section">
          <Container>
            <Row className="center-xs">
              <Col sm={12}>
                {cartResult
                  ?
                    (
                      <React.Fragment>
                        <Skawe.components.Icon name="shopping_cart" iconClass="font-lg" />
                        <p className="lead text-mute">There are no items in your basket.</p>
                      </React.Fragment>
                    )
                  : (<Skawe.components.ComponentLoading />) }
              </Col>
            </Row>
          </Container>
        </div>
      </Skawe.components.Layout>
    )
  }
}

export default Cart;
