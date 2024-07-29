// Menu.js
import React from 'react';
import '../styles/Menu.css';
import { useNavigate } from 'react-router';

const Menu = ({ showLogin }) => {
  const Navigate = useNavigate();

  const goto_About = () => {
    Navigate('/about');
  };
  const goto_ChattingBot = () => {
    Navigate('/chattingBot');
  };
  const goto_More = () => {
    Navigate('/more');
  };
  const goto_Login = () => {
    Navigate('/login');
  };

  return (
    <div className="menu_box">
      <button className="About_AZA" onClick={goto_About}>
        About AZA
      </button>
      <button className="Chatting_Bot" onClick={goto_ChattingBot}>
        Chatting Bot
      </button>
      <button className="More" onClick={goto_More}>
        More
      </button>
      {showLogin && (
        <button className="Login" onClick={goto_Login}>
          Login
        </button>
      )}
    </div>
  );
};

export default Menu;
