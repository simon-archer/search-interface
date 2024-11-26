import React from 'react';
import { 
  Heading, 
  Paragraph, 
  Card, 
  Tag 
} from '@digdir/designsystemet-react';

interface SlackChannel {
  name: string;
  purpose: string;
  category: string;
  isPrivate?: boolean;
  isSubChannel?: boolean;
}

const SlackChannels: React.FC = () => {
  const channels: SlackChannel[] = [
    {
      name: 'designsystemet',
      purpose: 'Hovedkanal for Designsystemet - generelle diskusjoner og spørsmål',
      category: 'Hovedkanal'
    },
    {
      name: 'mønstre-og-god-praksis',
      purpose: 'Diskusjoner om designmønstre og beste praksis',
      category: 'Spesialisert'
    },
    {
      name: 'random',
      purpose: 'Uformelle diskusjoner og deling av interessant innhold',
      category: 'Generell'
    },
    {
      name: 'sparring',
      purpose: 'Få tilbakemeldinger og diskuter designløsninger',
      category: 'Support'
    },
    {
      name: 'team-designsystemet',
      purpose: 'Intern kanal for Designsystem-teamet',
      category: 'Team',
      isPrivate: true
    },
    {
      name: 'design-ops',
      purpose: 'DesignOps-relaterte diskusjoner og ressurser',
      category: 'Spesialisert',
      isSubChannel: true
    },
    {
      name: 'design-show-and-tell',
      purpose: 'Del og vis frem designarbeid og prosjekter',
      category: 'Spesialisert',
      isSubChannel: true
    },
    {
      name: 'felles-innsiktsbibliotek',
      purpose: 'Deling og diskusjon av brukerinnsikt',
      category: 'Spesialisert',
      isSubChannel: true
    }
  ];

  const getCategoryColor = (category: string): "success" | "warning" | "info" | "first" => {
    switch (category.toLowerCase()) {
      case 'hovedkanal':
        return 'success';
      case 'support':
        return 'warning';
      case 'spesialisert':
        return 'info';
      default:
        return 'first';
    }
  };

  const getChannelPrefix = (channel: SlackChannel): string => {
    if (channel.isPrivate) return '🔒';
    if (channel.isSubChannel) return '+';
    return '#';
  };

  return (
    <div>
      <Heading level={1} size="xlarge" spacing>
        Slack-kanaler
      </Heading>
      <Paragraph spacing>
        Finn relevante Slack-kanaler for Designsystemet-diskusjoner og støtte.
      </Paragraph>

      <Card>
        <div style={{ padding: '1rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '0.5rem' }}>Kanal</th>
                <th style={{ textAlign: 'left', padding: '0.5rem' }}>Beskrivelse</th>
                <th style={{ textAlign: 'left', padding: '0.5rem' }}>Type</th>
              </tr>
            </thead>
            <tbody>
              {channels.map((channel) => (
                <tr key={channel.name}>
                  <td style={{ padding: '0.5rem' }}>
                    {getChannelPrefix(channel)}{channel.name}
                  </td>
                  <td style={{ padding: '0.5rem' }}>{channel.purpose}</td>
                  <td style={{ padding: '0.5rem' }}>
                    <Tag size="small" color={getCategoryColor(channel.category)}>
                      {channel.category}
                    </Tag>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div style={{ marginTop: '2rem' }}>
        <Heading level={2} size="medium" spacing>
          Kanalforklaring
        </Heading>
        <Card>
          <div style={{ padding: '1rem' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem' }}>
                <span style={{ marginRight: '0.5rem' }}>#</span>
                <Tag size="small" color="success">Offentlig kanal</Tag>
                <Paragraph spacing>Åpne kanaler for alle.</Paragraph>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <span style={{ marginRight: '0.5rem' }}>🔒</span>
                <Tag size="small" color="warning">Privat kanal</Tag>
                <Paragraph spacing>Kun for inviterte medlemmer.</Paragraph>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <span style={{ marginRight: '0.5rem' }}>+</span>
                <Tag size="small" color="info">Underkanal</Tag>
                <Paragraph spacing>Spesialiserte temakanaler.</Paragraph>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SlackChannels;
