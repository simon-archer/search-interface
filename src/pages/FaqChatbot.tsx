import React, { useState } from 'react';
import { 
  Heading, 
  Paragraph, 
  Card, 
  Button,
  Textfield,
  Tag
} from '@digdir/designsystemet-react';
import CodeSnippet from '../components/CodeSnippet';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const FaqChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: 'Hei! Hvordan kan jeg hjelpe deg med Designsystemet i dag?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        text: 'Jeg forstår at du har et spørsmål om Designsystemet. La meg hjelpe deg med det.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div>
      <Heading level={1} size="xlarge" spacing>
        Spørsmål og Svar
      </Heading>
      <Paragraph spacing>
        Få svar på vanlige spørsmål om Designsystemet.
      </Paragraph>

      <Card>
        <div style={{ padding: '1rem' }}>
          <div style={{ height: '400px', overflowY: 'auto', marginBottom: '1rem' }}>
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  marginBottom: '1rem'
                }}
              >
                <div
                  style={{
                    maxWidth: '70%',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    backgroundColor: message.sender === 'user' ? '#0067C5' : '#f5f5f5',
                    color: message.sender === 'user' ? 'white' : 'inherit'
                  }}
                >
                  <div style={{ marginBottom: '0.25rem' }}>
                    {message.text}
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      opacity: 0.7,
                      textAlign: message.sender === 'user' ? 'right' : 'left'
                    }}
                  >
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <Textfield
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Skriv ditt spørsmål..."
              style={{ flex: 1 }}
            />
            <Button
              variant="primary"
              onClick={handleSend}
              disabled={!input.trim()}
            >
              Send
            </Button>
          </div>
        </div>
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginTop: '2rem' }}>
        <Card>
          <div style={{ padding: '1rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <Tag size="small" color="success">Vanlig spørsmål</Tag>
              <Heading level={2} size="small" spacing>
                Hvordan kommer jeg i gang med Designsystemet?
              </Heading>
              <Paragraph spacing>
                For å komme i gang, installer pakkene via npm:
              </Paragraph>
              <CodeSnippet code={`npm install @digdir/designsystemet-react @digdir/designsystemet-css`} />
            </div>
          </div>
        </Card>

        <Card>
          <div style={{ padding: '1rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <Tag size="small" color="success">Vanlig spørsmål</Tag>
              <Heading level={2} size="small" spacing>
                Hvordan bruker jeg temaer?
              </Heading>
              <Paragraph spacing>
                Importer og konfigurer temaet i din applikasjon:
              </Paragraph>
              <CodeSnippet code={`import { ThemeProvider } from '@digdir/designsystemet-react';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}`} />
            </div>
          </div>
        </Card>

        <Card>
          <div style={{ padding: '1rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <Tag size="small" color="success">Vanlig spørsmål</Tag>
              <Heading level={2} size="small" spacing>
                Hvordan håndterer jeg tilgjengelighet?
              </Heading>
              <Paragraph spacing>
                Designsystemet følger WCAG 2.1 retningslinjer. Våre komponenter har innebygd støtte for:
              </Paragraph>
              <ul>
                <li>ARIA-attributter</li>
                <li>Tastaturnavigasjon</li>
                <li>Skjermleserkompatibilitet</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <div style={{ padding: '1rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <Tag size="small" color="success">Vanlig spørsmål</Tag>
              <Heading level={2} size="small" spacing>
                Hvor finner jeg dokumentasjon?
              </Heading>
              <Paragraph spacing>
                Du kan finne detaljert dokumentasjon på følgende steder:
              </Paragraph>
              <ul>
                <li>Komponentbibliotek på Storybook</li>
                <li>GitHub-repositoriet</li>
                <li>API-dokumentasjon</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FaqChatbot;
