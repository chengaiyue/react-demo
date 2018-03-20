import React from 'react';
import {render} from 'react-dom';
import {default as App} from './app/App';
import './style/index.css';

render(<App />, document.getElementById('app'));