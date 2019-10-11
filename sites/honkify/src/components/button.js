/** @jsx jsx */
import { jsx } from 'theme-ui';

const Button = ({ text = 'Submit', type = 'submit', ...props }) => (
  <button type={type} sx={{ variant: 'button.primary' }} {...props}>
    {text}
  </button>
);

export default Button;
