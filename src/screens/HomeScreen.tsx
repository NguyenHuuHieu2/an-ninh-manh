import React, { useState, useMemo } from 'react';
import { Search, Scale, AlertTriangle, ShieldAlert, Sparkles, X, ChevronRight, ShieldCheck, Volume2, Square, BookOpen } from 'lucide-react';
import { CYBER_VIOLATIONS_15, CyberViolationItem } from '../data/cyberViolationsData';
import { RiskScanner } from '../components/RiskScanner';
import { SituationLookupAI } from '../components/SituationLookupAI';
import { speakVietnamese, stopSpeaking, isSpeaking } from '../utils/speech';
import heroImg from '@/src/assets/images/hero_cybersecurity_law_1792609421666.jpg';

interface HomeScreenProps {
  onNavigateToCases: () => void;
  onNavigateToQuiz: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigateToCases, onNavigateToQuiz }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<CyberViolationItem | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  // Nhóm vi phạm từ tệp dữ liệu 15 lỗi
  const groups = useMemo(() => {
    const set = new Set(CYBER_VIOLATIONS_15.map((item) => item.nhomViPham));
    return ['Tất Cả (15 lỗi)', ...Array.from(set)];
  }, []);

  const popularSearches = ['Bóc phốt đòi nợ', 'Tin đồn bão lũ', 'Đăng ảnh CCCD', 'Miệt thị ngoại hình', 'Hack nick', 'Việc nhẹ lương cao'];

  const filteredViolations = useMemo(() => {
    return CYBER_VIOLATIONS_15.filter((item) => {
      const matchGroup = selectedGroup === 'all' || selectedGroup === 'Tất Cả (15 lỗi)' || item.nhomViPham === selectedGroup;
      const matchSearch =
        searchTerm === '' ||
        item.tenHanhVi.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.moTaNgan.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tinhHuongMinhHoa.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tenVanBan.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.dieuKhoan.toLowerCase().includes(searchTerm.toLowerCase());
      return matchGroup && matchSearch;
    });
  }, [searchTerm, selectedGroup]);

  const handleSpeak = (item: CyberViolationItem) => {
    if (speakingId === item.id || isSpeaking()) {
      stopSpeaking();
      setSpeakingId(null);
    } else {
      setSpeakingId(item.id);
      const text = `${item.tenHanhVi}. Nhóm vi phạm: ${item.nhomViPham}. Mô tả ngắn: ${item.moTaNgan}. Mức phạt: ${item.mucPhat}. Tình huống thực tế: ${item.tinhHuongMinhHoa}. Căn cứ pháp lý: ${item.dieuKhoan} ${item.tenVanBan}.`;
      speakVietnamese(text, () => setSpeakingId(null));
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Phần Giới Thiệu & Ô Tìm Kiếm Nổi Bật */}
      <section className="bg-white border-b border-slate-200 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-900 tracking-wide uppercase">
                <span>CẨM NANG PHÁP LUẬT AN NINH MẠNG</span>
                <span aria-hidden="true">·</span>
                <span>15 LỖI VI PHẠM PHỔ BIẾN</span>
                <span aria-hidden="true">·</span>
                <span>DỄ HIỂU CHO MỌI NHÀ</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight leading-[1.2]" style={{ textWrap: 'balance' }}>
                Hiểu Rõ Pháp Luật An Ninh Mạng, Tránh Phạt Vô Tình
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
                Không gian mạng không phải là nơi vô luật pháp. Tra cứu nhanh 15 lỗi vi phạm an ninh mạng phổ biến nhất người dân hay mắc phải, nắm rõ mức phạt từ 5 đến 20 triệu đồng và kiểm tra bài viết trước khi đăng.
              </p>

              {/* Ô Tìm Kiếm Lớn Phù Hợp Mọi Thiết Bị */}
              <div className="pt-2">
                <div className="relative max-w-xl">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-900" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Tìm nhanh: bóc phốt nợ, tin đồn bão lũ, lộ số CCCD, hack nick..."
                    className="w-full min-h-[54px] pl-12 pr-10 py-3.5 text-base sm:text-lg bg-slate-50 border-2 border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 focus:bg-white text-slate-900 shadow-xs transition-all"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-2 cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>

                {/* Từ Khóa Gợi Ý Nhanh */}
                <div className="flex flex-wrap items-center gap-2 mt-3.5 text-xs sm:text-sm text-slate-600">
                  <span className="font-bold text-blue-950">Gợi ý tìm kiếm:</span>
                  {popularSearches.map((tag, i) => (
                    <button
                      key={i}
                      onClick={() => setSearchTerm(tag)}
                      className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-900 font-medium rounded-lg border border-blue-200 transition-colors cursor-pointer"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Các Phím Điều Hướng Nhanh */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onNavigateToCases}
                  className="min-h-[48px] px-5 py-3 rounded-xl text-sm sm:text-base font-bold bg-blue-900 text-white hover:bg-blue-950 transition-colors shadow-xs cursor-pointer flex items-center gap-2"
                >
                  <span>Xem 5 tình huống thực tế</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onNavigateToQuiz}
                  className="min-h-[48px] px-5 py-3 rounded-xl text-sm sm:text-base font-bold bg-white text-blue-950 hover:bg-slate-100 border-2 border-blue-900 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>Trắc nghiệm kiểm tra kiến thức</span>
                  <Sparkles className="w-4 h-4 text-blue-900" />
                </button>
              </div>

              {/* Dòng Lưu Ý Tham Khảo */}
              <div className="bg-amber-50/90 border border-amber-300 rounded-xl p-3 text-xs text-amber-950 flex items-start gap-2.5">
                <Scale className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                <span>
                  <strong>Lưu ý:</strong> Mọi thông tin, hướng dẫn và phân tích trên ứng dụng chỉ mang tính chất tham khảo, không thay thế văn bản quy phạm pháp luật chính thức.
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border-2 border-blue-900 shadow-md bg-blue-950 relative">
                <img
                  src={heroImg}
                  alt="Minh họa Luật An ninh mạng Việt Nam"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-transparent flex items-end p-6 text-white">
                  <div className="space-y-1">
                    <p className="font-extrabold text-sm sm:text-base text-amber-300">Không Gian Mạng Không Phải Là Ảo</p>
                    <p className="text-slate-200 text-xs sm:text-sm">Mọi hành vi xúc phạm danh dự, tung tin giả, bóc phốt đều có chế tài xử phạt nghiêm minh.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Danh Sách 15 Lỗi Vi Phạm Phổ Biến Nhất */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-900 tracking-wide mb-1 uppercase">
              <span>BẢNG TRA CỨU 15 LỖI VI PHẠM</span>
              <span aria-hidden="true">·</span>
              <span>DỮ LIỆU ĐỘC LẬP DỄ CẬP NHẬT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950">
              15 Lỗi Vi Phạm An Ninh Mạng Người Dân Dễ Mắc Phải
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-slate-600 font-medium">
            Hiển thị <strong className="text-blue-950 font-bold tabular-nums">{filteredViolations.length}</strong> / 15 hành vi vi phạm
          </div>
        </div>

        {/* Các Nút Lọc Theo Nhóm Vi Phạm */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {groups.map((group, idx) => {
            const active = selectedGroup === group || (selectedGroup === 'all' && idx === 0);
            return (
              <button
                key={idx}
                onClick={() => setSelectedGroup(group)}
                className={`min-h-[46px] px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  active
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-blue-950'
                }`}
              >
                {group}
              </button>
            );
          })}
        </div>

        {/* Lưới 15 Lỗi Vi Phạm */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredViolations.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 flex flex-col justify-between hover:shadow-md hover:border-blue-900 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 mb-2.5">
                  <span className="font-bold text-blue-900">{item.nhomViPham}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-slate-400 font-semibold">#{item.id.toUpperCase()}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-blue-950 group-hover:text-blue-800 transition-colors leading-snug mb-2.5">
                  {item.tenHanhVi}
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3.5">
                  {item.moTaNgan}
                </p>

                {/* Khung Mức Phạt */}
                <div className="p-3.5 bg-blue-50/70 rounded-xl border border-blue-200 text-xs sm:text-sm mb-3.5 space-y-1">
                  <div className="font-bold text-blue-950 flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-blue-900 shrink-0" />
                    <span>Mức phạt tiền & chế tài:</span>
                  </div>
                  <div className="text-slate-800 leading-relaxed font-semibold">
                    {item.mucPhat}
                  </div>
                </div>

                {/* Tình Huống Đời Thực */}
                <div className="text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200 italic mb-3">
                  <strong className="not-italic text-blue-950 font-bold block mb-0.5">Tình huống thực tế: </strong>
                  "{item.tinhHuongMinhHoa}"
                </div>

                {/* Điều Khoản Pháp Luật */}
                <div className="text-xs text-slate-600 font-mono pt-1">
                  <strong className="font-sans font-bold text-slate-800">Căn cứ: </strong>{item.dieuKhoan} — {item.tenVanBan}
                </div>
              </div>

              {/* Nút Thao Tác Bên Dưới */}
              <div className="pt-3.5 mt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleSpeak(item)}
                  className={`min-h-[42px] px-3 py-1.5 text-xs sm:text-sm rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer border ${
                    speakingId === item.id
                      ? 'bg-blue-900 text-white font-bold border-blue-900'
                      : 'text-slate-700 bg-slate-50 border-slate-200 hover:bg-slate-100'
                  }`}
                  title="Nghe giọng đọc"
                >
                  {speakingId === item.id ? <Square className="w-4 h-4 fill-current" /> : <Volume2 className="w-4 h-4 text-blue-900" />}
                  <span>{speakingId === item.id ? 'Dừng đọc' : 'Nghe đọc'}</span>
                </button>

                <button
                  onClick={() => setActiveItem(item)}
                  className="min-h-[42px] inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-950 transition-colors cursor-pointer"
                >
                  <span>Xem chi tiết</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tra Cứu Tình Huống Thông Minh Bằng AI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <SituationLookupAI />
      </section>

      {/* Công Cụ Soi Chiếu Rủi Ro Bài Đăng */}
      <RiskScanner />

      {/* Hộp Thoại Chi Tiết Lỗi Vi Phạm */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-blue-900 shadow-2xl p-6 sm:p-8 space-y-5 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <div className="text-xs sm:text-sm text-blue-900 font-bold mb-1">
                  <span>{activeItem.nhomViPham}</span>
                  <span className="mx-2 text-slate-300">·</span>
                  <span className="font-mono text-slate-500 font-semibold">#{activeItem.id.toUpperCase()}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-blue-950">{activeItem.tenHanhVi}</h3>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="p-2.5 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4 text-sm sm:text-base">
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Mô tả hành vi dễ hiểu
                </h4>
                <p className="text-slate-800 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                  {activeItem.moTaNgan}
                </p>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Căn cứ pháp lý áp dụng
                </h4>
                <div className="p-4 rounded-xl bg-slate-100 font-mono text-xs sm:text-sm text-slate-800 space-y-1">
                  <div><strong>Điều khoản:</strong> {activeItem.dieuKhoan}</div>
                  <div><strong>Tên văn bản:</strong> {activeItem.tenVanBan}</div>
                </div>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-bold text-blue-950 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-blue-900" />
                  <span>Mức phạt tiền & chế tài xử lý</span>
                </h4>
                <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-xs sm:text-sm text-blue-950 leading-relaxed font-semibold">
                  {activeItem.mucPhat}
                </div>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Tình huống thực tế đời sống
                </h4>
                <p className="text-slate-800 text-xs sm:text-sm leading-relaxed bg-amber-50/70 p-4 rounded-xl border border-amber-200 italic">
                  "{activeItem.tinhHuongMinhHoa}"
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => handleSpeak(activeItem)}
                className="min-h-[44px] px-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 text-slate-800 hover:bg-slate-100 flex items-center gap-2 cursor-pointer font-semibold"
              >
                <Volume2 className="w-4 h-4 text-blue-900" />
                <span>Nghe đọc toàn bộ</span>
              </button>

              <button
                onClick={() => setActiveItem(null)}
                className="min-h-[48px] px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-900 hover:bg-blue-950 rounded-xl transition-colors cursor-pointer"
              >
                Đã hiểu quy định
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
