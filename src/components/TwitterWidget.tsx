import React from 'react';
import { Card } from 'antd';

const TwitterWidget = () => {
  return (
    <Card title="Twitter" bordered={false}>
      <a
        className="twitter-timeline"
        data-width="280"
        data-height="600"
        href="https://twitter.com/h_sakano?ref_src=twsrc%5Etfw"
      >
        Tweets by h_sakano
      </a>
    </Card>
  );
};

export default TwitterWidget;
