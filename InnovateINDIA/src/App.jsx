import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FieldSelection from './pages/FieldSelection';
import IdeaSubmission from './pages/IdeaSubmission';
import CommunityFeed from './pages/CommunityFeed';
import './App.css';

function App() {
  useEffect(() => {
    const ai = new GoogleGenAI({
      apiKey: 'AIzaSyAAtVVdHGT-QlL6Y7sP1cyR4RxmtICgaHQ', // Replace with your key
    });

    // Mount the chatbot to a container
    ai.chat({ container: '#chat-container' });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fields/:fieldId" element={<FieldSelection />} />
            <Route path="/submit/:fieldId/:subcategory" element={<IdeaSubmission />} />
            <Route path="/community" element={<CommunityFeed />} />
          </Routes>
        </main>

        <Footer />

        {/* Gemini Chatbot container */}
        <div
          id="chat-container"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '350px',
            height: '500px',
            zIndex: 1000,
          }}
        ></div>
      </div>
    </Router>
  );
}

export default App;
