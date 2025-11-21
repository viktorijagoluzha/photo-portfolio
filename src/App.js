import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { MainLayout } from './components/templates';
import { HomePage, JoinUsPage } from './pages';
import './App.css';

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/join-us" element={<JoinUsPage />} />
          </Routes>
        </MainLayout>
      </Router>
    </LanguageProvider>
  );
};

export default App;