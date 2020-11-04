import { render, screen } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import * as React from 'react';
import Layout from './Layout';

beforeEach(() => {
  (useStaticQuery as jest.Mock<any, any>).mockImplementation(() => ({
    avatar: {
      childImageSharp: {
        fixed: {
          base64:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAAErUlEQVQ4yzXPe1SSdxgH8Pe/7ZxVJzs6p9bUpUddW7Us3VEH6VJzaSlhSXa6aTpRQanAnFOnzmwy07yntYla5qVIpdREJS9TAgQiLyCFmIrAe8Vrs9NerD3n+9/vfH7f5wEwSG+C8RhMsNEcxIhBhkUMXsbAGZVC1M/vaWs2zmtXVhZhSI/iryiMIBAeFIUBHG9kATN7g/kvxIhCupqCbGpogIebM+FrJ9qJYMlw/8qKCYYM6P8YwxAAhRZQUIeCCxteDxvn/11bLMlN97D/nEz08v7G9RjR23ePW9KF0whsQBDwg0QQGMNQAGeIGesQow4yzOFZwownAom7t1ud9PMJ8/U57PW9v6c7JSRwYU67aMJgGNzYGTFjWD8HmTOLX76+alpfM6HgLHHfLrutn7nYWXvucjnmRyR47Ccd/lEhFeEAhox47UcM6t4Y5qYRw5xC+vzXtNT4+PhTERR3ZwcHq63bLTbvsLRwcfjS+4C734Hde/fs5ff2vl1bgSC82TzAwptXc9OqRUj3sLF+05ZttnYOtjt2ujrahx1wOui2w85ii5utpb/nXrI/wcLS5lFb+/r6WxDEN8ebMWBeMzmrHkd0mu4n3J1OrjudXR0cnQ4dJuUnns2jEKgBHgUxJwWcUiYzdcs263sN99+9W/+Azc2z6pdalcIwoxrs7bCyttm336usrFb2wpiRfIUdeTAnjNjLvjoq6O8QG64V1/H7BlZXzWt/xDNK+fSkbEEz+by/m05nCYWvRaJ5fvfEpcvsqKP+rCDPexms8iZxTmVffadKpobhDflhAM346OsxiVYpm1TIpKPawSFta7u89ZGwqKiRkVoUn5CaklWVV93DzOZklXU/FKgw0yIEgnjt8vIyoFY8VytEmgnJmHyiuXkoM/v2A568+YGwitNz6eqNzMJmdt0wLbWUymAz87m8kXkdaIIgo16vVyqVgEo+opSNqF+KWu63/83potILblY9buHJy2r4fxQ15lZ2MnProhJz6aklydm1dY/lwkkQQZHcvOvB5FPAuGRwTDw49UJUUVabllYYFZMeS80srmyt4PTdqGi/Xt11kX7tAi2PkXk76kp5fddUv2weRuGYuIR9PgGAQih4MSIYl/zzuG2gqLgpPa8uMCCcFv9LQSk35bcq8umksONRjLQS1vUGUiSj8emkdMqgnX1DpSXbOLgA0qEePKNDPQMCWSt3mPNA4h8UGUgMSqBlkiPpAYHk0LAzcUk5fmE/exNC0ot4fKlO+VqdkMTYvM0GkAzwRc+eyoZ779Y0sgtbCurE7j+QCD4/kSh0L+8jvr5HIyITo2nZ3/kEu35LKGDfESumZSo1jXH5k083AcK+jpG+LvGzzluV93mcJuXTNnp03PHQM1Fn4rJYLAolNiIiPpaWHXo2OTEy/L1GpHs1ptDMxFAT7G2sgaHu9sHO1pHutuL8/BpqAFQdvfTo2pLgryV++fup3pUJYVleCYvd/Eo6CoqfzKoneK3cmrsNSZeZ56NjgD5eSw+3obOR089rukgh7//qi0O7HTvy6dPc0q47N7vu3vrz95xLKRnMpMTz586RjoeHhJKCjgSHhJ+kJSb8B2wr+bxurb9kAAAAAElFTkSuQmCC',
          width: 64,
          height: 64,
          src: '/static/7f05c1d57888914478fcf2c29a77ba96/49ddd/profile.png',
          srcSet:
            '/static/7f05c1d57888914478fcf2c29a77ba96/49ddd/profile.png 1x',
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
    render(<Layout>テスト</Layout>);

    expect(screen.getByText('テスト')).toBeInTheDocument();
    expect(screen.getByText('サイトタイトル')).toBeInTheDocument();
    expect(screen.getByText('サイト概要')).toBeInTheDocument();
  });
});
