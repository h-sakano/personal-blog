import { Card } from 'antd';
import React from 'react';

const SourceCode = () => {
  return (
    <Card className="w-full" title="本ブログのソースコード" bordered={false}>
      <a
        className="flex items-center text-coloredLink"
        href="https://github.com/h-sakano/personal-blog"
        rel="nofollow noopener noreferrer"
        target="_blank"
      >
        h-sakano/personal-blog
      </a>
    </Card>
  );
};

export default SourceCode;
