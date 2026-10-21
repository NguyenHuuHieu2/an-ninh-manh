import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, AlertTriangle, ShieldCheck, Copy, Check, Sparkles, RefreshCw } from 'lucide-react';

interface ScanIssue {
  type: string;
  explanation: string;
  lawReference: string;
  penalty: string;
}

interface ScanResult {
  riskLevel: 'SAFE' | 'WARNING' | 'DANGEROUS';
  score: number;
  summary: string;
  issues: ScanIssue[];
  recommendations: string[];
  safeRevision: string;
}

export const RiskScanner: React.FC = () => {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const sampleDrafts = [
    {
      label: 'Ví dụ 1: Bóc phốt nợ nần (Rủi ro cao)',
      text: 'Mọi người cẩn thận con này tên Nguyễn Thị A, số CCCD 001234567890, sđt 0987654321 quỵt nợ 15 triệu của tôi không trả rồi block. Mặt dày vô liêm sỉ, lừa đảo khắp nơi!',
    },
    {
      label: 'Ví dụ 2: Tin đồn thiên tai (Rủi ro cao)',
      text: 'Khẩn cấp! Vừa nghe người quen trong ngành báo hồ thủy điện sắp xả lũ bất ngờ vỡ đập trong đêm, chết người hàng loạt mà báo đài đang giấu. Ai đọc được share ngay cho người thân sơ tán gấp!',
    },
    {
      label: 'Ví dụ 3: Đánh giá văn minh (An toàn)',
      text: 'Hôm nay mình có ghé trải nghiệm quán ăn tại địa chỉ X. Món ăn nêm nếm hơi ngọt so với khẩu vị của mình và phục vụ hơi chậm vào giờ cao điểm. Hy vọng quán sẽ cải thiện tốc độ phục vụ.',
    },
  ];

  const handleScan = async () => {
    if (!content.trim()) {
      setErrorMsg('Vui lòng nhập nội dung bài viết hoặc bình luận bạn dự định đăng.');
      return;
    }
    setErrorMsg('');
    setIsLoading(true);
    setResult(null);

    try {
      const res = await fetch('/api/scan-post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postContent: content }),
      });

      if (!res.ok) {
        throw new Error('Không thể kết nối đến máy chủ phân tích.');
      }

      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      console.error(err);
      setErrorMsg('Đã có lỗi xảy ra trong quá trình soi chiếu. Vui lòng thử lại.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (result?.safeRevision) {
      navigator.clipboard.writeText(result.safeRevision);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="soi-chieu" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-900 tracking-wide uppercase mb-2">
            <span>CÔNG CỤ KIỂM TRA PHÁP LÝ</span>
            <span aria-hidden="true">·</span>
            <span>RÀ SOÁT RỦI RO PHÁT NGÔN</span>
            <span aria-hidden="true">·</span>
            <span>CHỈNH SỬA AN TOÀN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight">
            Soi Chiếu Nội Dung Trước Khi Bấm Đăng
          </h2>
          <p className="text-slate-700 mt-2 text-sm sm:text-base leading-relaxed">
            Dán bài viết, bài đăng bóc phốt, tin tức hoặc bình luận bạn dự định đăng lên mạng xã hội. Hệ thống sẽ phân tích các dấu hiệu vi phạm Nghị định 15/2020/NĐ-CP và đưa ra giải pháp sửa đổi chuẩn pháp lý.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Ô Nhập Bài Viết */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-6 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <label htmlFor="post-content" className="text-xs sm:text-sm font-bold text-blue-950 uppercase tracking-wide">
                  Nội dung cần kiểm tra:
                </label>
                <span className="text-xs text-slate-500 tabular-nums font-semibold">
                  {content.length} ký tự
                </span>
              </div>

              <textarea
                id="post-content"
                rows={6}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Nhập hoặc dán nội dung bài viết, status, bình luận dự kiến đăng trên Facebook, TikTok, Zalo..."
                className="w-full p-4 text-base bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 text-slate-900 leading-relaxed resize-y shadow-2xs"
              />

              {errorMsg && (
                <div className="text-xs sm:text-sm text-rose-700 font-semibold flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Các Mẫu Có Sẵn */}
              <div className="space-y-1.5 pt-1">
                <span className="text-xs sm:text-sm text-slate-700 font-bold block">Hoặc thử với mẫu tình huống:</span>
                <div className="flex flex-col gap-2">
                  {sampleDrafts.map((draft, idx) => (
                    <button
                      key={idx}
                      onClick={() => setContent(draft.text)}
                      className="text-left text-xs sm:text-sm text-slate-700 hover:text-blue-950 bg-white hover:bg-blue-50/50 p-3 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <span className="truncate pr-2 font-medium">{draft.label}</span>
                      <span className="text-xs text-blue-900 font-bold shrink-0">Thử ngay</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={handleScan}
                  disabled={isLoading}
                  className="flex-1 min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-blue-900 hover:bg-blue-950 disabled:bg-slate-300 rounded-xl transition-colors shadow-xs cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Đang phân tích đối chiếu luật...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>Kiểm tra rủi ro pháp lý ngay</span>
                    </>
                  )}
                </button>
                {content && (
                  <button
                    onClick={() => { setContent(''); setResult(null); }}
                    className="min-h-[48px] px-5 py-3 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors cursor-pointer"
                  >
                    Xóa
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Khung Kết Quả Kiểm Tra */}
          <div className="lg:col-span-6">
            {!result && !isLoading && (
              <div className="p-8 sm:p-12 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center mx-auto border border-blue-200">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-blue-950">Kết quả kiểm định pháp lý sẽ hiện tại đây</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-md mx-auto leading-relaxed">
                    Hệ thống sẽ rà soát các từ ngữ nhạy cảm, thông tin chưa được kiểm chứng, dấu hiệu xúc phạm danh dự nhân phẩm hoặc tiết lộ đời tư cá nhân theo quy định của pháp luật Việt Nam.
                  </p>
                </div>
                <div className="flex justify-center gap-3 text-xs text-slate-500 pt-2 border-t border-slate-200 font-mono">
                  <span>Điều 8, 16 Luật ANM</span>
                  <span aria-hidden="true">·</span>
                  <span>Điều 101 NĐ 15/2020</span>
                  <span aria-hidden="true">·</span>
                  <span>QĐ 874 Bộ TT&TT</span>
                </div>
              </div>
            )}

            {isLoading && (
              <div className="p-12 rounded-2xl border border-slate-200 bg-white text-center space-y-4 shadow-xs">
                <RefreshCw className="w-8 h-8 text-blue-900 animate-spin mx-auto" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-blue-950">Đang đối chiếu quy định pháp luật...</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Đang tra cứu cơ sở dữ liệu Nghị định 15/2020/NĐ-CP và Luật An ninh mạng 2018.
                  </p>
                </div>
              </div>
            )}

            {result && (
              <div className="space-y-4">
                {/* Header Kết Quả */}
                <div
                  className={`p-5 rounded-2xl border-2 flex items-start justify-between gap-4 ${
                    result.riskLevel === 'SAFE'
                      ? 'bg-emerald-50 border-emerald-300'
                      : result.riskLevel === 'WARNING'
                      ? 'bg-amber-50 border-amber-300'
                      : 'bg-rose-50 border-rose-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {result.riskLevel === 'SAFE' ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    ) : result.riskLevel === 'WARNING' ? (
                      <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <span
                        className={`text-sm sm:text-base font-extrabold ${
                          result.riskLevel === 'SAFE'
                            ? 'text-emerald-950'
                            : result.riskLevel === 'WARNING'
                            ? 'text-amber-950'
                            : 'text-rose-950'
                        }`}
                      >
                        {result.riskLevel === 'SAFE'
                          ? 'AN TOÀN - KHÔNG VI PHẠM'
                          : result.riskLevel === 'WARNING'
                          ? 'CẦN LƯU Ý - CÓ YẾU TỐ NHẠY CẢM'
                          : 'NGUY CƠ CAO VI PHẠM PHÁP LUẬT'}
                      </span>
                      <p
                        className={`text-xs sm:text-sm mt-1.5 leading-relaxed ${
                          result.riskLevel === 'SAFE'
                            ? 'text-emerald-900'
                            : result.riskLevel === 'WARNING'
                            ? 'text-amber-900'
                            : 'text-rose-900'
                        }`}
                      >
                        {result.summary}
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-2xl font-extrabold text-blue-950 tabular-nums">
                      {result.score}<span className="text-xs text-slate-500 font-normal">/100</span>
                    </div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Điểm an toàn</div>
                  </div>
                </div>

                {/* Các Yếu Tố Vi Phạm */}
                {result.issues && result.issues.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-xs sm:text-sm font-bold text-blue-950 uppercase tracking-wide">
                      Các yếu tố vi phạm phát hiện ({result.issues.length})
                    </h4>
                    {result.issues.map((issue, idx) => (
                      <div key={idx} className="bg-white p-4.5 rounded-xl border border-slate-200 space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm gap-1">
                          <span className="font-bold text-blue-950">{issue.type}</span>
                          <span className="text-blue-900 font-mono text-xs font-semibold bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                            Căn cứ pháp lý: {issue.lawReference}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {issue.explanation}
                        </p>
                        <div className="p-3 bg-blue-50 rounded-xl text-xs sm:text-sm text-blue-950 font-medium">
                          <strong>Mức xử phạt dự kiến:</strong> {issue.penalty}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Khuyến Nghị Sửa Đổi */}
                {result.recommendations && result.recommendations.length > 0 && (
                  <div className="bg-slate-50 p-4.5 rounded-xl border border-slate-200 space-y-2">
                    <h4 className="text-xs sm:text-sm font-bold text-blue-950 uppercase tracking-wide">
                      Khuyến nghị từ chuyên gia pháp lý
                    </h4>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                      {result.recommendations.map((rec, i) => (
                        <li key={i}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Gợi Ý Viết Lại An Toàn */}
                {result.safeRevision && (
                  <div className="bg-blue-50/70 p-5 rounded-2xl border border-blue-200 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-bold text-blue-950 uppercase tracking-wide">
                        Gợi ý nội dung đã chuẩn hóa an toàn:
                      </span>
                      <button
                        onClick={handleCopy}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-950 transition-colors cursor-pointer"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                        <span>{copied ? 'Đã sao chép' : 'Sao chép văn bản'}</span>
                      </button>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 bg-white p-3.5 rounded-xl border border-blue-200 leading-relaxed italic">
                      "{result.safeRevision}"
                    </p>
                  </div>
                )}

                {/* Dòng Lưu Ý Tham Khảo */}
                <div className="text-[11px] sm:text-xs text-slate-500 bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-start gap-2">
                  <span className="font-bold text-blue-950 shrink-0">Lưu ý:</span>
                  <span>Kết quả soi chiếu mang tính chất tham khảo cảnh báo sớm, không thay thế cho kết luận chính thức của cơ quan có thẩm quyền.</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
