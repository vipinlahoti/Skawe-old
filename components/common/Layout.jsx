import Skawe from '@skawe';
import React, { Component } from 'react';
// import dataFetcher from '../../context/api';

class Layout extends Component {

  state = {
    salesHeader: null,
    error: null
  }

  salesHeader = async () => {
    try {
      const result = await fetch(
        'https://gui.secureserver.net/pcjson/salesheader?plId=561121&shopperId=&sid='
      )
      .then(getSalesHeaderData => getSalesHeaderData.json())
      .then((item) => {
        this.setState({salesHeader: item})
      })
    } catch (error) {
      this.setState({error: error})
    };
  };

  componentDidMount() {
    this.salesHeader()
  }

  render() {
    return (
      <React.Fragment>
      <Skawe.components.HeadTags />

      {this.state.salesHeader ?
        (
          <React.Fragment>
            <Skawe.components.Header {...this.state.salesHeader} />
            {this.props.children}
            <Skawe.components.MiniFooter variant="bg-primary" className="center-xs" title={`Need help? Call our award-winning support team ${this.state.salesHeader.supportphone.hours} at ${this.state.salesHeader.supportphone.number}.`} {...this.state.salesHeader} />
            <Skawe.components.Footer {...this.state.salesHeader} />
          </React.Fragment>
        )
        : (<Skawe.components.Loading />)
      }

      </React.Fragment>
    )
  }
}

Skawe.registerComponent('Layout', Layout);

// salesheader: https://gui.secureserver.net/pcjson/salesheader?plId=561121&shopperId=&sid=

// Login: https://sso.secureserver.net/v1/api/idp/login?plid=561121&prog_id=561121&realm=idp&path=%2Fproducts&app=account
// {
//    "username":"276082112",
//    "password":"Vipin@123",
//    "remember_me":false,
//    "plid":561121,
//    "API_HOST":"secureserver.net",
//    "captcha_code":"",
//    "captcha_type":"recaptcha_v2_invisible"
// }
