import React, { useState, useEffect } from 'react';
import image from '../assets/main.png';
import '../styles/ChattingBot.css';
import { IoIosSend } from 'react-icons/io';
import { LuBaby } from 'react-icons/lu'; // AZANG icon 후보

const ChattingBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);

    //const botMessageContent = await sendMessage(input);
    //const botMessage = { role: 'bot', content: botMessageContent };
    //setMessages([...messages, userMessage, botMessage]);

    setInput('');
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      {
        threshold: 0.1, // 요소가 10% 이상 보일 때 콜백 실행
      }
    );

    // 감시할 요소들 선택
    const elements = document.querySelectorAll('.fade-element');
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="fade-element">
      <img src={image} alt="Background" className="chat-background_img" />
      <div className="chat-line"></div>
      <div className="chatbot-container">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
              {msg.content}
            </div>
          ))}
        </div>
        <div className="input-container">
          <div className="input-box">
            <div className="input-rectangle">
              <input
                type="text"
                value={input}
                placeholder="Ask me anything ..."
                className="chat-input"
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
            </div>
          </div>
          <div className="chatBtn-container">
            <button className="chatBtn-box" onClick={handleSend}>
              <IoIosSend className="chatBtn-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChattingBot;
