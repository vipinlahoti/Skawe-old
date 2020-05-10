import Skawe from '@skawe';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

class HeadTags extends Component {
  render() {

    const url = !!this.props.url ? this.props.url : 'Skawe';
    const title = !!this.props.title ? this.props.title : 'Skawe';
    const description = !!this.props.description ? this.props.description : 'tagline';

    return (
      <Head>
        <title>{title}</title>

        <meta charSet='utf-8'/>
        <meta name='description' content={description}/>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>

        {/* facebook */}
        <meta property='og:type' content='article'/>
        <meta property='og:url' content={url}/>
        <meta property='og:title' content={title}/>
        <meta property='og:description' content={description}/>

        {/* twitter */}
        <meta name='twitter:card' content='summary'/>
        <meta name='twitter:title' content={title}/>
        <meta name='twitter:description' content={description}/>

        <link rel='canonical' href={url}/>
        <link name='font-face' rel='stylesheet' href='https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:300,400,500,700|Open+Sans:300,400,600|Material+Icons'/>

        {Skawe.headtags.meta.map((tag, index) => <meta key={index} {...tag}/>)}
        {Skawe.headtags.link.map((tag, index) => <link key={index} {...tag}/>)}
        {Skawe.headtags.script.map((tag, index) => <script key={index} {...tag}>{tag.contents}</script>)}
      </Head>
    );
  }
}

HeadTags.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Skawe.registerComponent('HeadTags', HeadTags);
