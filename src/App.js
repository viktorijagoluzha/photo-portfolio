import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { MainLayout } from './components/templates';
import { HomePage } from './pages';
import './App.css';

const App = () => {
  return (
    <LanguageProvider>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </LanguageProvider>
  );
};

export default App;