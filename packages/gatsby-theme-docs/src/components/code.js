/** @jsx jsx */

import { jsx } from 'theme-ui';
import { preToCodeBlock } from 'mdx-utils';
import Higlight, { defaultProps } from 'prism-react-renderer';

import theme from 'prism-react-renderer/themes/nightOwl';

const Code = props => {
  const codeProps = preToCodeBlock(props);

  if (!codeProps) {
    return <pre {...props} />;
  }

  const { codeString, language } = codeProps;

  return (
    <Higlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={style}
          sx={{ p: 2, overflow: 'scroll', variant: 'prism-highlight' }}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Higlight>
  );
};

export default Code;
