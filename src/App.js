import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './pages/Main';
import About from './pages/About';
import ChattingBot from './pages/ChattingBot';
import More from './pages/More';
import Login from './pages/Login';
import DiagSimple from './pages/DiagSimple';
import DiagMore from './pages/DiagMore';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/chattingBot" element={<ChattingBot />} />
          <Route path="/more" element={<More />} />
          <Route path="/login" element={<Login />} />
          <Route path="/diagSimple" element={<DiagSimple />} />
          <Route path="/diagMore" element={<DiagMore />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
