import Skawe from '@skawe';
import React, { Component } from 'react';

class TosLayout extends Component {

  state = {
    TOSData: null
  }

  universalTos = async ctx => {
    const getTosRes = await fetch(
        `https://www.secureserver.net/api/v1/agreements/561121/${this.props.pageId}?marketId=en-IN`
      )
      .then(getTosData => getTosData.json())
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
          : (<Skawe.components.ComponentLoading />) }
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('TosLayout', TosLayout);
