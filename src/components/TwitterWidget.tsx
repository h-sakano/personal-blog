import { Card } from 'antd';
import React from 'react';

const TwitterWidget = () => {
  return (
    <Card title="Twitter" bordered={false}>
      <a
        className="twitter-timeline"
        data-height="600"
        href="https://twitter.com/h_sakano?ref_src=twsrc%5Etfw"
      >
        Tweets by h_sakano
      </a>
    </Card>
  );
};

export default TwitterWidget;
