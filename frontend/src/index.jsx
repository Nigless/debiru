import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './components/app';

const Styles = createGlobalStyle({
	body: {
		fontFamily: 'roboto',
		lineHeight: 1.5,
	},
});
const mountNode = document.getElementById('app');
ReactDOM.render(
	<>
		<Styles />
		<App />
	</>,
	mountNode
);
