import React, { Component } from 'react';
import { compose } from 'recompose';
import withFetch from './withFetch';
import withLoading from './withLoading';

const Planets = ({ data }) => (
  <div>
    {data.map(planet => <div key={planet.url}>{planet.name}</div>)}
  </div>
);

const enhance = compose(
  withLoading('https://swapi.co/api/planets/')
);

export default enhance(Planets);
