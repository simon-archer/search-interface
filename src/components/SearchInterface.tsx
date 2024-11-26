import React, { useState } from 'react';
import { 
  Search, 
  Paragraph, 
  Heading,
  Card,
  Divider,
  Alert,
  Button
} from '@digdir/designsystemet-react';
import SearchResults from './SearchResults';

interface SearchResult {
  title: string;
  summary: string;
  source: string;
  url: string;
}

const SearchInterface: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      return;
    }
    
    setIsSearching(true);
    // Simulate search across multiple sources
    setTimeout(() => {
      const mockResults: SearchResult[] = [
        {
          title: 'FAQ: Getting Started',
          summary: 'Guide on how to begin with our services and common setup procedures.',
          source: 'FAQ',
          url: '#'
        },
        {
          title: 'Slack Discussion: Best Practices',
          summary: 'Team discussion about implementation patterns and recommended approaches.',
          source: 'Slack',
          url: '#'
        },
        {
          title: 'GitHub Issue: Performance Optimization',
          summary: 'Technical discussion about improving application performance.',
          source: 'GitHub',
          url: '#'
        }
      ];
      setResults(mockResults);
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5', padding: '16px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Card>
          <div style={{ padding: '24px' }}>
            <Heading level={1} size="xlarge" spacing>
              Knowledge Base Search
            </Heading>
            <Paragraph spacing size="medium">
              Search across FAQs, Slack discussions, and GitHub repositories to find the information you need.
            </Paragraph>
            
            <Alert severity="info">
              Try searching for topics like "getting started", "best practices", or specific technical terms.
            </Alert>

            <div style={{ margin: '16px 0' }} />
            
            <Search
              label="Search knowledge base"
              hideLabel={false}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onSearchClick={() => handleSearch(query)}
              size="medium"
            />

            <div style={{ margin: '16px 0' }} />
            
            {!isSearching && !results.length && query && (
              <Alert severity="warning">
                No results found. Try refining your search terms.
              </Alert>
            )}

            <SearchResults 
              results={results} 
              isLoading={isSearching}
            />

            {results.length > 0 && (
              <>
                <Divider />
                <div style={{ margin: '16px 0' }} />
                <Button
                  variant="secondary"
                  size="small"
                  onClick={() => {
                    setQuery('');
                    setResults([]);
                  }}
                >
                  Clear Results
                </Button>
              </>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SearchInterface;
