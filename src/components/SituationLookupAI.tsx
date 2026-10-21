import React, { useState } from 'react';
import { Search, Sparkles, Scale, AlertTriangle, CheckCircle2, RefreshCw, XCircle, FileText, CornerDownRight } from 'lucide-react';
import { CyberViolationItem } from '../data/cyberViolationsData';

interface MatchResponse {
  matchFound: boolean;
  message?: string;
  matchedViolation?: CyberViolationItem | null;
  explanation: string;
  advice: string;
}

export const SituationLookupAI: React.FC = () => {
  const [situationText, setSituationText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<MatchResponse | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const sampleScenarios = [
    {
      label: 'Bóc phốt & Đăng ảnh CCCD',
      text: 'Tôi cho bạn vay 15 triệu, đòi mãi không trả nên tôi chụp ảnh 2 mặt CCCD và mặt người đó đăng lên nhóm Facebook cảnh giác để đòi tiền.',
    },
    {
      label: 'Share tin bão lũ giật gân',
      text: 'Tôi thấy một bài viết trên mạng bảo đêm nay hồ thủy điện vỡ đập, nước dâng ngập thị trấn nên tôi bấm nút Chia sẻ về tường để bà con biết sơ tán.',
    },
    {
      label: 'Cuộc gọi tự xưng Công an',
      text: 'Có người gọi điện thoại tự xưng là cán bộ công an thông báo tôi đang dính vào đường dây rửa tiền và yêu cầu chuyển 50 triệu vào tài khoản xác minh.',
    },
    {
      label: 'Tình huống không có trong dữ liệu (Ví dụ: Thừa kế đất)',
      text: 'Gia đình tôi đang có tranh chấp quyền sử dụng đất vườn và phân chia di sản thừa kế của ông bà để lại, trường hợp này bị phạt bao nhiêu?',
    },
  ];

  const handleMatch = async (textToQuery?: string) => {
    const query = textToQuery || situationText;
    if (!query.trim()) {
      setErrorMsg('Vui lòng nhập mô tả tình huống bạn muốn đối chiếu tra cứu.');
      return;
    }
    setErrorMsg('');
    setIsLoading(true);
    setResult(null);

    try {
      const res = await fetch('/api/match-violation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userSituation: query }),
      });

      if (!res.ok) {
        throw new Error('Lỗi kết nối tới máy chủ đối chiếu.');
      }

      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      console.error(err);
      setErrorMsg('Không thể đối chiếu tình huống lúc này. Vui lòng thử lại sau.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-900 tracking-wide uppercase">
          <Sparkles className="w-4 h-4 text-blue-900" />
          <span>TRA CỨU TÌNH HUỐNG THÔNG MINH VỚI AI ĐỐI CHIẾU DỮ LIỆU</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-blue-950 tracking-tight">
          AI Đọc Tình Huống & Đối Chiếu 15 Lỗi Vi Phạm An Ninh Mạng
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          Nhập mô tả sự việc bạn vừa gặp phải hoặc đang băn khoăn. AI sẽ đọc và đối chiếu trực tiếp với tệp 15 lỗi vi phạm an ninh mạng được quy định.
          <strong className="text-blue-950 block mt-1 font-bold">
            * Nguyên tắc bắt buộc: Nếu không tìm thấy căn cứ trong tệp dữ liệu, hệ thống sẽ trả lời là chưa đủ căn cứ và tuyệt đối không tự suy đoán mức phạt.
          </strong>
        </p>
      </div>

      {/* Khung Nhập Mô Tả */}
      <div className="space-y-3">
        <label htmlFor="user-situation" className="text-xs sm:text-sm font-bold text-blue-950 uppercase">
          Mô tả sự việc / hành vi bạn muốn tra cứu:
        </label>
        <textarea
          id="user-situation"
          rows={4}
          value={situationText}
          onChange={(e) => setSituationText(e.target.value)}
          placeholder="Ví dụ: 'Tôi vừa thấy một bài viết chửi bới người khác và đăng ảnh CCCD lên mạng...', 'Có người nhắn tin Zalo rủ làm nhiệm vụ Shopee nạp tiền...'"
          className="w-full p-4 text-base bg-slate-50 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 focus:bg-white text-slate-900 leading-relaxed shadow-2xs"
        />

        {errorMsg && (
          <div className="text-xs sm:text-sm text-rose-700 font-semibold flex items-center gap-1.5">
            <XCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Các Tình Huống Gợi Ý Bấm 1 Chạm */}
        <div className="space-y-2 pt-1">
          <span className="text-xs sm:text-sm text-slate-700 font-bold block">Bấm chọn nhanh một tình huống mẫu để kiểm tra:</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {sampleScenarios.map((sc, i) => (
              <button
                key={i}
                onClick={() => {
                  setSituationText(sc.text);
                  handleMatch(sc.text);
                }}
                className="text-left p-3 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-blue-50/60 hover:border-blue-300 transition-colors text-xs sm:text-sm text-slate-700 cursor-pointer flex flex-col justify-between"
              >
                <span className="font-bold text-blue-950 mb-0.5">{sc.label}</span>
                <span className="text-slate-500 line-clamp-1 italic text-xs">"{sc.text}"</span>
              </button>
            ))}
          </div>
        </div>

        {/* Phím Hành Động */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <button
            onClick={() => handleMatch()}
            disabled={isLoading || !situationText.trim()}
            className="min-h-[48px] px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-blue-900 hover:bg-blue-950 disabled:bg-slate-300 text-white transition-colors shadow-xs cursor-pointer flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>AI đang đọc và đối chiếu tệp dữ liệu...</span>
              </>
            ) : (
              <>
                <Search className="w-4 h-4" />
                <span>Đối chiếu với tệp 15 lỗi vi phạm</span>
              </>
            )}
          </button>
          {situationText && (
            <button
              onClick={() => {
                setSituationText('');
                setResult(null);
                setErrorMsg('');
              }}
              className="min-h-[48px] px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Xóa trắng
            </button>
          )}
        </div>
      </div>

      {/* Khung Hiển Thị Kết Quả Đối Chiếu */}
      {result && (
        <div className="pt-4 border-t border-slate-200 space-y-4 animate-in fade-in duration-200">
          {result.matchFound && result.matchedViolation ? (
            /* TRƯỜNG HỢP 1: TÌM THẤY LỖI KHỚP TRONG TỆP DỮ LIỆU */
            <div className="bg-blue-50/60 rounded-2xl border-2 border-blue-900 p-5 sm:p-7 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-blue-200">
                <div className="flex items-center gap-2 text-blue-950 font-extrabold text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>TÌNH HUỐNG KHỚP VỚI LỖI TRONG TỆP DỮ LIỆU</span>
                </div>
                <span className="text-xs font-mono font-bold text-blue-950 bg-blue-100 px-3 py-1 rounded-lg self-start sm:self-auto border border-blue-300">
                  Mã lỗi #{result.matchedViolation.id.toUpperCase()}
                </span>
              </div>

              <div>
                <span className="text-xs font-bold text-blue-900 uppercase tracking-wide">
                  Nhóm vi phạm: {result.matchedViolation.nhomViPham}
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-blue-950 mt-1">
                  {result.matchedViolation.tenHanhVi}
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 mt-1.5 leading-relaxed">
                  {result.matchedViolation.moTaNgan}
                </p>
              </div>

              {/* Căn cứ pháp lý & Mức phạt */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="p-4 bg-white rounded-xl border border-blue-200 space-y-1">
                  <div className="text-xs sm:text-sm font-bold text-blue-950 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-blue-900" />
                    <span>Căn cứ pháp lý áp dụng:</span>
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-slate-800">
                    {result.matchedViolation.dieuKhoan} — {result.matchedViolation.tenVanBan}
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-blue-200 space-y-1">
                  <div className="text-xs sm:text-sm font-bold text-blue-950 flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-blue-900" />
                    <span>Mức phạt tiền & chế tài theo dữ liệu:</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                    {result.matchedViolation.mucPhat}
                  </div>
                </div>
              </div>

              {/* Đánh Giá Của AI & Lời Khuyên */}
              <div className="p-4.5 bg-white rounded-xl border border-blue-200 space-y-2.5 text-xs sm:text-sm">
                <div>
                  <strong className="text-blue-950 block font-bold mb-1">
                    🔍 Đánh giá đối chiếu của AI:
                  </strong>
                  <p className="text-slate-700 leading-relaxed">
                    {result.explanation}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-100">
                  <strong className="text-blue-950 block font-bold mb-1">
                    💡 Lời khuyên xử sự đúng pháp luật:
                  </strong>
                  <p className="text-slate-800 font-semibold leading-relaxed">
                    {result.advice}
                  </p>
                </div>
              </div>

              {/* Tình Huống Mẫu Tham Khảo */}
              <div className="text-xs sm:text-sm text-slate-600 italic bg-white p-3.5 rounded-xl border border-blue-100">
                <strong className="not-italic text-blue-950 font-bold">Tình huống minh họa trong dữ liệu mẫu: </strong>
                "{result.matchedViolation.tinhHuongMinhHoa}"
              </div>
            </div>
          ) : (
            /* TRƯỜNG HỢP 2: KHÔNG TÌM THẤY CĂN CỨ TRONG TỆP DỮ LIỆU (TUYỆT ĐỐI KHÔNG SUY ĐOÁN PHẠT) */
            <div className="bg-amber-50/80 rounded-2xl border-2 border-amber-300 p-5 sm:p-6 space-y-3.5">
              <div className="flex items-center gap-2 text-amber-950 font-extrabold text-xs sm:text-sm">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                <span>CHƯA ĐỦ CĂN CỨ TRONG TỆP DỮ LIỆU ĐỂ XÁC ĐỊNH LỖI VI PHẠM</span>
              </div>

              <div className="p-4.5 bg-white rounded-xl border border-amber-200 text-xs sm:text-sm space-y-2">
                <p className="font-bold text-amber-950 leading-relaxed">
                  {result.message || 'Hiện chưa đủ căn cứ trong danh mục 15 lỗi an ninh mạng quy định để xác định hành vi vi phạm. Hệ thống tuyệt đối không tự suy đoán mức phạt.'}
                </p>
                <p className="text-slate-700 text-xs leading-relaxed">
                  <strong>Nguyên nhân: </strong>{result.explanation}
                </p>
                <div className="pt-2 border-t border-slate-100 text-xs text-slate-600">
                  <strong>Khuyến nghị: </strong>{result.advice}
                </div>
              </div>

              <div className="text-xs text-amber-900 font-medium flex items-center gap-1.5">
                <CornerDownRight className="w-4 h-4 shrink-0" />
                <span>Nếu cần hỗ trợ pháp lý chính thức cho vụ việc phức tạp ngoài 15 lỗi trên, xin liên hệ Cục An ninh mạng A05 (069.234.3146) hoặc cơ quan Công an gần nhất.</span>
              </div>
            </div>
          )}

          {/* Dòng Lưu Ý Tham Khảo */}
          <div className="text-[11px] sm:text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-start gap-2">
            <Scale className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <span>
              <strong>Lưu ý:</strong> Kết quả đối chiếu tình huống và phân tích của AI chỉ mang tính chất tham khảo, không thay thế văn bản pháp luật chính thức hay quyết định xử phạt của cơ quan tư pháp và cơ quan nhà nước có thẩm quyền.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
