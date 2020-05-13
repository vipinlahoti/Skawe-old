import Skawe from '@skawe';
import constants from '@constants';
import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

class Cart extends Component {
  state = {
    cartResult: null,
  }

  getCartList = async ctx => {
    const getTosRes = await fetch(
        `https://www.secureserver.net/api/v1/cart/${constants.plId}`
      )
      .then(getCart => getCart.json())
      .then((item) => {
        console.log(item)
        this.setState({cartResult: [item]})
      })
  };

  componentDidMount() {
    this.getCartList();
  }

  render() {
    const { cartResult } = this.state;
    console.log('cartResult: ', cartResult)
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
