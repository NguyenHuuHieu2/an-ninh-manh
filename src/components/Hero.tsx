import React from 'react';
import { ShieldCheck, BookOpen, Scale, ArrowRight } from 'lucide-react';
import heroImg from '@/src/assets/images/hero_cybersecurity_law_1792609421666.jpg';

interface HeroProps {
  onExploreClick: () => void;
  onScanClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onScanClick }) => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Context & Action */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-red-700 tracking-wide">
              <span>LUẬT AN NINH MẠNG 2018</span>
              <span aria-hidden="true">·</span>
              <span>NGHỊ ĐỊNH 15/2020/NĐ-CP</span>
              <span aria-hidden="true">·</span>
              <span>VĂN HÓA SỐ</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
              Hiểu Luật Trên Mạng, Tránh Phạt Vô Tình, Bảo Vệ Bản Thân
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Nhiều người dùng mạng xã hội tại Việt Nam vô tình bị xử phạt tiền từ 5 đến 20 triệu đồng
              hoặc vướng vòng lao lý do không nắm rõ quy định về tin giả, bóc phốt nợ nần, chia sẻ dữ liệu CCCD
              và quy tắc ứng xử trên không gian số. Cẩm nang này giúp bạn nắm vững ranh giới pháp lý chỉ trong vài phút.
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
              <span className="text-slate-700 font-bold">Dành cho độ tuổi:</span>
              <a href="#lua-tuoi" className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-md text-slate-700 transition-colors">13 - 18 tuổi (Học sinh)</a>
              <span aria-hidden="true">·</span>
              <a href="#lua-tuoi" className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-md text-slate-700 transition-colors">19 - 45 tuổi (Đi làm)</a>
              <span aria-hidden="true">·</span>
              <a href="#lua-tuoi" className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-md text-slate-700 transition-colors">46 - 65 tuổi (Trung & cao tuổi)</a>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onScanClick}
                className="min-h-[48px] inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-red-700 hover:bg-red-800 rounded-xl transition-colors shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Kiểm tra bài viết trước khi đăng</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onExploreClick}
                className="min-h-[48px] inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer border border-slate-200"
              >
                <BookOpen className="w-4 h-4 text-slate-500" />
                <span>Tra cứu 8 nhóm hành vi cấm</span>
              </button>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="font-medium text-slate-700">Căn cứ pháp luật hiện hành</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-amber-600" />
                <span className="font-medium text-slate-700">Mức phạt hành chính & hình sự rõ ràng</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 group">
              <img
                src={heroImg}
                alt="Minh họa Luật An ninh mạng và bảo vệ công dân số Việt Nam"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-5">
                <div className="text-white text-xs space-y-1">
                  <p className="font-bold text-sm text-amber-300">Không Gian Mạng Không Phải Là Nơi Vô Pháp</p>
                  <p className="text-slate-200">Mọi hành vi xúc phạm danh dự, tung tin giả, bóc phốt đều có chế tài xử lý nghiêm minh.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-column quick facts row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-200">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-2xl font-extrabold text-slate-900 tabular-nums">5 - 20 Triệu</div>
            <div className="text-xs text-slate-600 mt-1">Mức phạt tiền phổ biến đối với hành vi chia sẻ tin giả, bóc phốt, xúc phạm danh dự</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-2xl font-extrabold text-red-700 tabular-nums">Điều 101, 102</div>
            <div className="text-xs text-slate-600 mt-1">Nghị định 15/2020/NĐ-CP điều chỉnh trách nhiệm sử dụng mạng xã hội</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-2xl font-extrabold text-slate-900 tabular-nums">100% Đồng Đẳng</div>
            <div className="text-xs text-slate-600 mt-1">Người chia sẻ lại (share) bài viết sai cũng bị xử phạt như người đăng ban đầu</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-2xl font-extrabold text-emerald-700 tabular-nums">QĐ 874/QĐ-BTTTT</div>
            <div className="text-xs text-slate-600 mt-1">Bộ Quy tắc ứng xử chuẩn mực trên MXH của Bộ Thông tin & Truyền thông</div>
          </div>
        </div>
      </div>
    </section>
  );
};
