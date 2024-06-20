import './App.css';
import Message from './components/Message/Message';
import { ThemeProvider } from './hooks/theme';

function App() {
  return (
    <ThemeProvider>
      <Message
        title="&#x1F6A7; Under Construction &#x1F6A7;"
        message="I'm currently working hard to improve your browsing experience. During
          this phase, you may encounter some glitches or errors. I apologize for
          any inconvenience and thank you for your patience. Thanks for the
          visit! Thank you for visiting!"
      />
    </ThemeProvider>
  );
}

export default App;
