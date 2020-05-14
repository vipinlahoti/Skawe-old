import Skawe from '@skawe';
import constants from '@constants';
import React, { Component } from 'react';
import axios from 'axios'; 

class Layout extends Component {
  state = {
    salesHeader: null,
    error: null
  }

  salesHeader = async ctx => {
    axios.get(`https://gui.secureserver.net/pcjson/salesheader?plId=${constants.plId}&shopperId=&sid=`)
      .then(item => {
        this.setState({salesHeader: item.data})
      })
  };

  componentDidMount() {
    this.salesHeader()
  }

  render() {
    return (
      <React.Fragment>
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
