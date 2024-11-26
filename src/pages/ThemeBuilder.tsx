import React from 'react';
import { 
  Heading, 
  Paragraph, 
  Card, 
  Tag, 
  Link,
  Alert,
  Tabs,
  List
} from '@digdir/designsystemet-react';
import CodeSnippet from '../components/CodeSnippet';

const ThemeIntegration: React.FC = () => {
  return (
    <div>
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <Heading level={1} size="xlarge" spacing>
          Tema-integrasjon med Tokens Studio
        </Heading>
        <Paragraph spacing style={{ maxWidth: '800px', margin: '0 auto' }}>
          Denne guiden vil hjelpe deg med å sette opp og integrere designsystemets temaer ved hjelp av Tokens Studio for Figma.
          Følg stegene under for en sømløs integrasjon.
        </Paragraph>
      </div>

      <Alert severity="info" style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
        <Heading level={2} size="small" spacing>
          Før du begynner
        </Heading>
        <List.Unordered>
          <List.Item>Sørg for at du har Figma-appen installert</List.Item>
          <List.Item>Du trenger administratortilgang for å installere plugins</List.Item>
          <List.Item>Ha prosjektet ditt klart i Figma</List.Item>
        </List.Unordered>
      </Alert>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Tabs defaultValue="installation">
          <Tabs.List>
            <Tabs.Tab value="installation">1. Installasjon</Tabs.Tab>
            <Tabs.Tab value="setup">2. Oppsett</Tabs.Tab>
            <Tabs.Tab value="tokens">3. Token-håndtering</Tabs.Tab>
            <Tabs.Tab value="integration">4. Integrasjon</Tabs.Tab>
          </Tabs.List>
          
          <Tabs.Content value="installation">
            <Card>
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <Tag color="info" size="small">Steg 1</Tag>
                  <Heading level={2} size="medium">Installere Tokens Studio</Heading>
                </div>
                
                <div style={{ display: 'grid', gap: '2rem' }}>
                  <div>
                    <Heading level={3} size="small" spacing>Installer pluginen</Heading>
                    <List.Unordered>
                      <List.Item>Åpne Figma og naviger til "Plugins" i menylinjen</List.Item>
                      <List.Item>Søk etter "Tokens Studio" og installer pluginen</List.Item>
                    </List.Unordered>
                  </div>

                  <div>
                    <Heading level={3} size="small" spacing>Start pluginen</Heading>
                    <List.Unordered>
                      <List.Item>Etter installasjon, åpne Tokens Studio fra "Plugins"-menyen i Figma</List.Item>
                      <List.Item>Ved første oppstart vil du se en velkomstskjerm - klikk "Get started"</List.Item>
                    </List.Unordered>
                  </div>

                  <Alert severity="success">
                    <strong>Tips:</strong> Du kan pinne Tokens Studio til din plugins-meny for rask tilgang
                  </Alert>
                </div>
              </div>
            </Card>
          </Tabs.Content>

          <Tabs.Content value="setup">
            <Card>
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <Tag color="info" size="small">Steg 2</Tag>
                  <Heading level={2} size="medium">Grunnleggende oppsett</Heading>
                </div>

                <div style={{ display: 'grid', gap: '2rem' }}>
                  <div>
                    <Heading level={3} size="small" spacing>Organisering av tokens</Heading>
                    <Paragraph spacing>
                      For best praksis, organiser tokens i logiske grupper:
                    </Paragraph>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                      <Card>
                        <div style={{ padding: '1rem' }}>
                          <Tag color="first">Farger</Tag>
                          <List.Unordered>
                            <List.Item>Primærfarger</List.Item>
                            <List.Item>Sekundærfarger</List.Item>
                            <List.Item>Bakgrunner</List.Item>
                          </List.Unordered>
                        </div>
                      </Card>
                      <Card>
                        <div style={{ padding: '1rem' }}>
                          <Tag color="first">Typografi</Tag>
                          <List.Unordered>
                            <List.Item>Fonter</List.Item>
                            <List.Item>Størrelser</List.Item>
                            <List.Item>Linjehøyder</List.Item>
                          </List.Unordered>
                        </div>
                      </Card>
                      <Card>
                        <div style={{ padding: '1rem' }}>
                          <Tag color="first">Spacing</Tag>
                          <List.Unordered>
                            <List.Item>Marginer</List.Item>
                            <List.Item>Padding</List.Item>
                            <List.Item>Gap</List.Item>
                          </List.Unordered>
                        </div>
                      </Card>
                    </div>
                  </div>

                  <Alert severity="info">
                    <strong>God praksis:</strong> Bruk beskrivende navn på tokens som reflekterer deres funksjon, ikke deres verdi
                  </Alert>
                </div>
              </div>
            </Card>
          </Tabs.Content>

          <Tabs.Content value="tokens">
            <Card>
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <Tag color="info" size="small">Steg 3</Tag>
                  <Heading level={2} size="medium">Token-håndtering</Heading>
                </div>

                <div style={{ display: 'grid', gap: '2rem' }}>
                  <div>
                    <Heading level={3} size="small" spacing>Opprette tokens</Heading>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '1rem' }}>
                      <div>
                        <Paragraph spacing>
                          <strong>Basis token-oppsett:</strong>
                        </Paragraph>
                        <List.Unordered>
                          <List.Item>Klikk på "New Token"</List.Item>
                          <List.Item>Velg token-type (f.eks. Color)</List.Item>
                          <List.Item>Gi token et beskrivende navn</List.Item>
                          <List.Item>Sett token-verdi</List.Item>
                        </List.Unordered>
                      </div>
                      <div>
                        <Paragraph spacing>
                          <strong>Avanserte funksjoner:</strong>
                        </Paragraph>
                        <List.Unordered>
                          <List.Item>Alias-tokens</List.Item>
                          <List.Item>Token-sett</List.Item>
                          <List.Item>Temavariasjoner</List.Item>
                        </List.Unordered>
                      </div>
                    </div>
                  </div>

                  <Alert severity="warning">
                    <strong>Viktig:</strong> Husk å synkronisere endringer regelmessig og ta backup av tokens
                  </Alert>
                </div>
              </div>
            </Card>
          </Tabs.Content>

          <Tabs.Content value="integration">
            <Card>
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <Tag color="info" size="small">Steg 4</Tag>
                  <Heading level={2} size="medium">Kodeintegrasjon</Heading>
                </div>

                <div style={{ display: 'grid', gap: '2rem' }}>
                  <div>
                    <Heading level={3} size="small" spacing>Implementer i React</Heading>
                    <Paragraph spacing>
                      Integrer tokens i din React-applikasjon ved å følge disse stegene:
                    </Paragraph>
                    <CodeSnippet code={`import { ThemeProvider } from '@digdir/designsystemet-react';
import tokens from './tokens.json';

function App() {
  return (
    <ThemeProvider theme={tokens}>
      <YourApp />
    </ThemeProvider>
  );
}`} />
                  </div>

                  <div>
                    <Heading level={3} size="small" spacing>Synkronisering og vedlikehold</Heading>
                    <List.Unordered>
                      <List.Item>Eksporter tokens regelmessig fra Figma</List.Item>
                      <List.Item>Hold tokens.json oppdatert i kodebasen</List.Item>
                      <List.Item>Test endringer på tvers av temaer</List.Item>
                    </List.Unordered>
                  </div>

                  <Alert severity="success">
                    <strong>Neste steg:</strong> Utforsk avanserte funksjoner i{' '}
                    <Link href="https://tokens.studio" target="_blank">
                      Tokens Studio Pro
                    </Link>
                  </Alert>
                </div>
              </div>
            </Card>
          </Tabs.Content>
        </Tabs>
      </div>
    </div>
  );
};

export default ThemeIntegration;
