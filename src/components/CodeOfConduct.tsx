import React, { useState } from 'react';
import { CheckSquare, Shield, Clock } from 'lucide-react';
import { CODE_OF_CONDUCT, THREE_SECOND_PAUSE } from '../data/socialCodeOfConduct';
import awarenessImg from '@/src/assets/images/social_media_awareness_1792609422093.jpg';

export const CodeOfConduct: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CODE_OF_CONDUCT[0].id);

  const selectedRule = CODE_OF_CONDUCT.find((r) => r.id === activeTab) || CODE_OF_CONDUCT[0];

  return (
    <section id="quy-tac" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-red-700 tracking-wide mb-2">
            <span>BỘ QUY TẮC ỨNG XỬ MXH</span>
            <span aria-hidden="true">·</span>
            <span>QUYẾT ĐỊNH 874/QĐ-BTTTT</span>
            <span aria-hidden="true">·</span>
            <span>VĂN HÓA SỐ VĂN MINH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Trách Nhiệm & Văn Hóa Ứng Xử Của Người Dùng Mạng Xã Hội
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
            Bộ Quy tắc ứng xử trên mạng xã hội do Bộ Thông tin và Truyền thông ban hành nhằm xây dựng chuẩn mực đạo đức, hành vi ứng xử văn minh và an toàn cho mọi cá nhân, tổ chức tại Việt Nam.
          </p>
        </div>

        {/* 3-Second Golden Rule Banner */}
        <div className="mb-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2.5 text-xs font-bold text-amber-700 tracking-wide uppercase mb-3">
            <Clock className="w-4 h-4" />
            <span>Quy Tắc Vàng: "Dừng Lại 3 Giây" Trước Khi Đăng Hoặc Chia Sẻ</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {THREE_SECOND_PAUSE.map((item) => (
              <div key={item.step} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="text-xl font-extrabold text-red-700 font-mono">
                  {item.step}
                </div>
                <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Split Section: Image & 4 Interactive Rules */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Visual card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs">
            <div className="relative h-64 sm:h-72 lg:h-full">
              <img
                src={awarenessImg}
                alt="Kiểm chứng thông tin mạng xã hội trước khi chia sẻ"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <p className="text-xs font-bold text-amber-300">NÓI KHÔNG VỚI BẠO LỰC MẠNG</p>
                  <p className="text-xs text-slate-200">
                    Bảo vệ bản thân và cộng đồng bằng cách không chia sẻ tin đồn ác ý hay tấn công cá nhân.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rules Interactive Tab & Checklist */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-slate-100">
                {CODE_OF_CONDUCT.map((rule) => {
                  const active = activeTab === rule.id;
                  return (
                    <button
                      key={rule.id}
                      onClick={() => setActiveTab(rule.id)}
                      className={`px-3 py-2 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                        active
                          ? 'bg-red-700 text-white shadow-xs'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      {rule.name.split('.')[1]?.trim() || rule.name}
                    </button>
                  );
                })}
              </div>

              <div className="pt-5 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{selectedRule.name}</h3>
                  <p className="text-xs font-medium text-red-700 mt-1">{selectedRule.shortDesc}</p>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    {selectedRule.fullDesc}
                  </p>
                </div>

                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center gap-1.5">
                    <CheckSquare className="w-4 h-4 text-emerald-600" />
                    <span>Checklist hành động cho người dùng thông thái</span>
                  </h4>
                  <div className="space-y-2">
                    {selectedRule.checklist.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50/70 p-3 rounded-lg border border-slate-100">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                          ✓
                        </div>
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-red-700" />
                <span>Áp dụng cho mọi công dân và tổ chức tham gia không gian số</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
