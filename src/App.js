import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import './App.css';
import Main from './pages/Main';
import About from './pages/About';
import ChattingBot from './pages/ChattingBot';
import More from './pages/More';
import Login from './pages/Login';
import DiagSimple from './pages/DiagSimple';
import DiagSimple2 from './pages/DiagSimple2';
import DiagMore from './pages/DiagMore';
import DiagMore2 from './pages/DiagMore2';
import DiagMore3 from './pages/DiagMore3';
import DiagMore4 from './pages/DiagMore4';

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
          <Route path="/diagSimple2" element={<DiagSimple2 />} />
          <Route path="/diagMore" element={<DiagMore />} />
          <Route path="/diagMore2" element={<DiagMore2 />} />
          <Route path="/diagMore3" element={<DiagMore3 />} />
          <Route path="/diagMore4" element={<DiagMore4 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
