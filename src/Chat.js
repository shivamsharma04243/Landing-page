// Chat.js

import React, { useState, useEffect } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // You can fetch initial messages from an API or set up a WebSocket connection here.
    // For simplicity, we'll use local state.

    // Sample initial messages
    setMessages([
      { id: 1, text: 'Hello!', sender: 'user' },
      { id: 2, text: 'Hi there!', sender: 'bot' },
    ]);
  }, []);

  const handleSendMessage = () => {
    // You can send the new message to a server or update local state.
    // For simplicity, we'll update local state.

    const newMessageObject = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
    };

    setMessages([...messages, newMessageObject]);
    setNewMessage(''); // Clear the input field after sending the message
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
