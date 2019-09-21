import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import MusicPlayer from './containers/MusicPlayer'
import data from './constants/data'




ReactDOM.render(
  <MusicPlayer data={data} />,
  document.getElementById('app')
);
