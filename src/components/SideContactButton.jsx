import React, { useState, useEffect } from 'react';
import { FaRobot, FaChevronDown } from 'react-icons/fa';
import './SideContactButton.css';
import SideContactModal from './SideContactModal';

const SideContactButton = () => {
  const [show, setShow] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 500);
    // Show welcome only on first visit (per session)
    const welcomed = sessionStorage.getItem('sideContactWelcomed');
    console.log('SideContactButton: session welcomed?', welcomed);
    if (!welcomed) {
      setShowWelcome(true);
      sessionStorage.setItem('sideContactWelcomed', '1');
      console.log('SideContactButton: showing welcome message');
    }
  }, []);

  const handleClick = () => {
    setModalOpen(true);
    setShowWelcome(false);
    console.log('SideContactButton: button clicked, modal open');
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    console.log('SideContactButton: modal closed');
  };

  return (
    <>
      <button
        className={`side-contact-btn${show ? ' visible' : ''}`}
        onClick={modalOpen ? handleCloseModal : handleClick}
        aria-label={modalOpen ? 'Close Contact Modal' : 'Contact'}
      >
        {modalOpen ? <FaChevronDown size={28} /> : <FaRobot size={28} />}
      </button>
      {showWelcome && (
        <div className="side-welcome-msg" style={{ position: 'relative', paddingRight: 32 }}>
          Welcome! Click the button to contact me.
          <button
            style={{
              position: 'absolute',
              top: 6,
              right: 8,
              background: 'none',
              border: 'none',
              color: '#73037a',
              fontSize: '1.1rem',
              cursor: 'pointer',
              padding: 0,
              lineHeight: 1
            }}
            aria-label="Close welcome message"
            onClick={() => {
              setShowWelcome(false);
              console.log('SideContactButton: welcome message closed by user');
            }}
          >
            &times;
          </button>
        </div>
      )}
  {modalOpen && <SideContactModal onClose={handleCloseModal} />}
    </>
  );
};

export default SideContactButton;
