import { roboto as theme } from '@theme-ui/presets';

const buttonDefaults = {
  border: t => `2px solid ${t.colors.primary}`,
  borderRadius: 10,
  display: 'inline-block',
  fontFamily: 'heading',
  fontWeight: 'bold',
  p: 3,
  textDecoration: 'none',
  transition: '200ms linear background',
  ':focus': {
    outline: t => `2px solid ${t.colors.primary}`,
    outlineOffset: '2px',
  },
};

export default {
  ...theme,
  colors: {
    ...theme.colors,
    muted: '#999',
  },
  button: {
    primary: {
      ...buttonDefaults,
      bg: 'primary',
      color: 'background',
      ':focus': {
        ...buttonDefaults[':focus'],
        bg: 'secondary',
      },
      ':hover': {
        bg: 'secondary',
      },
    },
    secondary: {
      ...buttonDefaults,
      bg: 'background',
      color: 'primary',
      ':focus': {
        ...buttonDefaults[':focus'],
        bg: 'highlight',
      },
      ':hover': {
        bg: 'highlight',
      },
    },
  },
};
