import React from 'react';
import { 
  Paragraph, 
  Link, 
  Tag, 
  Spinner,
  Card,
  Heading,
  Divider
} from '@digdir/designsystemet-react';

interface SearchResult {
  title: string;
  summary: string;
  source: string;
  url: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  isLoading: boolean;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, isLoading }) => {
  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '32px' }}>
        <Spinner size="medium" title="Searching..." variant="interaction" />
      </div>
    );
  }

  if (results.length === 0) {
    return null;
  }

  return (
    <div style={{ marginTop: '24px' }}>
      <Heading level={2} size="small" spacing>
        Search Results ({results.length})
      </Heading>
      
      <div style={{ marginTop: '16px' }}>
        {results.map((result, index) => (
          <div key={index} style={{ marginBottom: index < results.length - 1 ? '16px' : 0 }}>
            <Card>
              <div style={{ padding: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <Link href={result.url}>
                    <Heading level={3} size="xsmall" spacing={false}>
                      {result.title}
                    </Heading>
                  </Link>
                  <Tag size="small" color={
                    result.source === 'FAQ' ? 'success' :
                    result.source === 'Slack' ? 'info' :
                    'neutral'
                  }>
                    {result.source}
                  </Tag>
                </div>
                
                <Divider color="subtle" />
                
                <div style={{ marginTop: '12px' }}>
                  <Paragraph size="small" spacing={false}>
                    {result.summary}
                  </Paragraph>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
