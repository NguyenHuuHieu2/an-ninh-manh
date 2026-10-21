import React from 'react';
import { Shield } from 'lucide-react';
import { ScreenId } from './Navbar';

interface FooterProps {
  onNavigate?: (screen: ScreenId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <Shield className="w-5 h-5 text-blue-400" />
              <span>Cẩm Nang Pháp Luật An Ninh Mạng Việt Nam</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Dự án giáo dục số vì cộng đồng nhằm phổ biến kiến thức Luật An ninh mạng 2018, Nghị định 15/2020/NĐ-CP và Bộ Quy tắc ứng xử trên mạng xã hội, giúp người dân giảm thiểu rủi ro vi phạm pháp luật do không nắm vững quy định.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs mb-3 uppercase tracking-wider">Cơ Sở Pháp Lý</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Luật An ninh mạng số 24/2018/QH14</li>
              <li>Nghị định 15/2020/NĐ-CP (sửa đổi NĐ 14/2022)</li>
              <li>Nghị định 13/2023/NĐ-CP Bảo vệ DLCN</li>
              <li>Quyết định 874/QĐ-BTTTT Quy tắc ứng xử MXH</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs mb-3 uppercase tracking-wider">Đường Dây Nóng Khẩn Cấp</h4>
            <ul className="space-y-2 text-slate-400">
              <li>A05 Bộ Công an: 069.234.3146</li>
              <li>Tổng đài Trẻ em: 111 (24/7)</li>
              <li>Phản ánh cuộc gọi rác: 156 / 5656</li>
              <li>canhbao.khonggianmang.vn</li>
            </ul>
          </div>
        </div>

        {/* Dòng Lưu Ý Pháp Lý Toàn Hệ Thống */}
        <div className="mb-6 p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 text-[11px] sm:text-xs text-slate-300 leading-relaxed">
          <span className="font-bold text-blue-300 block mb-1">⚖️ LƯU Ý PHÁP LÝ QUAN TRỌNG:</span>
          Thông tin và nội dung trên ứng dụng chỉ mang tính chất tham khảo, giáo dục và phổ biến pháp luật số nhằm nâng cao nhận thức cộng đồng; không thay thế cho văn bản quy phạm pháp luật chính thức của Nhà nước hoặc ý kiến tư vấn pháp lý từ cơ quan nhà nước có thẩm quyền và luật sư chuyên nghiệp.
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © 2026 Cẩm Nang Pháp Luật An Ninh Mạng Việt Nam. Xây dựng vì mục tiêu nâng cao nhận thức số cho công dân.
          </div>
          {onNavigate && (
            <div className="flex flex-wrap items-center gap-4">
              <button onClick={() => onNavigate('home')} className="hover:text-slate-300 transition-colors cursor-pointer">Trang Chủ</button>
              <span aria-hidden="true">·</span>
              <button onClick={() => onNavigate('cases')} className="hover:text-slate-300 transition-colors cursor-pointer">Tình Huống Thực Tế</button>
              <span aria-hidden="true">·</span>
              <button onClick={() => onNavigate('quiz')} className="hover:text-slate-300 transition-colors cursor-pointer">Trắc Nghiệm</button>
              <span aria-hidden="true">·</span>
              <button onClick={() => onNavigate('about')} className="hover:text-slate-300 transition-colors cursor-pointer">Giới Thiệu</button>
              <span aria-hidden="true">·</span>
              <button onClick={() => onNavigate('references')} className="hover:text-slate-300 transition-colors cursor-pointer">Nguồn Tham Khảo</button>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};
