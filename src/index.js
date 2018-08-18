import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './components/App';
import { normalize } from './styles';

import registerServiceWorker from './registerServiceWorker';

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Lato');
html {
    font-family: 'Lato', sans-serif;
    color: #debea0;
}
${normalize}
`
render(<App />, document.getElementById('root'));
registerServiceWorker();
