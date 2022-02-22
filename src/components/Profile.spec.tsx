import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import * as React from 'react';
import Profile from './Profile';

beforeEach(() => {
  (useStaticQuery as jest.Mock<any, any>).mockImplementationOnce(() => ({
    avatar: {
      childImageSharp: {
        gatsbyImageData: {
          layout: 'fixed',
          backgroundColor: '#e8e8e8',
          images: {
            fallback: {
              src: '/static/7f05c1d57888914478fcf2c29a77ba96/1c9ce/profile.png',
              srcSet:
                '/static/7f05c1d57888914478fcf2c29a77ba96/1c9ce/profile.png 64w',
              sizes: '64px',
            },
            sources: [
              {
                srcSet:
                  '/static/7f05c1d57888914478fcf2c29a77ba96/8257c/profile.webp 64w',
                type: 'image/webp',
                sizes: '64px',
              },
            ],
          },
          width: 64,
          height: 64,
        },
      },
    },
    site: {
      siteMetadata: {
        title: 'サイトタイトル',
        description: 'サイト概要',
      },
    },
  }));
});

describe('<Layout />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Profile />);

    expect(asFragment()).toMatchSnapshot();
  });
});
