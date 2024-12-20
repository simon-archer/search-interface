import React from 'react';
import { Card, Heading, Paragraph, Tag } from '@digdir/designsystemet-react';

interface TimelineItemProps {
  children: React.ReactNode;
  date: string;
  title: string;
  description: string;
  type: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  children, 
  date, 
  title, 
  description, 
  type 
}) => {
  const getTypeColor = (type: string): 'success' | 'warning' | 'info' | 'neutral' => {
    switch (type) {
      case 'first':
        return 'neutral';
      case 'success':
        return 'success';
      case 'warning':
        return 'warning';
      case 'info':
        return 'info';
      default:
        return 'neutral';
    }
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <Card>
        <div style={{ padding: '1rem' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem', 
            marginBottom: '0.5rem' 
          }}>
            <Tag data-size="sm" data-color={getTypeColor(type)}>{type}</Tag>
            <span style={{ color: '#666', fontSize: '0.875rem' }}>{date}</span>
          </div>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>{title}</h3>
          <p style={{ margin: '0 0 1rem 0', color: '#666' }}>{description}</p>
          {children}
        </div>
      </Card>
    </div>
  );
};

interface TimelineProps {
  children: React.ReactNode;
}

const Timeline: React.FC<TimelineProps> & { Item: typeof TimelineItem } = ({ children }) => {
  return <div>{children}</div>;
};

Timeline.Item = TimelineItem;

export default Timeline;
