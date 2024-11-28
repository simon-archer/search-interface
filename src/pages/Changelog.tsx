import React from 'react';
import { 
  Heading, 
  Paragraph, 
  Card, 
  Tag 
} from '@digdir/designsystemet-react';
import Timeline from '../components/Timeline';

interface ChangelogEntry {
  version: string;
  date: string;
  type: 'feature' | 'bugfix' | 'improvement';
  title: string;
  description: string;
}

const changelog: ChangelogEntry[] = [
  {
    version: '1.2.0',
    date: '2024-01-15',
    type: 'feature',
    title: 'Ny komponentbibliotek',
    description: 'Introdusert et omfattende sett med nye komponenter.'
  },
  {
    version: '1.1.1',
    date: '2024-01-10',
    type: 'bugfix',
    title: 'Ytelsesforbedringer',
    description: 'Fikset ulike ytelsesproblemer og minnehull.'
  },
  {
    version: '1.1.0',
    date: '2024-01-05',
    type: 'improvement',
    title: 'Forbedret dokumentasjon',
    description: 'Lagt til detaljert dokumentasjon for alle komponenter.'
  }
];

const Changelog: React.FC = () => {
  const getVersionColor = (type: ChangelogEntry['type']) => {
    switch (type) {
      case 'feature':
        return 'success';
      case 'bugfix':
        return 'first';
      case 'improvement':
        return 'second';
      default:
        return 'neutral';
    }
  };

  return (
    <div>
      <Heading level={1} data-size="xl">
        Endringslogg
      </Heading>
      <Paragraph data-size="md">
        Se de siste oppdateringene og endringene i Designsystemet.
      </Paragraph>

      <Timeline>
        <Timeline.Item
          date="2024-03-01"
          title="Ny versjon 0.63.1"
          description="Forbedret tilgjengelighet og ytelsesforbedringer"
          type="release"
        >
          <div style={{ marginTop: '1rem' }}>
            <Tag data-size="sm" data-color="success">Ny funksjonalitet</Tag>
            <ul>
              <li>Lagt til støtte for tastaturnavigasjon i nedtrekkslister</li>
              <li>Forbedret ARIA-attributter for skjermlesere</li>
            </ul>

            <Tag data-size="sm" data-color="warning">Feilrettinger</Tag>
            <ul>
              <li>Fikset feil med fokushåndtering i modale vinduer</li>
              <li>Korrigert kontrastforhold i mørk modus</li>
            </ul>
          </div>
        </Timeline.Item>

        <Timeline.Item
          date="2024-02-15"
          title="Dokumentasjonsoppdatering"
          description="Omfattende oppdatering av komponentdokumentasjon"
          type="docs"
        >
          <div style={{ marginTop: '1rem' }}>
            <ul>
              <li>Lagt til nye eksempler for komponentbruk</li>
              <li>Oppdatert retningslinjer for tilgjengelighet</li>
              <li>Forbedret kodeeksempler med TypeScript</li>
            </ul>
          </div>
        </Timeline.Item>

        <Timeline.Item
          date="2024-02-01"
          title="Feilrettingsversjon 0.62.3"
          description="Mindre feilrettinger og forbedringer"
          type="patch"
        >
          <div style={{ marginTop: '1rem' }}>
            <Tag data-size="sm" data-color="warning">Feilrettinger</Tag>
            <ul>
              <li>Fikset stilproblemer i Safari-nettleser</li>
              <li>Korrigert feil i datovalgkomponent</li>
            </ul>
          </div>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Changelog;
