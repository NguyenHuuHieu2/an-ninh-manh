import React, { useState } from 'react';
import { Award, CheckCircle2, XCircle, ArrowRight, RotateCcw, Scale, HelpCircle } from 'lucide-react';
import { QUIZ_SCENARIOS, QuizScenario, QuizOption } from '../data/quizScenarios';

export const CitizenQuiz: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<QuizOption | null>(null);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [userName, setUserName] = useState('');
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: boolean }>({});

  const currentScenario: QuizScenario = QUIZ_SCENARIOS[currentIndex];

  const handleSelectOption = (opt: QuizOption) => {
    if (isSubmitted) return;
    setSelectedOption(opt);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption) return;
    setIsSubmitted(true);
    if (selectedOption.isCorrect) {
      setScore((prev) => prev + 1);
      setUserAnswers((prev) => ({ ...prev, [currentIndex]: true }));
    } else {
      setUserAnswers((prev) => ({ ...prev, [currentIndex]: false }));
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < QUIZ_SCENARIOS.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsSubmitted(false);
    setQuizFinished(false);
    setUserAnswers({});
  };

  return (
    <section id="thu-thach" className="py-6 sm:py-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {!quizFinished ? (
          <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
            {/* Thanh Tiến Độ */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-900 uppercase">
                <HelpCircle className="w-4 h-4 text-blue-900" />
                <span>Câu hỏi {currentIndex + 1} / {QUIZ_SCENARIOS.length}</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-blue-950 tabular-nums">
                Điểm số: <span className="text-blue-900 font-extrabold">{score}</span> / {QUIZ_SCENARIOS.length}
              </div>
            </div>

            {/* Nội Dung Tình Huống */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-blue-950">{currentScenario.title}</h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                  "{currentScenario.situation}"
                </p>
              </div>

              <div className="pt-2">
                <h4 className="text-base sm:text-lg font-bold text-blue-950 mb-3.5">
                  {currentScenario.question}
                </h4>

                {/* Danh Sách Các Lựa Chọn */}
                <div className="space-y-3">
                  {currentScenario.options.map((opt) => {
                    const isSelected = selectedOption?.id === opt.id;
                    let optionStyle = 'bg-white border-slate-300 hover:border-blue-900 text-slate-800';

                    if (isSubmitted) {
                      if (opt.isCorrect) {
                        optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold';
                      } else if (isSelected && !opt.isCorrect) {
                        optionStyle = 'bg-rose-50 border-rose-500 text-rose-950 font-semibold';
                      } else {
                        optionStyle = 'bg-white border-slate-200 opacity-60 text-slate-500';
                      }
                    } else if (isSelected) {
                      optionStyle = 'bg-blue-50 border-blue-900 text-blue-950 ring-2 ring-blue-900';
                    }

                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleSelectOption(opt)}
                        disabled={isSubmitted}
                        className={`w-full text-left p-4.5 rounded-2xl border text-sm sm:text-base transition-all flex items-start gap-3.5 cursor-pointer min-h-[52px] ${optionStyle}`}
                      >
                        <div className="mt-0.5 shrink-0">
                          {isSubmitted ? (
                            opt.isCorrect ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                            ) : isSelected ? (
                              <XCircle className="w-5 h-5 text-rose-600" />
                            ) : (
                              <div className="w-5 h-5 rounded-full border border-slate-300" />
                            )
                          ) : (
                            <div
                              className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                isSelected ? 'border-blue-900 bg-blue-900' : 'border-slate-300'
                              }`}
                            >
                              {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                            </div>
                          )}
                        </div>
                        <div className="flex-1 leading-relaxed">
                          {opt.text}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Giải Thích Đáp Án Chi Tiết Sau Khi Bấm Kiểm Tra */}
              {isSubmitted && selectedOption && (
                <div className="mt-4 p-5 rounded-2xl bg-white border border-slate-200 space-y-3 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2">
                    {selectedOption.isCorrect ? (
                      <div className="flex items-center gap-1.5 text-sm font-bold text-emerald-800">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <span>Đáp án chính xác!</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 text-sm font-bold text-rose-800">
                        <XCircle className="w-5 h-5 text-rose-600" />
                        <span>Chưa chính xác!</span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {selectedOption.feedback}
                  </p>

                  <div className="pt-2.5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm">
                    <span className="flex items-center gap-1.5 text-blue-950 font-mono font-semibold">
                      <Scale className="w-4 h-4 text-blue-900" />
                      <span>Căn cứ pháp lý: {currentScenario.legalReference}</span>
                    </span>
                    <span className="text-slate-600 italic">
                      💡 {currentScenario.practicalTip}
                    </span>
                  </div>
                </div>
              )}

              {/* Phím Điều Hướng */}
              <div className="pt-4 flex items-center justify-between gap-3">
                <span className="text-xs sm:text-sm text-slate-500">
                  Chọn câu trả lời và bấm Kiểm tra
                </span>

                {!isSubmitted ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={!selectedOption}
                    className="min-h-[48px] inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-900 hover:bg-blue-950 disabled:bg-slate-300 rounded-xl transition-colors shadow-xs cursor-pointer"
                  >
                    <span>Kiểm tra đáp án</span>
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="min-h-[48px] inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-950 hover:bg-blue-900 rounded-xl transition-colors shadow-xs cursor-pointer"
                  >
                    <span>{currentIndex + 1 < QUIZ_SCENARIOS.length ? 'Câu tiếp theo' : 'Xem kết quả'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Màn Hình Kết Quả & Cấp Chứng Nhận */
          <div className="max-w-2xl mx-auto bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center mx-auto shadow-xs border border-blue-200">
              <Award className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-950">
                Bạn Đã Hoàn Thành Thử Thách!
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mt-2">
                Kết quả: Bạn đạt <strong className="text-blue-900 font-extrabold tabular-nums">{score}/{QUIZ_SCENARIOS.length}</strong> câu trả lời chính xác.
              </p>
              {score >= 4 ? (
                <p className="text-xs sm:text-sm text-emerald-800 font-bold mt-2">
                  Xuất sắc! Bạn có hiểu biết pháp luật vững vàng và ý thức công dân số rất tốt.
                </p>
              ) : (
                <p className="text-xs sm:text-sm text-amber-900 font-semibold mt-2">
                  Hãy tiếp tục tra cứu thêm các điều luật để tránh vô tình vi phạm trên mạng xã hội nhé!
                </p>
              )}
            </div>

            {/* Giấy Chứng Nhận */}
            <div className="p-6 sm:p-8 bg-white rounded-2xl border-2 border-blue-900 shadow-md text-center space-y-4 relative overflow-hidden">
              <div className="text-xs sm:text-sm font-extrabold tracking-widest text-blue-900 uppercase">
                CHỨNG NHẬN CÔNG DÂN SỐ THÔNG THÁI
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Chứng nhận đã hoàn thành bài kiểm tra nhận thức pháp lý an ninh mạng và trách nhiệm người dùng mạng xã hội Việt Nam.
              </p>

              <div className="max-w-sm mx-auto pt-2">
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                  Nhập họ và tên của bạn để in chứng nhận:
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Ví dụ: Nguyễn Văn An"
                  className="w-full text-center text-base sm:text-lg font-extrabold text-blue-950 border-b-2 border-slate-300 pb-1 focus:outline-none focus:border-blue-900 bg-transparent"
                />
              </div>

              {userName && (
                <div className="text-xs sm:text-sm text-emerald-800 font-bold pt-1">
                  Người được cấp: <span className="uppercase text-blue-950 font-extrabold">{userName}</span>
                </div>
              )}

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-1">
                <span>Tuân thủ Luật An ninh mạng 2018</span>
                <span>Nghị định 15/2020/NĐ-CP & NĐ 14/2022</span>
              </div>
            </div>

            {/* Dòng Lưu Ý Tham Khảo */}
            <div className="text-[11px] sm:text-xs text-slate-500 bg-amber-50/70 p-3 rounded-xl border border-amber-200 text-left">
              <strong>Lưu ý:</strong> Chứng nhận mang tính chất vinh danh và khích lệ tinh thần học hỏi pháp luật số, không có giá trị pháp lý hành chính thay thế văn bằng, chứng chỉ chính thức.
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={handleRestart}
                className="min-h-[48px] inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Làm lại thử thách</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
