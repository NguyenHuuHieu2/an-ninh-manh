import React from 'react';
import { Home, Compass, Award, Info, BookOpen } from 'lucide-react';
import { ScreenId } from './Navbar';

interface MobileBottomNavProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ currentScreen, onNavigate }) => {
  const tabs: { id: ScreenId; label: string; icon: React.ElementType }[] = [
    { id: 'home', label: 'Trang chủ', icon: Home },
    { id: 'cases', label: 'Tình huống', icon: Compass },
    { id: 'quiz', label: 'Trắc nghiệm', icon: Award },
    { id: 'about', label: 'Giới thiệu', icon: Info },
    { id: 'references', label: 'Nguồn luật', icon: BookOpen },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/98 backdrop-blur-md border-t border-slate-200 lg:hidden pb-safe shadow-lg">
      <div className="grid grid-cols-5 items-center h-16 max-w-lg mx-auto px-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentScreen === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                onNavigate(tab.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`min-h-[48px] flex flex-col items-center justify-center transition-colors cursor-pointer ${
                isActive ? 'text-blue-900 font-bold' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-blue-900 stroke-[2.5]' : 'text-slate-400'}`} />
              <span className={`text-[11px] mt-1 tracking-tight ${isActive ? 'font-bold text-blue-950' : 'font-medium'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
