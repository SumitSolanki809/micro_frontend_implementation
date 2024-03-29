import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Authenticationpage from './page/Authenticationpage' 

function domElementGetter() {
  return document.getElementById("authentication")
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Authenticationpage,
  domElementGetter,
})

export const bootstrap = [
  reactLifecycles.bootstrap,
];

export const mount = [
  reactLifecycles.mount,
];

export const unmount = [
  reactLifecycles.unmount,
];