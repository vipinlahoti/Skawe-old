import Skawe from '@skawe';
import React, { Component } from 'react';

class TosLayout extends Component {

  state = {
    TOSData: null,
    error: null
  }

  universalTos = async () => {
    const getTosRes = await fetch(
        `https://www.secureserver.net/api/v1/agreements/561121/${this.props.pageId}?marketId=en-IN`
      )
      .then(getSalesHeaderData => getSalesHeaderData.json())
      .then((item) => {
        this.setState({TOSData: [item.body]})
      })
  };

  componentDidMount() {
    this.universalTos();
  }

  render() {
    const TOSData = this.state.TOSData;

    return (
      <React.Fragment>
        {TOSData ?
          TOSData.map((item, index) => <Skawe.components.TextData key={index} siteData={item} />)
          : (<Skawe.components.Loading />) }
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('TosLayout', TosLayout);
