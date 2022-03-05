import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { RecoilRoot } from 'recoil';

import 'rsuite/dist/rsuite.min.css';
import 'semantic-ui-css/semantic.min.css';
import './styles/global.scss';

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById('root')
);
