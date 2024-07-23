import { RiCloseFill } from '@remixicon/react';
import { useState } from 'react';
import './Message.css';

interface MessageProps {
  title?: string;
  message: string;
}

function Message({ title, message }: MessageProps) {
  const [showMessage, setShowMessage] = useState<boolean>(true);

  return (
    showMessage && (
      <aside className="message">
        <article className="msg-content">
          <h2 className="msg-title">{title}</h2>
          <p className="msg-description">{message}</p>
        </article>
        <footer className="msg-control">
          <button
            type="button"
            className="msg-close-btn"
            title="close message banner"
            onClick={() => setShowMessage(false)}
          >
            <RiCloseFill />
          </button>
        </footer>
      </aside>
    )
  );
}

export default Message;
