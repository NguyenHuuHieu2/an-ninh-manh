/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar, ScreenId } from './components/Navbar';
import { HomeScreen } from './screens/HomeScreen';
import { CasesScreen } from './screens/CasesScreen';
import { QuizScreen } from './screens/QuizScreen';
import { AboutScreen } from './screens/AboutScreen';
import { ReferencesScreen } from './screens/ReferencesScreen';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('home');
  const [isLargeFont, setIsLargeFont] = useState(false);

  const handleNavigate = (screen: ScreenId) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickScan = () => {
    if (currentScreen !== 'home') {
      setCurrentScreen('home');
      setTimeout(() => {
        const el = document.getElementById('soi-chieu');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('soi-chieu');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 pb-16 lg:pb-0 ${isLargeFont ? 'text-[17px] leading-relaxed [&_p]:text-base [&_h3]:text-xl [&_h2]:text-3xl' : ''}`}>
      <Navbar
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        isLargeFont={isLargeFont}
        onToggleLargeFont={() => setIsLargeFont((prev) => !prev)}
        onQuickScanClick={handleQuickScan}
      />

      <main className="flex-1">
        {currentScreen === 'home' && (
          <HomeScreen
            onNavigateToCases={() => handleNavigate('cases')}
            onNavigateToQuiz={() => handleNavigate('quiz')}
          />
        )}

        {currentScreen === 'cases' && <CasesScreen />}

        {currentScreen === 'quiz' && <QuizScreen />}

        {currentScreen === 'about' && <AboutScreen />}

        {currentScreen === 'references' && <ReferencesScreen />}
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Mobile 5-tab Navigation */}
      <MobileBottomNav currentScreen={currentScreen} onNavigate={handleNavigate} />
    </div>
  );
}
