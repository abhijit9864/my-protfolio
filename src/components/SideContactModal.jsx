import React, { useState, useRef, useEffect } from 'react';
import './SideContactModal.css';

const DUMMY_MESSAGES = [
  { from: 'ai', text: 'Hello! How can I help you today?' },
];

export default function SideContactModal({ onClose }) {
  const [tab, setTab] = useState('home');
  const [messages, setMessages] = useState(DUMMY_MESSAGES);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((msgs) => [
      ...msgs,
      { from: 'user', text: input },
      { from: 'ai', text: 'This is a demo AI reply.' },
    ]);
    setInput('');
  };

  return (
    <div className="side-contact-modal-overlay">
      <div className="side-contact-modal">
        <div className="side-contact-modal-header">
          <span>Contact & AI Chat</span>
          <button className="side-contact-modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="side-contact-modal-tabs">
          <button
            className={`side-contact-modal-tab${tab === 'home' ? ' active' : ''}`}
            onClick={() => setTab('home')}
          >
            Home
          </button>
          <button
            className={`side-contact-modal-tab${tab === 'message' ? ' active' : ''}`}
            onClick={() => setTab('message')}
          >
            Message
          </button>
        </div>
        <div className="side-contact-modal-body">
          {tab === 'home' ? (
            <div style={{ marginTop: 20 }}>
              <h3 style={{ color: '#73037a', marginBottom: 18, textAlign: 'center' }}>Welcome!</h3>
              <p style={{ fontSize: '1.1rem', color: '#444', textAlign: 'center' }}>
                Please fill out the form below and we will get back to you as soon as possible.
              </p>
              <form
                style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}
                onSubmit={e => {
                  e.preventDefault();
                  // You can add submit logic here
                  alert('Form submitted!');
                }}
              >
                <input
                  type="text"
                  placeholder="Name"
                  required
                  style={{
                    padding: '8px 10px',
                    border: '1px solid #e0c6f7',
                    borderRadius: 6,
                    fontSize: '1rem',
                  }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  style={{
                    padding: '8px 10px',
                    border: '1px solid #e0c6f7',
                    borderRadius: 6,
                    fontSize: '1rem',
                  }}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  style={{
                    padding: '8px 10px',
                    border: '1px solid #e0c6f7',
                    borderRadius: 6,
                    fontSize: '1rem',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(90deg, #73037a 60%, #9c27b0 100%)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 6,
                    padding: '10px 0',
                    fontWeight: 600,
                    fontSize: '1.05rem',
                    cursor: 'pointer',
                    marginTop: 6,
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          ) : (
            <div>
              <h3 style={{ color: '#73037a', marginBottom: 10 }}>Messages</h3>
              <div className="side-contact-modal-messages">
                {messages.map((msg, i) => (
                  <div key={i} style={{
                    textAlign: msg.from === 'user' ? 'right' : 'left',
                    color: msg.from === 'user' ? '#9c27b0' : '#333',
                    margin: '6px 0',
                  }}>
                    <span>{msg.text}</span>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              <input
                className="side-contact-modal-message-input"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type your message..."
                onKeyDown={e => e.key === 'Enter' && handleSend()}
              />
              <button className="side-contact-modal-send-btn" onClick={handleSend}>
                Send
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
