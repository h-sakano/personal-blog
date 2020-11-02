import { render, screen, within } from '@testing-library/react';
import * as React from 'react';
import Pagination from './Pagination';

describe('<Pagination />', () => {
  it('should render just 2 pages', () => {
    render(<Pagination baseUrl="/" itemCount={10} itemPerPage={5} page={1} />);

    expect(
      within(screen.getByTestId('Pagination-nav')).getByText('1'),
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId('Pagination-nav')).getByText('2'),
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId('Pagination-nav')).queryByText('3'),
    ).not.toBeInTheDocument();
  });

  it('should render 2 ellipsises', () => {
    render(<Pagination baseUrl="/" itemCount={35} itemPerPage={5} page={4} />);

    expect(
      within(screen.getByTestId('Pagination-nav')).getAllByText('...', {
        selector: '.md\\:hidden',
      }),
    ).toHaveLength(2);
  });

  it('should render 1 ellipsis before current page', () => {
    render(<Pagination baseUrl="/" itemCount={35} itemPerPage={5} page={5} />);

    expect(
      within(screen.getByTestId('Pagination-nav')).getAllByText('...', {
        selector: '.md\\:hidden',
      }),
    ).toHaveLength(2);
  });

  it('should render 1 ellipsis after current page', () => {
    render(<Pagination baseUrl="/" itemCount={35} itemPerPage={5} page={3} />);

    expect(
      within(screen.getByTestId('Pagination-nav')).getAllByText('...', {
        selector: '.md\\:hidden',
      }),
    ).toHaveLength(2);
  });
});
