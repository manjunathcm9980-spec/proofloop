import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ThreeBackground } from './components/ThreeBackground';
import { Home } from './pages/Home';
import { ProblemsPage } from './pages/ProblemsPage';
import { ProblemDetailPage } from './pages/ProblemDetailPage';
import { CreateProblemPage } from './pages/CreateProblemPage';
import { DashboardPage } from './pages/DashboardPage';
import { ProofWallPage } from './pages/ProofWallPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';

export function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-[#0B0E14] text-[#F2F0EB] selection:bg-[#FFB020] selection:text-[#0B0E14] relative">
          {/* 3D Animated Interactive Canvas Background */}
          <ThreeBackground />

          {/* Foreground Application Content */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/problems" element={<ProblemsPage />} />
                <Route path="/problems/:id" element={<ProblemDetailPage />} />
                <Route path="/create-problem" element={<CreateProblemPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/wall" element={<ProofWallPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
