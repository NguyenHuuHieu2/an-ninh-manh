import React from 'react';
import { Shield, Target, Users, HeartHandshake, Eye, Smartphone, Volume2 } from 'lucide-react';
import handbookImg from '@/src/assets/images/legal_handbook_shield_1792609422468.jpg';

export const AboutScreen: React.FC = () => {
  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
      {/* Tiêu Đề Màn Hình 4 */}
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-900 tracking-wide uppercase mb-2">
          <span>MÀN HÌNH 4: TRANG GIỚI THIỆU</span>
          <span aria-hidden="true">·</span>
          <span>SỨ MỆNH PHỔ BIẾN PHÁP LUẬT SỐ</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-950 tracking-tight">
          Về Dự Án Cẩm Nang Pháp Luật An Ninh Mạng
        </h1>
        <p className="text-slate-700 mt-2 text-sm sm:text-base leading-relaxed">
          Nền tảng giáo dục pháp luật an ninh mạng phi lợi nhuận dành cho người dùng Internet Việt Nam từ 13 đến 65 tuổi, với mục tiêu giúp mọi người hiểu luật, ứng xử văn minh và tự tin bảo vệ mình trên không gian số.
        </p>
      </div>

      {/* Thông Tin Sinh Viên Thực Tập & Đơn Vị Tổ Chức */}
      <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-md border-2 border-blue-800">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-blue-800/80">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/80 text-blue-200 text-xs font-bold uppercase tracking-wider border border-blue-700">
              <span>Đề Tài Thực Tập Tốt Nghiệp / Dự Án Khóa Học</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              Cẩm Nang Pháp Luật An Ninh Mạng Việt Nam
            </h2>
            <p className="text-sm sm:text-base text-blue-100 font-medium">
              Sản phẩm thực tập của sinh viên: <strong className="text-white underline decoration-blue-400 font-bold">Nguyễn Hữu Hiếu</strong> — Mã sinh viên: <strong className="text-white font-mono bg-blue-950 px-2 py-0.5 rounded border border-blue-700">PH69928</strong>
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-white/20 text-xs space-y-1.5 shrink-0 min-w-[260px]">
            <div className="text-blue-200 font-bold uppercase tracking-wider text-[11px]">Thông Tin Thực Tập:</div>
            <div className="text-white font-semibold">Nhóm: <span className="text-blue-300 font-bold">Nhóm 2</span></div>
            <div className="text-white font-semibold">Chương trình: <span className="text-blue-200">Thực tập sinh Đợt 15</span></div>
            <div className="text-white font-semibold">Đơn vị liên kết: <span className="text-blue-200">FPT Polytechnic & IMTA TECH</span></div>
          </div>
        </div>

        <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-blue-100 leading-relaxed">
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <strong className="text-white block mb-1">Cơ sở đào tạo:</strong>
            Trường Cao đẳng FPT Polytechnic — Đào tạo thực hành & chuẩn kỹ năng số.
          </div>
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <strong className="text-white block mb-1">Doanh nghiệp thực tập:</strong>
            IMTA TECH — Môi trường công nghệ ứng dụng và giải pháp chuyển đổi số.
          </div>
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <strong className="text-white block mb-1">Mục tiêu cống hiến:</strong>
            Ứng dụng công nghệ phần mềm và AI nhằm phục vụ cộng đồng, nâng cao nhận thức pháp luật số cho người dân Việt Nam.
          </div>
        </div>
      </div>

      {/* Dòng Lưu Ý Pháp Lý Quan Trọng */}
      <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 text-amber-950 text-xs sm:text-sm flex items-start gap-3.5 shadow-xs">
        <Shield className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="font-bold text-amber-950 block">LƯU Ý QUAN TRỌNG VỀ TÍNH PHÁP LÝ:</strong>
          <p className="leading-relaxed text-amber-900">
            Toàn bộ thông tin, dữ liệu, nội dung phân tích và gợi ý trên ứng dụng <strong>chỉ mang tính chất tham khảo, hỗ trợ giáo dục và phổ biến pháp luật cộng đồng</strong>; <strong>không thay thế cho văn bản pháp luật chính thức</strong> hoặc ý kiến tư vấn pháp lý từ cơ quan nhà nước có thẩm quyền và luật sư chuyên nghiệp. Mọi quyết định xử lý tình huống thực tế cần đối chiếu trực tiếp với các văn bản quy phạm pháp luật đang có hiệu lực thi hành.
          </p>
        </div>
      </div>

      {/* Khung Bối Cảnh Ra Đời */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs p-6 sm:p-10">
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center gap-2 text-blue-900 font-bold text-xs sm:text-sm uppercase tracking-wide">
            <Target className="w-4 h-4 text-blue-900" />
            <span>Mục Tiêu & Bối Cảnh Ra Đời</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 leading-snug">
            Vì Sao Chúng Tôi Xây Dựng Cẩm Nang Này?
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Hàng ngày tại Việt Nam, có hàng chục trường hợp bị cơ quan chức năng triệu tập và xử phạt tiền từ 5.000.000đ đến 20.000.000đ, hoặc thậm chí vướng vòng lao lý chỉ vì:
          </p>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-blue-900 mt-2 shrink-0" />
              <span>Tiện tay bấm nút <strong>Chia sẻ (Share)</strong> một tin đồn thất thiệt về bão lũ, dịch bệnh để cảnh báo người quen.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-blue-900 mt-2 shrink-0" />
              <span>Bức xúc vì bị nợ tiền nên đăng ảnh CCCD và mặt người khác lên Facebook để <strong>"bóc phốt đòi nợ"</strong>.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-blue-900 mt-2 shrink-0" />
              <span>Người lớn tuổi bị kẻ gian giả danh Công an, Viện kiểm sát gọi điện dọa bắt rồi chuyển sạch tiền tiết kiệm.</span>
            </li>
          </ul>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-blue-50/70 p-4 rounded-2xl border border-blue-200 font-medium">
            Hầu hết các vi phạm không xuất phát từ ác ý, mà do người dân <strong>chưa nắm rõ các quy định pháp luật hiện hành</strong>. Cẩm nang này được thiết kế để lấp đầy khoảng trống đó bằng ngôn ngữ bình dị nhất.
          </p>
        </div>

        <div className="lg:col-span-5 rounded-2xl overflow-hidden border-2 border-blue-900 shadow-md bg-blue-950">
          <img
            src={handbookImg}
            alt="Sổ tay an toàn không gian mạng và pháp luật số"
            className="w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* 3 Nhóm Đối Tượng Trọng Tâm (13 - 65 Tuổi) */}
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 flex items-center gap-2">
          <Users className="w-6 h-6 text-blue-900" />
          <span>Đối Tượng Trọng Tâm Phục Vụ (13 - 65 Tuổi)</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-950 flex items-center justify-center font-extrabold text-base border border-blue-300">
              13-18
            </div>
            <h3 className="text-lg font-bold text-blue-950">Học Sinh & Giới Trẻ</h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Trang bị nhận thức phòng tránh bạo lực mạng, không phát tán clip bạo lực học đường, không miệt thị ngoại hình người khác trong các buổi livestream và bảo vệ quyền trẻ em trên không gian mạng.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-950 flex items-center justify-center font-extrabold text-base border border-blue-300">
              19-45
            </div>
            <h3 className="text-lg font-bold text-blue-950">Người Đi Làm & Kinh Doanh</h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Hiểu rõ trách nhiệm pháp lý khi chia sẻ tin tức, quy định về bóc phốt, bảo vệ dữ liệu cá nhân (CCCD, số điện thoại) và chuẩn mực văn hóa ứng xử theo Bộ Quy tắc MXH của Bộ TT&TT.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-950 flex items-center justify-center font-extrabold text-base border border-blue-300">
              46-65
            </div>
            <h3 className="text-lg font-bold text-blue-950">Người Trung Niên & Cao Tuổi</h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Nhận diện và phòng chống các thủ đoạn lừa đảo qua điện thoại tinh vi (giả danh cơ quan công an, tòa án), tránh chia sẻ tin giả về bài thuốc dân gian và bảo vệ an toàn tài sản tiết kiệm.
            </p>
          </div>
        </div>
      </div>

      {/* 4 Cam Kết Phục Vụ Cộng Đồng */}
      <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-extrabold text-blue-950 flex items-center gap-2">
          <HeartHandshake className="w-5 h-5 text-blue-900" />
          <span>Cam Kết Phục Vụ Cộng Đồng</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <Smartphone className="w-6 h-6 text-blue-900" />
            <h3 className="text-sm sm:text-base font-bold text-blue-950">Tối Ưu Cho Điện Thoại</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Thiết kế thân thiện với màn hình cảm ứng, phím bấm to rõ ràng, thao tác một tay thuận tiện.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <Eye className="w-6 h-6 text-blue-900" />
            <h3 className="text-sm sm:text-base font-bold text-blue-950">Chế Độ Chữ To (A+)</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Hỗ trợ tùy chọn phóng to kích thước chữ để người cao tuổi đọc dễ dàng, không mỏi mắt.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <Volume2 className="w-6 h-6 text-blue-900" />
            <h3 className="text-sm sm:text-base font-bold text-blue-950">Nghe Giọng Đọc (TTS)</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tích hợp đọc bằng giọng nói tiếng Việt chuẩn, giúp người bận rộn hoặc khiếm thị tiếp cận thông tin.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <Shield className="w-6 h-6 text-blue-900" />
            <h3 className="text-sm sm:text-base font-bold text-blue-950">Bảo Mật Quyền Riêng Tư</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Hoàn toàn không thu thập thông tin cá nhân, không lưu trữ nội dung bài viết bạn thử nghiệm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
