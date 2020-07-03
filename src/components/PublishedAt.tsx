import React from 'react';
import format from 'date-fns/format';
import { CalendarOutlined } from '@ant-design/icons';
import { Space, Typography } from 'antd';

interface Props {
  publishedAt?: string;
  publishedAtOnHatena?: string;
}

const PublishedAt: React.FC<Props> = ({ publishedAt, publishedAtOnHatena }) => {
  const at = publishedAtOnHatena ?? publishedAt;

  return (
    <Typography.Text type="secondary">
      <Space>
        <CalendarOutlined />
        <div>{format(new Date(at), 'yyyy年MM月dd日')}</div>
      </Space>
    </Typography.Text>
  );
};

export default PublishedAt;
