import { CalendarOutlined } from '@ant-design/icons';
import format from 'date-fns/format';
import React from 'react';

interface Props {
  publishedAt?: string;
  publishedAtOnHatena?: string;
}

const PublishedAt: React.FC<Props> = ({ publishedAt, publishedAtOnHatena }) => {
  const at = publishedAtOnHatena ?? publishedAt;

  return (
    <div className="inline-flex items-center">
      <CalendarOutlined />
      <div className="ml-2">{format(new Date(at), 'yyyy年MM月dd日')}</div>
    </div>
  );
};

export default PublishedAt;
