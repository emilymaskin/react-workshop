import React, { Component } from 'react';
import withFetch from './withFetch';
import { compose, withState, lifecycle } from 'recompose';

export default url => Component =>
  withFetch(url)(({ setData, ...props }) => {
    if (props.loading) {
      return <div>Loading</div>;      
    }
    return <Component {...props} />;
  });
