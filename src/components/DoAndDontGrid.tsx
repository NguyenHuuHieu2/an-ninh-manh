import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { DOS_AND_DONTS } from '../data/ageGroups';

export const DoAndDontGrid: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-900 tracking-wide uppercase mb-2">
            <span>TÓM TẮT DỄ NHỚ NHẤT</span>
            <span aria-hidden="true">·</span>
            <span>KHÔNG CẦN NHỚ ĐIỀU LUẬT</span>
            <span aria-hidden="true">·</span>
            <span>ÁP DỤNG NGAY</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 tracking-tight">
            Bảng Đối Chiếu: Việc Nên Làm vs Tuyệt Đối Tránh
          </h2>
          <p className="text-slate-700 mt-1 text-sm sm:text-base leading-relaxed">
            Chỉ cần nhớ 4 nguyên tắc đối chiếu dưới đây là bạn đã tránh được 90% rủi ro bị cơ quan chức năng xử phạt tiền hoặc vướng rắc rối pháp lý trên không gian mạng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {DOS_AND_DONTS.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="bg-blue-50/70 px-5 py-3 border-b border-blue-100 text-xs sm:text-sm font-extrabold text-blue-950 uppercase tracking-wide">
                Chủ đề: {item.category}
              </div>
              <div className="p-5 space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3 text-emerald-950 bg-emerald-50/80 p-3.5 rounded-xl border border-emerald-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs font-bold text-emerald-800 uppercase tracking-wide mb-0.5">
                      Nên làm:
                    </strong>
                    <span className="leading-relaxed">{item.do}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-rose-950 bg-rose-50/80 p-3.5 rounded-xl border border-rose-200">
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs font-bold text-rose-800 uppercase tracking-wide mb-0.5">
                      Tuyệt đối tránh:
                    </strong>
                    <span className="leading-relaxed">{item.dont}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
