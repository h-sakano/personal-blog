import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Typography } from 'antd';
import styles from './Header.module.css';

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <Typography.Title>
      <Link to="/" className={styles.link}>
        {siteTitle}
      </Link>
    </Typography.Title>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
