/** @jsx jsx **/
// 3.) >> Renders common theme components and scaffold >>

import {Fragment} from 'react';

import {jsx} from 'theme-ui';
import {Global} from '@emotion/core';

const ThemeLayout = ({children}) => (
	<Fragment>
		<Global styles={{body: {margin: 0}}} />
		<header
			sx={{bg: 'primary', color: 'background', fontFamily: 'heading', p: 3}}
		>
			GATSBY THEME FREE4M DOCS
		</header>
		<main sx={{mx: 'auto', maxWidth: 650, width: '90vw'}}>{children}</main>
	</Fragment>
);

export default ThemeLayout;
