import { render, screen } from '@testing-library/react';
import format from 'date-fns/format';
import * as React from 'react';
import PublishedAt from './PublishedAt';

describe('<PublishedAt />', () => {
  it('should render correctly', () => {
    const now = new Date();
    render(<PublishedAt publishedAt={now.toISOString()} />);

    expect(screen.getByText(format(now, 'yyyy年MM月dd日'))).toBeInTheDocument();
  });

  it('should render correctly with publishedAtOnHatena', () => {
    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    render(
      <PublishedAt
        publishedAt={now.toISOString()}
        publishedAtOnHatena={tomorrow.toISOString()}
      />,
    );

    expect(
      screen.queryByText(format(now, 'yyyy年MM月dd日')),
    ).not.toBeInTheDocument();
    expect(
      screen.getByText(format(tomorrow, 'yyyy年MM月dd日')),
    ).toBeInTheDocument();
  });
});
