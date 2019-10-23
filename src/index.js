import Content from './content/en.json';
import { IntlProvider } from 'react-intl';
import GhoulsApp from './GhoulsApp';
import React from 'react';
import ReactDOM from 'react-dom';

const app = document.getElementById('ghouls-goblins-hof');

if (app) {
    ReactDOM.render(
        <IntlProvider
            locale="en"
            messages={ Content }
        >
            <GhoulsApp />
        </IntlProvider>
    , app);
}
