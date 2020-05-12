import Skawe from '@skawe';
import React, { Component } from 'react';

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
            <Skawe.components.MiniFooter variant="bg-primary" className="center-xs" title={`Need help? Call our award-winning support team ${this.state.salesHeader.supportphone.hours} at ${this.state.salesHeader.supportphone.number}.`} />
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
