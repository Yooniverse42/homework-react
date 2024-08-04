import { exact, oneOf, string } from 'prop-types';

export const GosimType = exact({
  id: string,
  name: oneOf(['confi', 'enjoy', 'monday', 'nono', 'possible', 'today', 'zero']),
  photo: string.isRequired,
  desc: string
});
