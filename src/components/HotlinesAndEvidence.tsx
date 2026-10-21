import React, { useState } from 'react';
import { Phone, ExternalLink, ShieldCheck, FileText, Check, Copy } from 'lucide-react';
import { OFFICIAL_HOTLINES, EVIDENCE_COLLECTION_GUIDE } from '../data/hotlines';
import handbookImg from '@/src/assets/images/legal_handbook_shield_1792609422468.jpg';

export const HotlinesAndEvidence: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyPhone = (id: string, phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="duong-day-nong" className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-900 tracking-wide uppercase mb-2">
            <span>BẢO VỆ QUYỀN LỢI</span>
            <span aria-hidden="true">·</span>
            <span>ĐƯỜNG DÂY NÓNG CHÍNH THỨC</span>
            <span aria-hidden="true">·</span>
            <span>LẬP VI BẰNG CHỨNG CỨ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight">
            Cách Xử Lý & Cơ Quan Tiếp Nhận Tố Giác Khi Bị Xâm Hại
          </h2>
          <p className="text-slate-700 mt-2 text-sm sm:text-base leading-relaxed">
            Nếu bạn là nạn nhân của bóc phốt vu khống, lừa đảo trực tuyến hoặc bị tống tiền, hãy thực hiện ngay các bước lưu giữ chứng cứ số hợp pháp và liên hệ đường dây nóng dưới đây.
          </p>
        </div>

        {/* 4 Bước Bảo Tồn Bằng Chứng Điện Tử */}
        <div className="mb-14">
          <h3 className="text-lg sm:text-xl font-bold text-blue-950 mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-900" />
            <span>4 Bước Bảo Tồn Bằng Chứng Điện Tử Đúng Chuẩn Pháp Luật</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {EVIDENCE_COLLECTION_GUIDE.map((step) => (
              <div key={step.step} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-950 font-extrabold font-mono text-base flex items-center justify-center mb-3 border border-blue-200">
                    0{step.step}
                  </div>
                  <h4 className="text-base font-bold text-blue-950">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-700 mt-1.5 leading-relaxed">{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Danh Bạ Cơ Quan Chức Năng */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-blue-950 mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-900" />
              <span>Danh Bạ Cơ Quan Chức Năng Tiếp Nhận Phản Ánh</span>
            </h3>

            <div className="space-y-3.5">
              {OFFICIAL_HOTLINES.map((hotline) => (
                <div key={hotline.id} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div>
                      <h4 className="text-base font-bold text-blue-950">{hotline.agencyName}</h4>
                      <p className="text-xs sm:text-sm text-slate-700 mt-1">{hotline.role}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={`tel:${hotline.phone.replace(/[^0-9]/g, '')}`}
                        className="min-h-[48px] inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-blue-900 hover:bg-blue-950 rounded-xl transition-colors cursor-pointer"
                      >
                        <Phone className="w-4 h-4" />
                        <span className="tabular-nums font-mono">{hotline.phone}</span>
                      </a>
                      <button
                        onClick={() => handleCopyPhone(hotline.id, hotline.phone)}
                        className="min-h-[48px] min-w-[48px] p-2 text-slate-500 hover:text-slate-800 rounded-xl hover:bg-slate-100 transition-colors border border-slate-200 flex items-center justify-center cursor-pointer"
                        title="Sao chép số điện thoại"
                      >
                        {copiedId === hotline.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <strong className="text-blue-950 font-bold">Hướng dẫn: </strong>{hotline.instructions}
                  </p>

                  {hotline.website && (
                    <div className="pt-1 flex items-center gap-1.5 text-xs sm:text-sm">
                      <span className="text-slate-500 font-medium">Cổng trực tuyến:</span>
                      <a
                        href={hotline.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-900 hover:text-blue-950 hover:underline font-bold inline-flex items-center gap-1"
                      >
                        <span>{hotline.website}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Banner Cảnh Giác */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl overflow-hidden border-2 border-blue-900 bg-blue-950 shadow-md">
            <div className="relative h-64 sm:h-72 lg:h-full">
              <img
                src={handbookImg}
                alt="Sổ tay an toàn không gian mạng và quyền công dân"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-950/50 to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
                    <ShieldCheck className="w-5 h-5 text-amber-300" />
                    <span>LỜI KHUYÊN PHÁP LÝ THIẾT THỰC</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                    Tuyệt đối không tìm đến các dịch vụ "hacker lấy lại tiền bị lừa" hay "đánh sập Facebook người khác" trên mạng. 99% các dịch vụ này là bẫy lừa đảo tiếp theo! Hãy làm việc duy nhất với cơ quan Công an có thẩm quyền.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
