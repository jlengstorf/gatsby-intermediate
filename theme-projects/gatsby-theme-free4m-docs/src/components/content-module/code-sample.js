/** @jsx jsx **/
import {jsx} from 'theme-ui';
import {preToCodeBlock} from 'mdx-utils';
import Highlight, {defaultProps} from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula'; // 2.) /shadesOfPurple 3.) /nightOwl

import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live';
import scope from '../../-editing-scope';

const CodeSample = (props) => {
	const codeProps = preToCodeBlock(props); // NOTE: << Allows smart syntax awarness

	// A.) Just a text block
	if (!codeProps) {
		return <pre {...props} />;
	}

	const {codeString, language} = codeProps;
	const codeSampleIsReactlive = codeProps['react-live'];

	return codeSampleIsReactlive ? (
		// B.) CODE SAMPLE is configured for live edit
		<LiveProvider code={codeString} scope={scope} theme={theme}>
			<LiveEditor />
			<LiveError />

			<LivePreview
				sx={{
					border: (theme) => `1px solid ${theme.colors.muted}`,
					p: 4,
					'div :first-of-type': {
						mt: 0,
					},
					variant: 'react-live',
				}}
			/>
		</LiveProvider>
	) : (
		// C.) PRISM CODE SAMPLE DISPLAY
		<Highlight
			{...defaultProps}
			code={codeString}
			language={language}
			theme={theme}
		>
			{({className, style, tokens, getLineProps, getTokenProps}) => (
				<pre
					className={className}
					style={style}
					sx={{
						p: 2,
						overflowX: 'scroll',
						variant: 'prism-highlight',
					}}
				>
					{tokens.map((line, i) => (
						// TEXT LINE
						// - MUST USE "line"
						<div key={i} {...getLineProps({line, key: i})}>
							{line.map((token, key) => (
								// CHARACTER / TOKENS
								// - MUST USE "token"
								<span key={i} {...getTokenProps({token, key})} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	);
};

export default CodeSample;
