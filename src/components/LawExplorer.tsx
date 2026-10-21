import React, { useState, useMemo } from 'react';
import { Search, AlertTriangle, ShieldAlert, CheckCircle, Scale, ChevronRight, X } from 'lucide-react';
import { LEGAL_RULES, LegalRuleItem } from '../data/legalRules';

export const LawExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<LegalRuleItem | null>(null);

  const categories = [
    { id: 'all', label: 'Tất Cả Hành Vi' },
    { id: 'fake_news', label: 'Tin Giả & Sai Sự Thật' },
    { id: 'defamation', label: 'Xúc Phạm & Bóc Phốt' },
    { id: 'privacy', label: 'Lộ CCCD & Đời Tư' },
    { id: 'fraud', label: 'Lừa Đảo & Giả Mạo' },
    { id: 'cyberattack', label: 'Hack Nick & Mã Độc' },
    { id: 'security', label: 'Kích Động & Trật Tự' },
    { id: 'harmful_content', label: 'Bạo Lực & Trẻ Em' },
    { id: 'copyright', label: 'Vi Phạm Bản Quyền' },
  ];

  const filteredRules = useMemo(() => {
    return LEGAL_RULES.filter((rule) => {
      const matchCategory = selectedCategory === 'all' || rule.category === selectedCategory;
      const matchSearch =
        searchTerm === '' ||
        rule.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rule.prohibitedAct.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rule.realWorldExample.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rule.legalBasis.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="tra-cuu" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-red-700 tracking-wide mb-2">
            <span>TRA CỨU PHÁP ĐỊNH</span>
            <span aria-hidden="true">·</span>
            <span>NGHỊ ĐỊNH 15/2020/NĐ-CP</span>
            <span aria-hidden="true">·</span>
            <span>CHẾ TÀI XỬ PHẠT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Các Hành Vi Bị Nghiêm Cấm & Mức Phạt Thực Tế
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
            Tra cứu nhanh các hành vi phổ biến người dân hay mắc phải do thiếu hiểu biết pháp luật, kèm theo điều khoản cụ thể và mức phạt hành chính hoặc hình sự.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="space-y-4 mb-8">
          <div className="relative max-w-xl">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm theo từ khóa: bóc phốt, con nợ, CCCD, tin giả, link tải, hack..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all text-slate-900"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Buttons (Interactive controls) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    active
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Rules Grid */}
        {filteredRules.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-xl border border-slate-200">
            <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-900">Không tìm thấy hành vi phù hợp</h3>
            <p className="text-sm text-slate-500 mt-1">Hãy thử tìm với các từ khóa thông dụng như "tin giả", "nợ", "chửi bới", "hình ảnh".</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-red-700 bg-red-50 hover:bg-red-100 rounded-lg transition-colors cursor-pointer"
            >
              Đặt lại bộ lọc
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRules.map((rule) => (
              <div
                key={rule.id}
                className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between hover:shadow-sm hover:border-slate-300 transition-all group"
              >
                <div>
                  {/* Unboxed metadata */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-medium text-slate-700">{rule.categoryName}</span>
                    <span aria-hidden="true">·</span>
                    <span className={rule.riskBadge === 'Rất nghiêm trọng' ? 'text-red-600 font-semibold' : 'text-amber-600 font-medium'}>
                      Mức độ: {rule.riskBadge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-red-700 transition-colors leading-snug mb-2">
                    {rule.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {rule.prohibitedAct}
                  </p>

                  <div className="p-3 bg-red-50/60 rounded-lg border border-red-100 text-xs mb-3 space-y-1">
                    <div className="font-semibold text-red-900 flex items-center gap-1.5">
                      <Scale className="w-3.5 h-3.5 text-red-700 shrink-0" />
                      <span>Xử phạt hành chính:</span>
                    </div>
                    <div className="text-red-800 leading-relaxed">
                      {rule.adminPenalty}
                    </div>
                  </div>

                  <div className="text-xs text-slate-500 italic mb-3">
                    <strong className="not-italic text-slate-700">Ví dụ thực tế: </strong>
                    {rule.realWorldExample}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono truncate max-w-[180px]">
                    {rule.legalBasis.split(';')[0]}
                  </span>
                  <button
                    onClick={() => setActiveItem(rule)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 hover:text-red-800 transition-colors cursor-pointer"
                  >
                    <span>Xem chi tiết luật</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal Detail View */}
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-5 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <div className="text-xs text-slate-500 mb-1">
                    <span>{activeItem.categoryName}</span>
                    <span className="mx-2">·</span>
                    <span className="text-red-600 font-semibold">{activeItem.riskBadge}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{activeItem.title}</h3>
                </div>
                <button
                  onClick={() => setActiveItem(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Hành vi bị pháp luật nghiêm cấm
                  </h4>
                  <p className="text-slate-800 leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                    {activeItem.prohibitedAct}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Căn cứ pháp lý
                  </h4>
                  <p className="text-slate-700 font-mono text-xs bg-slate-100 p-2.5 rounded-md">
                    {activeItem.legalBasis}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-lg bg-amber-50 border border-amber-200">
                    <div className="text-xs font-bold text-amber-900 mb-1 flex items-center gap-1.5">
                      <Scale className="w-4 h-4 text-amber-700" />
                      <span>Xử phạt hành chính</span>
                    </div>
                    <div className="text-xs text-amber-800 leading-relaxed">
                      {activeItem.adminPenalty}
                    </div>
                  </div>

                  {activeItem.criminalPenalty ? (
                    <div className="p-3.5 rounded-lg bg-red-50 border border-red-200">
                      <div className="text-xs font-bold text-red-900 mb-1 flex items-center gap-1.5">
                        <ShieldAlert className="w-4 h-4 text-red-700" />
                        <span>Chế tài hình sự (nếu có)</span>
                      </div>
                      <div className="text-xs text-red-800 leading-relaxed">
                        {activeItem.criminalPenalty}
                      </div>
                    </div>
                  ) : (
                    <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="text-xs font-bold text-slate-700 mb-1">Chế tài bổ sung</div>
                      <div className="text-xs text-slate-600 leading-relaxed">
                        Buộc gỡ bỏ thông tin vi phạm, công khai xin lỗi và cải chính thông tin trên phương tiện thông tin.
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Ví dụ tình huống đời thường
                  </h4>
                  <p className="text-slate-700 text-xs italic bg-slate-50 p-3 rounded-lg border border-slate-200">
                    "{activeItem.realWorldExample}"
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Cách ứng xử đúng chuẩn mực pháp luật</span>
                  </h4>
                  <p className="text-slate-800 text-xs leading-relaxed bg-emerald-50/70 p-3 rounded-lg border border-emerald-200">
                    {activeItem.correctConduct}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setActiveItem(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                >
                  Đã hiểu quy định
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
