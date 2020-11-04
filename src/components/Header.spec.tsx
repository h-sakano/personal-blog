import { render } from '@testing-library/react';
import * as React from 'react';
import Header from './Header';

describe('<Header />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Header description="概要" siteTitle="タイトル" />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
