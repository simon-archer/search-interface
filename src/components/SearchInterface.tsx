import React, { useState, ChangeEvent } from 'react';
import { 
  Paragraph, 
  Heading,
  Card,
  Divider,
  Alert,
  Button,
  Search
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
          title: 'FAQ: Kom i gang',
          summary: 'Veiledning om hvordan du starter med våre tjenester og vanlige oppsettsprosedyrer.',
          source: 'FAQ',
          url: '#'
        },
        {
          title: 'Slack-diskusjon: Beste praksis',
          summary: 'Teamdiskusjon om implementeringsmønstre og anbefalte tilnærminger.',
          source: 'Slack',
          url: '#'
        },
        {
          title: 'GitHub Issue: Ytelsesoptimalisering',
          summary: 'Teknisk diskusjon om forbedring av applikasjonsytelse.',
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
            <Heading level={1} data-size="2xl">
              Søk I Designsystemet
            </Heading>
            <Paragraph data-size="md">
            Søk gjennom vanlige spørsmål, Slack-diskusjoner og GitHub-repositorier for å finne informasjonen du trenger.
            </Paragraph>
            
            <Alert data-color="info">
            Prøv søk på emner som "kom i gang", "beste praksis" eller spesifikke tekniske termer.
            </Alert>

            <div style={{ margin: '16px 0' }} />
            
            <Search>
              <Search.Input 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Søk i kunnskapsbasen..."
                aria-label="Søk i kunnskapsbasen..."
              />
              <Search.Clear onClick={() => setQuery('')} />
              <Search.Button onClick={() => handleSearch(query)} />
            </Search>

            <div style={{ margin: '16px 0' }} />
            
            {!isSearching && !results.length && query && (
              <Alert data-color="warning">
                Ingen resultater funnet. Prøv å spesifisere søkeordene dine.
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
                  data-size="sm"
                  onClick={() => {
                    setQuery('');
                    setResults([]);
                  }}
                >
                  Tøm resultater
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
