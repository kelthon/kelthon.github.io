import './App.css';
import AboutMeSection from './components/AboutMe/AboutMe';
import Message from './components/Message/Message';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from './hooks/theme';
import { messages } from './data/data';

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
      </main>
    </ThemeProvider>
  );
}

export default App;
