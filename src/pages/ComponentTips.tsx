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
      <Heading level={1} data-size="2xl">
        Komponenttips
      </Heading>
      <Paragraph data-size="md">
        Lær beste praksis og bruksretningslinjer for Designsystemet-komponenter.
      </Paragraph>

      <Tabs defaultValue="button">
        <Tabs.List>
          <Tabs.Tab value="button">Knapper</Tabs.Tab>
          <Tabs.Tab value="card">Kort</Tabs.Tab>
          <Tabs.Tab value="typography">Typografi</Tabs.Tab>
        </Tabs.List>

        <div style={{ padding: '1rem' }}>
          <div>
            <Card>
              <div style={{ padding: '1rem' }}>
                <div style={{ marginTop: '2rem' }}>
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    <Tag data-size="sm" data-color="success">Beste praksis</Tag>
                    <Heading level={2} data-size="sm">
                      Beste praksis for knapper
                    </Heading>
                    <Paragraph data-size="md">
                      Lær hvordan du bruker knapper effektivt i applikasjonen din.
                    </Paragraph>

                    <div style={{ marginBottom: '1rem' }}>
                      <Tag data-size="sm" data-color="success">Beste praksis</Tag>
                      <Paragraph data-size="md">
                        Bruk primærknapper for hovedhandlinger.
                      </Paragraph>
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
                </div>
              </div>
            </Card>
          </div>

          <div>
            <Card>
              <div style={{ padding: '1rem' }}>
                <Heading level={2} data-size="sm">
                  Veiledning for kort-komponenter
                </Heading>
                <Paragraph data-size="md">
                  Lær hvordan du strukturerer innhold ved hjelp av kort på en effektiv måte.
                </Paragraph>

                <div style={{ marginBottom: '1rem' }}>
                  <Tag data-size="sm" data-color="success">Beste praksis</Tag>
                  <Paragraph data-size="md">
                    Bruk kort for å gruppere relatert innhold.
                  </Paragraph>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <Heading level={3} data-size="xs">
                    Eksempelbruk
                  </Heading>
                  <Card>
                    <div style={{ padding: '1rem' }}>
                      <Heading level={3} data-size="xs">
                        Korttittel
                      </Heading>
                      <Paragraph data-size="md">
                        Kortinnhold kommer her.
                      </Paragraph>
                    </div>
                  </Card>
                  <CodeSnippet code={`<Card>
  <div style={{ padding: '1rem' }}>
    <Heading level={3} data-size="xs">
      Korttittel
    </Heading>
    <Paragraph data-size="md">
      Kortinnhold kommer her.
    </Paragraph>
  </div>
</Card>`} />
                </div>
              </div>
            </Card>
          </div>

          <div>
            <Card>
              <div style={{ padding: '1rem' }}>
                <Heading level={2} data-size="sm">
                  Typografiretningslinjer
                </Heading>
                <Paragraph data-size="md">
                  Lær hvordan du bruker typografikomponenter effektivt.
                </Paragraph>

                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <Heading level={1} data-size="2xl">
                      Overskrift XLarge
                    </Heading>
                    <Heading level={2} data-size="lg">
                      Overskrift Large
                    </Heading>
                    <Heading level={3} data-size="md">
                      Overskrift Medium
                    </Heading>
                    <Paragraph data-size="md">
                      Medium avsnitt tekst
                    </Paragraph>
                    <Paragraph data-size="sm">
                      Liten avsnitt tekst
                    </Paragraph>
                  </div>
                  <CodeSnippet code={`<Heading level={1} data-size="2xl">
Overskrift XLarge
</Heading>
<Heading level={2} data-size="lg">
Overskrift Large
</Heading>
<Heading level={3} data-size="md">
Overskrift Medium
</Heading>
<Paragraph data-size="md">
Medium avsnitt tekst
</Paragraph>
<Paragraph data-size="sm">
Liten avsnitt tekst
</Paragraph>`} />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default ComponentTips;
