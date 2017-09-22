import React from 'react';
import {render} from 'react-dom';

import Router from './config/Router';
import { HashRouter } from 'react-router-dom';

render ((<HashRouter><Router /></HashRouter>),document.getElementById('app'));