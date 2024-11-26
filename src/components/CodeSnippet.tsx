import React from 'react';
import { Card } from '@digdir/designsystemet-react';

interface CodeSnippetProps {
  code: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ code }) => {
  return (
    <Card>
      <pre style={{ 
        margin: 0,
        padding: '1rem',
        background: '#f5f5f5',
        borderRadius: '4px',
        overflowX: 'auto'
      }}>
        <code>{code}</code>
      </pre>
    </Card>
  );
};

export default CodeSnippet;
