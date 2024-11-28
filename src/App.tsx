import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  Button,
  Heading,
  Paragraph
} from '@digdir/designsystemet-react';

// Pages
import SearchInterface from './components/SearchInterface';
import FaqChatbot from './pages/FaqChatbot';
import ThemeIntegration from './pages/ThemeBuilder';
import ComponentTips from './pages/ComponentTips';
import SlackChannels from './pages/SlackChannels';
import Changelog from './pages/Changelog';

function App() {
  return (
    <Router>
      <div>
        <div style={{ background: 'default' }}>
          <div style={{ padding: '2rem' }}>
            <Heading level={1} data-size="2xl">
            Designsystemet Interaktive Konsepter
            </Heading>
            <Paragraph data-size="md">Utforsk interaktive funksjoner og dokumentasjon for designsystemet.</Paragraph>
          </div>
        </div>
        
        <nav style={{ padding: '1rem', borderBottom: '1px solid #e5e5e5', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/"><Button variant="secondary">Søk</Button></Link>
            <Link to="/faq-chatbot"><Button variant="secondary">Spørsmål og Svar</Button></Link>
            <Link to="/theme-integration"><Button variant="secondary">Tema-integrasjon</Button></Link>
            <Link to="/component-tips"><Button variant="secondary">Komponenttips</Button></Link>
            <Link to="/slack-channels"><Button variant="secondary">Slack-kanaler</Button></Link>
            <Link to="/changelog"><Button variant="secondary">Endringslogg</Button></Link>
          </div>
        </nav>

        <div style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<SearchInterface />} />
            <Route path="/faq-chatbot" element={<FaqChatbot />} />
            <Route path="/theme-integration" element={<ThemeIntegration />} />
            <Route path="/component-tips" element={<ComponentTips />} />
            <Route path="/slack-channels" element={<SlackChannels />} />
            <Route path="/changelog" element={<Changelog />} />
          </Routes>
        </div>

        <footer style={{ padding: '2rem', textAlign: 'center', marginTop: '2rem', borderTop: '1px solid #e5e5e5' }}>
          <Paragraph data-size="md">Designsystemet Examples - Interactive Concepts</Paragraph>
        </footer>
      </div>
    </Router>
  );
}

export default App;
