import React, { useState } from 'react';
import { 
  Heading, 
  Paragraph, 
  Card, 
  Search
} from '@digdir/designsystemet-react';

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

  const handleSearch = (value: string) => {
    if (!value.trim()) return;

    const userMessage: Message = {
      text: value,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
  };

  return (
    <div>
      <Heading level={1} data-size="2xl">
        Spørsmål og Svar
      </Heading>
      <Paragraph data-size="md">
        Få svar på vanlige spørsmål om Designsystemet.
      </Paragraph>

      <div style={{ marginTop: '2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Search>
            <Search.Input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Søk i spørsmål og svar..."
              aria-label="Søk i spørsmål og svar"
            />
            <Search.Clear onClick={() => setInput('')} />
            <Search.Button onClick={() => handleSearch(input)} />
          </Search>
        </div>

        <div style={{ maxWidth: '800px', margin: '2rem auto 0' }}>
          <Card>
            <div style={{ padding: '2rem' }}>
              <div style={{ 
                height: '400px', 
                overflowY: 'auto', 
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {messages.map((message, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        maxWidth: '70%',
                        padding: '1rem',
                        borderRadius: '8px',
                        backgroundColor: message.sender === 'user' ? '#1E2B3C' : '#F2F4F7',
                        color: message.sender === 'user' ? 'white' : '#1E2B3C'
                      }}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FaqChatbot;
