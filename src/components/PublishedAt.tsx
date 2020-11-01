import { CalendarOutlined } from '@ant-design/icons';
import { Space, Typography } from 'antd';
import format from 'date-fns/format';
import React from 'react';

interface Props {
  publishedAt?: string;
  publishedAtOnHatena?: string;
}

const PublishedAt: React.FC<Props> = ({ publishedAt, publishedAtOnHatena }) => {
  const at = publishedAtOnHatena ?? publishedAt;

  return (
    <Typography.Text>
      <Space>
        <CalendarOutlined />
        <div>{format(new Date(at), 'yyyy年MM月dd日')}</div>
      </Space>
    </Typography.Text>
  );
};

export default PublishedAt;
