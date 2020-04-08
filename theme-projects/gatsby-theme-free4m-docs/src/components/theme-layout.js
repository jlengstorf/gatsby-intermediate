// 3.) >> Renders common theme components and scaffold >>

import React from 'react';

const ThemeLayout = ({children}) => (
	<>
		<header>GATSBY THEME FREE4M DOCS</header>
		<main>{children}</main>
	</>
);

export default ThemeLayout;
