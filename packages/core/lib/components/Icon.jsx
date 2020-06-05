import Skawe from 'meteor/skawe:lib';
import React from 'react';

const Icon = ({ name, iconClass }) => {
  const icons = Skawe.utils.icons;
  const iconCode = !!icons[name] ? icons[name] : name;
  iconClass = (typeof iconClass === 'string') ? ' ' + iconClass : '';
  const c = 'material-icons icon' + ' icon-' + name + iconClass;
  return <i className={c} aria-hidden="true">{iconCode}</i>;
}

Skawe.registerComponent('Icon', Icon);
