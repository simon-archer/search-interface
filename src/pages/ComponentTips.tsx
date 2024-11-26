import React from 'react';
import { 
  Heading, 
  Paragraph, 
  Card, 
  Button,
  Tabs,
  Tag
} from '@digdir/designsystemet-react';
import CodeSnippet from '../components/CodeSnippet';

const ComponentTips: React.FC = () => {
  return (
    <div>
      <Heading level={1} size="xlarge" spacing>
        Komponenttips
      </Heading>
      <Paragraph spacing>
        Lær beste praksis og bruksretningslinjer for Designsystemet-komponenter.
      </Paragraph>

      <Tabs defaultValue="button">
        <Tabs.List>
          <Tabs.Tab value="button">Knapper</Tabs.Tab>
          <Tabs.Tab value="card">Kort</Tabs.Tab>
          <Tabs.Tab value="typography">Typografi</Tabs.Tab>
        </Tabs.List>

        <div style={{ padding: '1rem' }}>
          <Tabs.Content value="button">
            <Card>
              <div style={{ padding: '1rem' }}>
                <Heading level={2} size="small" spacing>Beste praksis for knapper</Heading>
                <Paragraph spacing>
                  Lær hvordan du bruker knapper effektivt i applikasjonen din.
                </Paragraph>

                <div style={{ marginBottom: '1rem' }}>
                  <Tag size="small" color="success">Beste praksis</Tag>
                  <Paragraph spacing>Bruk primærknapper for hovedhandlinger.</Paragraph>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <Button variant="primary">Primærhandling</Button>
                    <Button variant="secondary">Sekundærhandling</Button>
                    <Button variant="tertiary">Tertiærhandling</Button>
                  </div>
                  <CodeSnippet code={`<Button variant="primary">Primærhandling</Button>
<Button variant="secondary">Sekundærhandling</Button>
<Button variant="tertiary">Tertiærhandling</Button>`} />
                </div>
              </div>
            </Card>
          </Tabs.Content>

          <Tabs.Content value="card">
            <Card>
              <div style={{ padding: '1rem' }}>
                <Heading level={2} size="small" spacing>Veiledning for kort-komponenter</Heading>
                <Paragraph spacing>
                  Lær hvordan du strukturerer innhold ved hjelp av kort på en effektiv måte.
                </Paragraph>

                <div style={{ marginBottom: '1rem' }}>
                  <Tag size="small" color="success">Beste praksis</Tag>
                  <Paragraph spacing>Bruk kort for å gruppere relatert innhold.</Paragraph>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <Heading level={3} size="xsmall" spacing>Eksempelbruk</Heading>
                  <Card>
                    <div style={{ padding: '1rem' }}>
                      <Heading level={3} size="xsmall" spacing>Korttittel</Heading>
                      <Paragraph>Kortinnhold kommer her.</Paragraph>
                    </div>
                  </Card>
                  <CodeSnippet code={`<Card>
  <div style={{ padding: '1rem' }}>
    <Heading level={3} size="xsmall" spacing>Korttittel</Heading>
    <Paragraph>Kortinnhold kommer her.</Paragraph>
  </div>
</Card>`} />
                </div>
              </div>
            </Card>
          </Tabs.Content>

          <Tabs.Content value="typography">
            <Card>
              <div style={{ padding: '1rem' }}>
                <Heading level={2} size="small" spacing>Typografiretningslinjer</Heading>
                <Paragraph spacing>
                  Lær hvordan du bruker typografikomponenter effektivt.
                </Paragraph>

                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <Heading level={1} size="xlarge" spacing>Overskrift XLarge</Heading>
                    <Heading level={2} size="large" spacing>Overskrift Large</Heading>
                    <Heading level={3} size="medium" spacing>Overskrift Medium</Heading>
                    <Paragraph size="medium">Medium avsnitt tekst</Paragraph>
                    <Paragraph size="small">Liten avsnitt tekst</Paragraph>
                  </div>
                  <CodeSnippet code={`<Heading level={1} size="xlarge" spacing>Overskrift XLarge</Heading>
<Heading level={2} size="large" spacing>Overskrift Large</Heading>
<Heading level={3} size="medium" spacing>Overskrift Medium</Heading>
<Paragraph size="medium">Medium avsnitt tekst</Paragraph>
<Paragraph size="small">Liten avsnitt tekst</Paragraph>`} />
                </div>
              </div>
            </Card>
          </Tabs.Content>
        </div>
      </Tabs>
    </div>
  );
};

export default ComponentTips;
