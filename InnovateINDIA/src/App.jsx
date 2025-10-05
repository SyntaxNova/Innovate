
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FieldSelection from './pages/FieldSelection';
import IdeaSubmission from './pages/IdeaSubmission';
import CommunityFeed from './pages/CommunityFeed';
import './App.css';

/**
 * Main App Component
 * Sets up routing for the entire application with React Router
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
        {/* Header component - appears on all pages */}
        <Header />
        
        {/* Main content area with routing */}
        <main className="flex-1">
          <Routes>
            {/* Home page route */}
            <Route path="/" element={<Home />} />
            
            {/* Field selection page route */}
            <Route path="/fields/:fieldId" element={<FieldSelection />} />
            
            {/* Idea submission page route */}
            <Route path="/submit/:fieldId/:subcategory" element={<IdeaSubmission />} />
            
            {/* Community feed page route */}
            <Route path="/community" element={<CommunityFeed />} />
          </Routes>
        </main>
        
        {/* Footer component - appears on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;