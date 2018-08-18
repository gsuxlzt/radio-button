import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './components/App';
import { normalize } from './styles';

import registerServiceWorker from './registerServiceWorker';

injectGlobal`
${normalize}
`
render(<App />, document.getElementById('root'));
registerServiceWorker();
