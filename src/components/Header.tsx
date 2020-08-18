import { Link } from 'gatsby';
import React from 'react';
import { Typography } from 'antd';
import styles from './Header.module.css';

interface HeaderProps {
  description?: string;
  siteTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ description, siteTitle }) => (
  <header className={styles.header}>
    <Typography.Title>
      <Link to="/" className={styles.link}>
        {siteTitle}
      </Link>
    </Typography.Title>
    <Typography.Text>{description}</Typography.Text>
  </header>
);

export default Header;
