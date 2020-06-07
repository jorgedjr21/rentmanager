import React from 'react';
import ReactDom from 'react-dom';
import {Button} from 'react-bootstrap'
import 'bootswatch/dist/materia/bootstrap.min.css'
import './index.css'

import App from './App';

ReactDom.render(
  <>
    <App />
  </>
  , document.getElementById('root') );