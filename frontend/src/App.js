import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Playground from './components/Playground';
import ThemeProvider from './styles/ThemeProvider';
import { AxiosProvider } from './services/AxiosProvider';

function App() {
  return (
    <AxiosProvider>
      <ThemeProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playground" element={<Playground />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AxiosProvider>
  );
}

export default App;
