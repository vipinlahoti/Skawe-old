import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import React from 'react';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';

const Layout = ({currentUser, children }) =>

  <div className={classNames('wrapper')} id="wrapper">

    <Helmet>
      <link name='font-face' rel='stylesheet' href='https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Nunito:300,400,500,700|Open+Sans:300,400,600|Material+Icons'/>
    </Helmet>
   
    <Components.HeadTags />

    {currentUser ? <Components.UsersProfileCheck currentUser={currentUser} documentId={currentUser._id} /> : null}

    <div className="toast__wrapper">
      <Components.FlashMessages />
    </div>

    <Components.Header />
    {children}
    <Components.Footer />
  
  </div>

registerComponent({ name: 'Layout', component: Layout, hocs: [withCurrentUser] });
