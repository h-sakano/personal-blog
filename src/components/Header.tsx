import { Link } from 'gatsby';
import React from 'react';

interface HeaderProps {
  description?: string;
  siteTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ description, siteTitle }) => (
  <header className="text-center">
    <h1>
      <Link className="text-4xl text-current" to="/">
        {siteTitle}
      </Link>
    </h1>
    <div className="mt-2 text-gray-600">{description}</div>
  </header>
);

export default Header;
