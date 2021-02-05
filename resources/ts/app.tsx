/**
 * External dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { InertiaApp } from '@inertiajs/inertia-react';

const app = document.getElementById('app');

ReactDOM.render(
    <InertiaApp
        initialPage={JSON.parse(app?.dataset.page || '')}
        resolveComponent={(name) => import(`./pages/${name}`).then((module) => module.default)}
    />,
    app
);
