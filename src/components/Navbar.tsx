import React from 'react';
import { Shield, Type, Sparkles } from 'lucide-react';

export type ScreenId = 'home' | 'cases' | 'quiz' | 'about' | 'references';

interface NavbarProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  isLargeFont: boolean;
  onToggleLargeFont: () => void;
  onQuickScanClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  isLargeFont,
  onToggleLargeFont,
  onQuickScanClick,
}) => {
  const navItems: { id: ScreenId; label: string }[] = [
    { id: 'home', label: '1. Trang Chủ' },
    { id: 'cases', label: '2. Tình Huống Thực Tế' },
    { id: 'quiz', label: '3. Trắc Nghiệm' },
    { id: 'about', label: '4. Giới Thiệu' },
    { id: 'references', label: '5. Nguồn Tham Khảo' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-3">
        {/* Khu vực 1: Logo và Tên Cẩm Nang */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 text-slate-900 whitespace-nowrap shrink-0 group text-left cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center shadow-xs shrink-0">
            <Shield className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-blue-950 group-hover:text-blue-800 transition-colors block">
              An Ninh Mạng
            </span>
            <span className="text-[11px] text-slate-500 hidden sm:block font-medium">
              Pháp Luật & Văn Hóa Số Việt Nam
            </span>
          </div>
        </button>

        {/* Khu vực 2: 5 Màn hình trên máy tính */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold">
          {navItems.map((item) => {
            const active = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`min-h-[44px] px-3.5 py-2 rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'text-blue-950 bg-blue-50 border border-blue-200 font-bold shadow-2xs'
                    : 'text-slate-600 hover:text-blue-900 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Khu vực 3: Nút Chữ To (Người cao tuổi) & Nút Soi Bài */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onToggleLargeFont}
            className={`min-h-[44px] min-w-[44px] px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer border ${
              isLargeFont
                ? 'bg-amber-100 border-amber-300 text-amber-950 ring-2 ring-amber-400'
                : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
            }`}
            title="Bật/Tắt cỡ chữ to cho người lớn tuổi"
            aria-label="Điều chỉnh cỡ chữ"
          >
            <Type className="w-4 h-4 text-blue-900" />
            <span className="font-semibold">{isLargeFont ? 'Chữ To (Bật)' : 'Chữ To'}</span>
          </button>

          <button
            onClick={onQuickScanClick}
            className="min-h-[44px] inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-blue-900 hover:bg-blue-950 active:bg-blue-800 rounded-xl transition-colors shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Soi Bài Đăng</span>
          </button>
        </div>
      </div>
    </header>
  );
};
