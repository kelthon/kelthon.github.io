import ScrollIndicator from '@buttons/ScrollIndicator/ScrollIndicator';
import Message from '@cards/Message/Message';
import { LanguageProvider } from '@hooks/language';
import { ThemeProvider } from '@hooks/theme';
import Navbar from '@navs/Navbar/Navbar';
import AboutMeSection from '@pages/AboutMe/AboutMe';
import ContactMe from '@pages/ContactMe/ContactMe';
import Projects from '@pages/MyProjects/MyProjects';
import Translations from '@services/data';
import { ColorScheme, Language } from '@utils/properties';
import { useState } from 'react';
import './App.css';

function App() {
  const [language, setLanguage] = useState<Language>(Language.English);
  const messages = Translations.get(language)!.messages;
  const [theme, setTheme] = useState<ColorScheme>(
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? ColorScheme.Dark
      : ColorScheme.Light,
  );

  return (
    <ThemeProvider value={{ theme, setTheme }}>
      <LanguageProvider value={{ language, setLanguage }}>
        <main className={`theme-${theme}` } lang={language}>
          <ScrollIndicator />
          <div className="container">
            <aside className="messages">
              <Message
                title={messages[0].title}
                message={messages[0].message!}
              />
            </aside>
            <Navbar />
            <AboutMeSection />
          </div>
          <div className="container">
            <Projects />
          </div>
          <div className="container">
            <ContactMe />
          </div>
        </main>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
