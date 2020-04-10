/** @jsx jsx **/
// 3.) >> Renders common theme components and scaffold >>

import {Fragment} from 'react';
import {jsx} from 'theme-ui';

const ThemeLayout = ({children}) => (
	<Fragment>
		<header>GATSBY THEME FREE4M DOCS</header>
		<main>{children}</main>
	</Fragment>
);

export default ThemeLayout;
