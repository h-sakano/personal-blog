import React, { ReactNode } from 'react';

const Tag: React.FC<{ children?: ReactNode; color?: string }> = ({
  children,
  color,
}) => (
  <div className="inline-block text-white" style={{ backgroundColor: color }}>
    {children}
  </div>
);

export default Tag;
