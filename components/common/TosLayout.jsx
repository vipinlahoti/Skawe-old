import Skawe from '@skawe';
import constants from '@constants';
import React, { Component } from 'react';
import axios from 'axios'; 

class TosLayout extends Component {

  state = {
    TOSData: null
  }

  universalTos = async ctx => {
    axios.get(`${constants.host}/agreements/${constants.plId}/${this.props.pageId}?marketId=${constants.marketId}`)
      .then(getTosData => {
        const setTosData = getTosData.data.body
        this.setState({TOSData: [setTosData]})
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
