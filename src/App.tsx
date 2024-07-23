import Message from '@components/cards/Message/Message';
import Navbar from '@components/navs/Navbar/Navbar';
import { messages } from '@services/data';
import { ThemeProvider } from '@hooks/theme';
import { LanguageProvider } from '@hooks/language';
import AboutMeSection from '@pages/AboutMe/AboutMe';
import Projects from '@pages/MyProjects/MyProjects';
import { ColorScheme, Language } from '@utils/properties';
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <main>
        <div className="container">
          <aside>
            <Message title={messages[0].title} message={messages[0].message!} />
          </aside>
          <Navbar />
          <AboutMeSection />
        </div>
        <div className="container">
          <Projects />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
