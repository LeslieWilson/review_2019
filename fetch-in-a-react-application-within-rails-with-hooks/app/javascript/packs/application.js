import React from 'react';
import ReactDOM from 'react-dom';
import Fortune from '../components/Fortune';

$(function() {
  ReactDOM.render(
    <Fortune />,
    document.getElementById('app')
  );
});
