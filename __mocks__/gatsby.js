import React from 'react';

const gatsby = jest.requireActual('gatsby');
module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName: _activeClassName,
      activeStyle: _activeStyle,
      getProps: _getProps,
      innerRef: _innerRef,
      partiallyActive: _partiallyActive,
      ref: _ref,
      replace: _replace,
      to,
      ...rest
    }) =>
      React.createElement('a', {
        ...rest,
        href: to,
      }),
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn(),
};
