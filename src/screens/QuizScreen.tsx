import React from 'react';
import { CitizenQuiz } from '../components/CitizenQuiz';
import { FAQS } from '../data/faq';
import { HelpCircle } from 'lucide-react';

export const QuizScreen: React.FC = () => {
  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
      {/* Tiêu Đề Màn Hình 3 */}
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-900 tracking-wide uppercase mb-2">
          <span>MÀN HÌNH 3: TRẮC NGHIỆM TỰ KIỂM TRA KIẾN THỨC</span>
          <span aria-hidden="true">·</span>
          <span>ĐÁNH GIÁ Ý THỨC PHÁP LUẬT</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-950 tracking-tight">
          Kiểm Tra Nhanh: Bạn Có Vô Tình Vi Phạm Luật An Ninh Mạng?
        </h1>
        <p className="text-slate-700 mt-2 text-sm sm:text-base leading-relaxed">
          Thực hiện bài trắc nghiệm gồm các tình huống thực tế để đo lường độ am hiểu pháp luật an ninh mạng của bản thân. Mỗi câu hỏi đều có phân tích điều luật và chế tài tương ứng.
        </p>

        {/* Dòng Lưu Ý Tham Khảo */}
        <div className="mt-4 bg-amber-50/90 border border-amber-300 rounded-xl p-3 text-xs text-amber-950 flex items-start gap-2.5">
          <HelpCircle className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
          <span>
            <strong>Lưu ý:</strong> Nội dung bài trắc nghiệm và câu hỏi ôn tập chỉ mang tính chất tham khảo giáo dục phổ biến kiến thức, không thay thế văn bản quy phạm pháp luật chính thức.
          </span>
        </div>
      </div>

      {/* Bài Thi Trắc Nghiệm Tương Tác */}
      <CitizenQuiz />

      {/* Tài Liệu Ôn Tập Nhanh */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-2 text-blue-900 font-bold text-xs sm:text-sm uppercase tracking-wide">
          <HelpCircle className="w-4 h-4 text-blue-900" />
          <span>Tài Liệu Ôn Tập Nhanh: 5 Câu Hỏi Cốt Lõi</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FAQS.map((faq) => (
            <div key={faq.id} className="p-4.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm">
              <h3 className="font-bold text-blue-950 flex items-start gap-2">
                <span className="text-blue-900 font-mono font-extrabold">Hỏi:</span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                {faq.answer}
              </p>
              <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-600 gap-1">
                <span className="font-mono text-blue-950 font-semibold">Căn cứ pháp lý: {faq.lawCite}</span>
                <span className="text-blue-900 font-sans font-bold">{faq.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
