import nightOwl from '@theme-ui/prism/presets/night-owl';

export default {
  colors: {
    primary: '#276ebd',
    secondary: '#619fe4',
    muted: '#888',
    text: '#222',
    background: '#fff',
  },
  fonts: {
    body:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    heading:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    monospace: 'menlo, monospace',
  },
  styles: {
    pre: {
      ...nightOwl,
      overflowX: 'scroll',
      p: 3,
    },
  },
  header: {
    alignItems: 'baseline',
    bg: 'primary',
    color: 'background',
    display: 'flex',
    flexWrap: 'wrap',
    fontFamily: 'heading',
    justifyContent: 'center',
    paddingBottom: 4,
    paddingTop: 3,
    px: `5vw`,
    textAlign: 'center',
    '@media (min-width: 700px)': {
      px: `calc((100vw - 580px) / 2)`,
    },
    img: {
      maxWidth: 60,
    },
    a: {
      color: 'background',
      fontSize: 6,
      fontWeight: 'bold',
      mx: 2,
      textDecoration: 'none',
      ':first-of-type': {
        ml: 0,
      },
      ':last-of-type': {
        mr: 0,
      },
      ':focus': {
        outline: t => `3px solid ${t.colors.background}`,
        outlineOffset: 3,
      },
    },
  },
  content: {
    backgroundColor: 'background',
    color: 'text',
    fontFamily: 'body',
    fontSize: 18,
    mx: 'auto',
    my: 5,
    maxWidth: '90vw',
    width: 580,
  },
  footer: {
    bg: 'secondary',
    color: 'text',
    fontFamily: 'body',
    fontSize: 14,
    px: '5vw',
    py: 2,
    textAlign: 'center',
    '@media (min-width: 700px)': {
      px: `calc((100vw - 580px) / 2)`,
    },
    a: {
      color: 'white',
    },
  },
  button: {
    primary: {
      bg: 'primary',
      border: t => `2px solid ${t.colors.primary}`,
      borderRadius: 6,
      color: 'background',
      cursor: 'pointer',
      fontSize: 17,
      fontWeight: 300,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      transition: '250ms all linear',
      ':focus,:hover': {
        borderColor: 'text',
      },
    },
    hollow: {
      alignSelf: 'flex-start',
      bg: 'transparent',
      border: t => `2px solid ${t.colors.background}`,
      borderRadius: 6,
      color: 'background',
      cursor: 'pointer',
      fontSize: 17,
      fontWeight: 300,
      letterSpacing: '0.2em',
      ml: 10,
      mt: 29,
      textTransform: 'uppercase',
      '@media (min-width: 450px)': {
        ml: 'auto',
      },
      ':focus,:hover': {
        bg: 'background',
        color: 'primary',
      },
    },
  },
  'react-live': {
    border: t => `1px solid ${t.colors.muted}`,
    p: 4,
  },
  'prism-highlight': {
    p: 2,
  },
};
