import { render } from '@testing-library/react';
import * as React from 'react';
import SourceCode from './SourceCode';

describe('<SourceCode />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<SourceCode />);

    expect(asFragment()).toMatchSnapshot();
  });
});
