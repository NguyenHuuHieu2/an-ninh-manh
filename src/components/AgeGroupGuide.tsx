import React, { useState } from 'react';
import { Users, AlertTriangle, ShieldCheck, Volume2, Square } from 'lucide-react';
import { AGE_GROUP_GUIDES } from '../data/ageGroups';
import { speakVietnamese, stopSpeaking, isSpeaking } from '../utils/speech';

export const AgeGroupGuide: React.FC = () => {
  const [selectedGroupId, setSelectedGroupId] = useState(AGE_GROUP_GUIDES[0].id);
  const [speaking, setSpeaking] = useState(false);

  const currentGroup = AGE_GROUP_GUIDES.find((g) => g.id === selectedGroupId) || AGE_GROUP_GUIDES[0];

  const handleToggleAudio = () => {
    if (speaking || isSpeaking()) {
      stopSpeaking();
      setSpeaking(false);
    } else {
      const textToRead = `${currentGroup.groupTitle}, dành cho độ tuổi ${currentGroup.ageRange}. ${currentGroup.targetUserDesc}. Các lỗi dễ mắc phải nhất: ${currentGroup.mainPitfalls.join('. ')}. Lời khuyên an toàn: ${currentGroup.safeRules.map(r => r.rule).join('. ')}. Tình huống thực tế: ${currentGroup.warningCase}`;
      setSpeaking(true);
      speakVietnamese(textToRead, () => setSpeaking(false));
    }
  };

  const handleTabChange = (groupId: string) => {
    if (speaking) {
      stopSpeaking();
      setSpeaking(false);
    }
    setSelectedGroupId(groupId);
  };

  return (
    <section id="lua-tuoi" className="py-14 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-red-700 tracking-wide mb-2">
            <span>HƯỚNG DẪN THEO ĐỘ TUỔI</span>
            <span aria-hidden="true">·</span>
            <span>TỪ 13 ĐẾN 65 TUỔI</span>
            <span aria-hidden="true">·</span>
            <span>DỄ HIỂU · KHÔNG DÙNG TỪ KHÔ KHAN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Cẩm Nang Tránh Vi Phạm Dành Riêng Cho Lứa Tuổi Của Bạn
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
            Mỗi lứa tuổi khi dùng Internet lại có thói quen và rủi ro khác nhau. Chọn độ tuổi của bạn hoặc người thân trong gia đình để xem lời khuyên phù hợp nhất.
          </p>
        </div>

        {/* Age Selector Tabs - Optimized for touch target >= 44px */}
        <div className="flex flex-wrap gap-2 mb-8">
          {AGE_GROUP_GUIDES.map((group) => {
            const isActive = selectedGroupId === group.id;
            return (
              <button
                key={group.id}
                onClick={() => handleTabChange(group.id)}
                className={`min-h-[48px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm ring-2 ring-slate-900'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
                }`}
              >
                <Users className="w-4 h-4 shrink-0" />
                <span>{group.ageRange}</span>
                <span className="font-normal opacity-80 text-xs hidden sm:inline">({group.groupTitle.split('&')[0]})</span>
              </button>
            );
          })}
        </div>

        {/* Selected Group Content Card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-8 space-y-6 shadow-xs">
          {/* Header of the age card with Audio Readout */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
            <div>
              <div className="text-xs font-semibold text-red-700 uppercase tracking-wide">
                Độ tuổi {currentGroup.ageRange}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                {currentGroup.groupTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {currentGroup.targetUserDesc}
              </p>
            </div>

            {/* Audio Readout Button (Helpful for seniors or on mobile) */}
            <button
              onClick={handleToggleAudio}
              className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shrink-0 ${
                speaking
                  ? 'bg-red-700 text-white animate-pulse'
                  : 'bg-white border border-slate-300 text-slate-800 hover:bg-slate-100 shadow-2xs'
              }`}
              title="Đọc nội dung bằng giọng nói"
            >
              {speaking ? <Square className="w-4 h-4 fill-current" /> : <Volume2 className="w-4 h-4 text-red-700" />}
              <span>{speaking ? 'Dừng đọc giọng nói' : '🔊 Nghe đọc phần này'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Common pitfalls */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-red-700 font-bold text-xs uppercase tracking-wide">
                <AlertTriangle className="w-4 h-4" />
                <span>Các lỗi vô tình dễ mắc phải nhất</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {currentGroup.mainPitfalls.map((pitfall, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      ✕
                    </span>
                    <span className="leading-relaxed">{pitfall}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Golden safety rules */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wide">
                <ShieldCheck className="w-4 h-4" />
                <span>Quy tắc an toàn bảo vệ bản thân</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm">
                {currentGroup.safeRules.map((ruleItem, idx) => (
                  <div key={idx} className="p-3 bg-emerald-50/60 rounded-lg border border-emerald-100 space-y-1">
                    <div className="font-bold text-emerald-950 flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                        ✓
                      </span>
                      <span>{ruleItem.rule}</span>
                    </div>
                    <div className="text-xs text-slate-600 pl-6 leading-relaxed">
                      {ruleItem.explanation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Real world caution case */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm">
            <div className="font-bold text-amber-900 mb-1">
              Bài học thực tế từ đời sống:
            </div>
            <p className="text-amber-800 leading-relaxed italic">
              "{currentGroup.warningCase}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
