import React, { useState, useEffect, useRef } from 'react';
import image from '../assets/main.png';
import '../styles/ChattingBot.css';
import { IoIosSend } from 'react-icons/io';
import { LuBaby } from 'react-icons/lu';
import { sendMessageToBot } from '../api/ChatApi'; // 분리된 API 요청 함수 임포트

const ChattingBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null); // 스크롤 조정용 ref 생성

  const handleSend = async () => {
    if (input.trim() === '') return;

    // 사용자 메시지를 추가합니다.
    const userMessage = { role: 'user', content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // 봇의 응답을 받아옵니다.
    const botMessageContent = await sendMessageToBot(input); // API 요청 함수 호출

    // 봇의 응답을 추가합니다.
    const botMessage = { role: 'bot', content: botMessageContent };
    setMessages((prevMessages) => [...prevMessages, botMessage]);

    // 입력 필드를 비웁니다.
    setInput('');
  };

  // messages 업데이트 시 스크롤을 하단으로 이동
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
    const elements = document.querySelectorAll('.fade-element'); // 오타 수정됨
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
    <div className="">
      <img src={image} alt="Background" className="chat-background_img" />
      <div className="chat-line"></div>
      <div className="chatbot-container">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message-container ${msg.role}`}>
              {msg.role === 'bot' && <LuBaby className="bot-icon" />}
              <div className={`message ${msg.role}`}>{msg.content}</div>
            </div>
          ))}
          <div ref={messagesEndRef} /> {/* 메시지 끝에 ref 추가 */}
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
