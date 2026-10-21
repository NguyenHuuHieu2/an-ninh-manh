import React, { useState } from 'react';
import { MessageSquare, Send, ChevronDown, ChevronUp, Bot, User, Scale } from 'lucide-react';
import { FAQS, FAQItem } from '../data/faq';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const LegalAssistant: React.FC = () => {
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>(FAQS[0].id);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        'Xin chào bạn! Tôi là Trợ lý Cố vấn Pháp luật An ninh mạng Việt Nam. Bạn đang có băn khoăn về bài viết, quy định xử phạt vi phạm mạng xã hội (Nghị định 15/2020/NĐ-CP) hay cần hỗ trợ tình huống cụ thể nào?',
    },
  ]);
  const [inputQuestion, setInputQuestion] = useState('');
  const [isAsking, setIsAsking] = useState(false);

  const quickPrompts = [
    'Bị người khác bóc phốt nợ nần lên mạng thì phải làm sao?',
    'Chia sẻ lại bài viết sai sự thật có bị phạt tiền không?',
    'Lừa đảo trên mạng bao nhiêu tiền thì bị truy cứu hình sự?',
    'Đăng ảnh căn cước công dân người khác bị phạt bao nhiêu?',
  ];

  const handleSend = async (questionText?: string) => {
    const q = questionText || inputQuestion;
    if (!q.trim() || isAsking) return;

    const userMsg: Message = { role: 'user', content: q };
    setMessages((prev) => [...prev, userMsg]);
    setInputQuestion('');
    setIsAsking(true);

    try {
      const res = await fetch('/api/chat-legal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: q }),
      });

      if (!res.ok) throw new Error('Không thể kết nối đến máy chủ.');

      const data = await res.json();
      const assistantMsg: Message = {
        role: 'assistant',
        content: data.reply || 'Hệ thống đang bận, vui lòng thử lại câu hỏi sau.',
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Theo quy định pháp luật an ninh mạng, mọi hành vi chia sẻ tin tức sai sự thật, xúc phạm danh dự người khác đều bị xử phạt theo Nghị định 15/2020/NĐ-CP. Hãy bảo vệ bằng chứng số và liên hệ cơ quan công an gần nhất.',
        },
      ]);
    } finally {
      setIsAsking(false);
    }
  };

  return (
    <section id="tro-ly" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-red-700 tracking-wide mb-2">
            <span>HỎI ĐÁP PHÁP LUẬT</span>
            <span aria-hidden="true">·</span>
            <span>CÂU HỎI CÔNG DÂN THƯỜNG GẶP</span>
            <span aria-hidden="true">·</span>
            <span>TƯ VẤN TRỰC TUYẾN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Giải Đáp Thắc Mắc & Trợ Lý Pháp Luật Số
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
            Nắm rõ các tình huống pháp lý phổ biến nhất hoặc đặt câu hỏi cho Trợ lý pháp luật để được hướng dẫn chi tiết theo Luật An ninh mạng và các nghị định liên quan.
          </p>
        </div>

        {/* Two-zone layout: FAQ accordion & Interactive Assistant */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* FAQ Accordion */}
          <div className="lg:col-span-6 space-y-3">
            <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Scale className="w-5 h-5 text-red-700" />
              <span>5 Câu Hỏi Pháp Lý Công Dân Thường Mắc Phải</span>
            </h3>

            <div className="space-y-3">
              {FAQS.map((faq: FAQItem) => {
                const isExpanded = expandedFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-slate-50 rounded-xl border border-slate-200 transition-colors overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedFaqId(isExpanded ? null : faq.id)}
                      className="w-full text-left p-4.5 flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-900 hover:text-red-700 cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="p-4.5 pt-0 text-xs text-slate-700 leading-relaxed space-y-2.5 border-t border-slate-200/60 bg-white">
                        <p>{faq.answer}</p>
                        <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                          <span>Căn cứ: {faq.lawCite}</span>
                          <span className="text-slate-400 font-sans">{faq.category}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Chat Assistant */}
          <div className="lg:col-span-6 flex flex-col h-[560px] bg-slate-50 rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            {/* Header */}
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-red-700 text-white flex items-center justify-center">
                  <Bot className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Trợ Lý Tư Vấn Pháp Luật An Ninh Mạng</h4>
                  <div className="text-[10px] text-slate-300">Dẫn luật chính xác · Hướng dẫn dễ hiểu</div>
                </div>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-7 h-7 rounded-full bg-red-700 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5 text-amber-300" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed whitespace-pre-wrap ${
                      msg.role === 'user'
                        ? 'bg-red-700 text-white rounded-tr-xs'
                        : 'bg-white text-slate-800 border border-slate-200 shadow-2xs rounded-tl-xs'
                    }`}
                  >
                    {msg.content}
                  </div>

                  {msg.role === 'user' && (
                    <div className="w-7 h-7 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {isAsking && (
                <div className="flex items-center gap-2 text-xs text-slate-500 italic p-2">
                  <Bot className="w-4 h-4 text-red-700 animate-spin" />
                  <span>Trợ lý đang tra cứu văn bản pháp luật...</span>
                </div>
              )}
            </div>

            {/* Quick Suggestion Prompts */}
            <div className="px-4 py-2 bg-slate-100/80 border-t border-slate-200 overflow-x-auto flex items-center gap-2 scrollbar-none">
              <span className="text-[10px] text-slate-400 font-medium shrink-0">Gợi ý:</span>
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="px-2.5 py-1 text-[11px] bg-white hover:bg-slate-200 border border-slate-200 rounded-md text-slate-600 hover:text-slate-900 whitespace-nowrap shrink-0 transition-colors cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Box */}
            <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
              <input
                type="text"
                value={inputQuestion}
                onChange={(e) => setInputQuestion(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Hỏi về mức phạt, tình huống nợ nần, chia sẻ bài viết..."
                className="flex-1 px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-600 focus:bg-white text-slate-900"
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputQuestion.trim() || isAsking}
                className="p-2 text-white bg-red-700 hover:bg-red-800 disabled:bg-slate-300 rounded-lg transition-colors cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
