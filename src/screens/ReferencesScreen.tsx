import React from 'react';
import { BookOpen, ExternalLink, Scale, ShieldAlert, Shield, CheckCircle2, FileText } from 'lucide-react';
import { HotlinesAndEvidence } from '../components/HotlinesAndEvidence';
import { CYBER_VIOLATIONS_15 } from '../data/cyberViolationsData';

interface LegalDoc {
  code: string;
  title: string;
  issuer: string;
  date: string;
  keyArticles: string;
  summary: string;
  link: string;
}

const LEGAL_DOCUMENTS: LegalDoc[] = [
  {
    code: 'Luật số 24/2018/QH14',
    title: 'Luật An ninh mạng năm 2018',
    issuer: 'Quốc hội nước Cộng hòa Xã hội Chủ nghĩa Việt Nam',
    date: '12/06/2018 (Có hiệu lực từ 01/01/2019)',
    keyArticles: 'Điều 8 (Các hành vi bị nghiêm cấm trên không gian mạng: tuyên truyền chống phá, xuyên tạc, vu khống, xúc phạm danh dự, kích động bạo lực, tấn công mạng, đánh bạc), Điều 16 (Phòng ngừa, xử lý thông tin sai sự thật), Điều 17 (Phòng chống gián điệp mạng), Điều 18 (Phòng chống tội phạm công nghệ cao), Điều 26 (Chiến lược bảo vệ an ninh mạng), Điều 29 (Bảo vệ trẻ em trên không gian mạng).',
    summary: 'Đạo luật nền tảng quy định về hoạt động bảo vệ an ninh quốc gia và bảo đảm trật tự, an toàn xã hội trên không gian mạng; trách nhiệm của cơ quan, tổ chức, cá nhân có liên quan khi tham gia không gian mạng.',
    link: 'https://vbpl.vn/TW/Pages/vbpq-toanvan.aspx?ItemID=130252',
  },
  {
    code: 'Nghị định 15/2020/NĐ-CP',
    title: 'Nghị định quy định xử phạt vi phạm hành chính trong lĩnh vực bưu chính, viễn thông, tần số, CNTT và giao dịch điện tử',
    issuer: 'Chính phủ nước CHXHCN Việt Nam',
    date: '03/02/2020 (Có hiệu lực từ 15/04/2020)',
    keyArticles: 'Điều 101 (Vi phạm các quy định về trách nhiệm sử dụng dịch vụ mạng xã hội; mức phạt 10 - 20 triệu đồng đối với hành vi cung cấp, chia sẻ tin giả, xuyên tạc, vu khống, xúc phạm uy tín, tiết lộ bí mật đời tư), Điều 102 (Vi phạm lưu trữ, truyền đưa thông tin; xử phạt 10 - 20 triệu đồng), Điều 80 (Bẻ khóa, can thiệp tài khoản mạng), Điều 84 (Thu thập, sử dụng dữ liệu cá nhân không có sự đồng ý; phạt 10 - 20 triệu đồng), Điều 94 (Phát tán tin nhắn rác, cuộc gọi rác; phạt 10 - 70 triệu đồng), Điều 77 (Cung cấp phần mềm độc hại; phạt 20 - 50 triệu đồng).',
    summary: 'Căn cứ pháp lý chủ yếu và trực tiếp nhất để các cơ quan thanh tra và công an xử phạt tiền đối với các hành vi chia sẻ tin đồn thất thiệt, bóc phốt vu khống, xúc phạm uy tín, xâm phạm bí mật đời tư trên mạng xã hội.',
    link: 'https://chinhphu.vn/default.aspx?pageid=27160&docid=199140',
  },
  {
    code: 'Nghị định 14/2022/NĐ-CP',
    title: 'Nghị định sửa đổi, bổ sung một số điều của Nghị định 15/2020/NĐ-CP',
    issuer: 'Chính phủ nước CHXHCN Việt Nam',
    date: '27/01/2022 (Có hiệu lực từ 27/01/2022)',
    keyArticles: 'Sửa đổi, bổ sung quy định xử phạt hành vi lừa đảo qua mạng, thiết lập trang thông tin giả mạo, kinh doanh trái phép dịch vụ viễn thông, tăng nặng mức xử phạt và bổ sung các biện pháp khắc phục hậu quả (buộc gỡ bỏ thông tin sai sự thật).',
    summary: 'Hoàn thiện khung chế tài xử phạt hành chính trên không gian mạng, cập nhật các hành vi phát sinh trên môi trường số hiện đại.',
    link: 'https://chinhphu.vn/default.aspx?pageid=27160&docid=205096',
  },
  {
    code: 'Nghị định 13/2023/NĐ-CP',
    title: 'Nghị định về Bảo vệ dữ liệu cá nhân',
    issuer: 'Chính phủ nước CHXHCN Việt Nam',
    date: '17/04/2023 (Có hiệu lực từ 01/07/2023)',
    keyArticles: 'Điều 3 (Nguyên tắc bảo vệ dữ liệu), Điều 9 (Quyền của chủ thể dữ liệu), Điều 11 (Xử lý dữ liệu cá nhân phải có sự đồng ý), Điều 17 (Bảo vệ dữ liệu cá nhân cơ bản và nhạy cảm: CCCD, số điện thoại, số tài khoản ngân hàng, vị trí, hồ sơ y tế), Điều 22 (Xử phạt hành vi mua bán dữ liệu cá nhân trái phép).',
    summary: 'Khung pháp lý toàn diện bảo vệ quyền riêng tư số của công dân; nghiêm cấm tuyệt đối mọi hành vi thu thập, lưu trữ, phát tán, mua bán trái phép số Căn cước công dân, số điện thoại, địa chỉ nhà ở.',
    link: 'https://chinhphu.vn/default.aspx?pageid=27160&docid=207705',
  },
  {
    code: 'Bộ luật Hình sự năm 2015',
    title: 'Bộ luật Hình sự số 100/2015/QH13 (Sửa đổi, bổ sung năm 2017)',
    issuer: 'Quốc hội nước CHXHCN Việt Nam',
    date: '27/11/2015 & 20/06/2017',
    keyArticles: 'Điều 155 (Tội làm nhục người khác - phạt tù đến 5 năm), Điều 156 (Tội vu khống - phạt tù đến 7 năm), Điều 174 (Tội lừa đảo chiếm đoạt tài sản - phạt tù đến 20 năm hoặc chung thân), Điều 288 (Tội đưa hoặc sử dụng trái phép thông tin mạng máy tính, mạng viễn thông - phạt tù đến 7 năm), Điều 290 (Tội sử dụng mạng máy tính chiếm đoạt tài sản), Điều 321 (Tội đánh bạc qua mạng), Điều 331 (Tội lợi dụng các quyền tự do dân chủ xâm phạm lợi ích Nhà nước, tổ chức, cá nhân - phạt tù đến 7 năm).',
    summary: 'Quy định các tội danh và mức hình phạt tù nghiêm khắc đối với những hành vi vi phạm an ninh mạng vượt quá mức độ hành chính, gây hậu quả nghiêm trọng cho xã hội, danh dự, tài sản người dân.',
    link: 'https://vbpl.vn/TW/Pages/vbpq-toanvan.aspx?ItemID=96353',
  },
  {
    code: 'Quyết định 874/QĐ-BTTTT',
    title: 'Bộ Quy tắc ứng xử trên mạng xã hội',
    issuer: 'Bộ Thông tin và Truyền thông',
    date: '17/06/2021',
    keyArticles: 'Điều 3 (Quy tắc ứng xử chung: Tôn trọng, Lành mạnh, An toàn bảo mật, Trách nhiệm), Điều 4 (Quy tắc ứng xử cho tổ chức, cá nhân: Khuyến nghị dùng tên thật, chia sẻ tin chính thống, không bạo lực mạng, không kích động thù hận), Điều 5 (Quy tắc ứng xử cho cán bộ, công chức, viên chức).',
    summary: 'Xây dựng chuẩn mực văn hóa ứng xử số, khuyến khích công dân sử dụng mạng xã hội văn minh, tôn trọng người khác và tự giác tuân thủ pháp luật.',
    link: 'https://mic.gov.vn/Pages/TinTuc/148281/Bo-TT-TT-ban-hanh-Bo-Quy-tac-ung-xu-tren-mang-xa-hoi.html',
  },
  {
    code: 'Luật số 86/2015/QH13',
    title: 'Luật An toàn thông tin mạng năm 2015',
    issuer: 'Quốc hội nước CHXHCN Việt Nam',
    date: '19/11/2015 (Có hiệu lực từ 01/07/2016)',
    keyArticles: 'Điều 7 (Các hành vi bị nghiêm cấm: chặn thu tín hiệu, truy cập trái phép, phát tán virus máy tính, thư rác), Điều 16 (Bảo vệ thông tin cá nhân trên mạng), Điều 21 (Xử lý mã độc hại).',
    summary: 'Quy định về hoạt động an toàn thông tin mạng, quyền và trách nhiệm của cơ quan, tổ chức, cá nhân trong việc bảo đảm an toàn thông tin mạng.',
    link: 'https://vbpl.vn/TW/Pages/vbpq-toanvan.aspx?ItemID=97127',
  },
  {
    code: 'Luật số 20/2023/QH15',
    title: 'Luật Giao dịch điện tử năm 2023',
    issuer: 'Quốc hội nước CHXHCN Việt Nam',
    date: '22/06/2023 (Có hiệu lực từ 01/07/2024)',
    keyArticles: 'Điều 6 (Các hành vi bị nghiêm cấm trong giao dịch điện tử: giả mạo chữ ký điện tử, truy cập trái phép hệ thống, lừa đảo trong giao dịch điện tử), Điều 9 (Giá trị pháp lý của thông điệp dữ liệu).',
    summary: 'Tạo hành lang pháp lý an toàn, minh bạch cho mọi giao dịch điện tử, chữ ký số và bảo vệ người tiêu dùng số.',
    link: 'https://vbpl.vn/TW/Pages/vbpq-toanvan.aspx?ItemID=161249',
  },
  {
    code: 'Luật số 102/2016/QH13',
    title: 'Luật Trẻ em năm 2016',
    issuer: 'Quốc hội nước CHXHCN Việt Nam',
    date: '05/04/2016 (Có hiệu lực từ 01/06/2017)',
    keyArticles: 'Điều 54 (Trách nhiệm bảo vệ trẻ em trên môi trường mạng: cơ quan, tổ chức, cá nhân có trách nhiệm bảo vệ trẻ em trước thông tin xấu độc, bạo lực, khiêu dâm và xâm hại đời tư trên mạng), Điều 6 (Các hành vi bị nghiêm cấm: công bố, tiết lộ bí mật đời sống riêng tư của trẻ em mà không được đồng ý).',
    summary: 'Bảo vệ quyền bất khả xâm phạm về đời sống riêng tư, hình ảnh của trẻ em và thanh thiếu niên trên Internet.',
    link: 'https://vbpl.vn/TW/Pages/vbpq-toanvan.aspx?ItemID=99786',
  },
  {
    code: 'Luật số 16/2012/QH13',
    title: 'Luật Quảng cáo năm 2012 (Sửa đổi, bổ sung 2018)',
    issuer: 'Quốc hội nước CHXHCN Việt Nam',
    date: '18/06/2012 & 20/11/2018',
    keyArticles: 'Điều 8 (Hành vi cấm trong quảng cáo: quảng cáo sai sự thật, quảng cáo sản phẩm cấm, thuốc kích dục, đánh bạc), Điều 23 (Quảng cáo trên mạng thông tin điện tử).',
    summary: 'Căn cứ xử lý các trang cá nhân và hội nhóm tiếp tay quảng cáo cờ bạc, cá độ bóng đá, mỹ phẩm/dược phẩm giả trên mạng xã hội.',
    link: 'https://vbpl.vn/TW/Pages/vbpq-toanvan.aspx?ItemID=27982',
  },
];

const OFFICIAL_PORTALS = [
  {
    name: 'Cổng Thông tin điện tử Chính phủ',
    url: 'https://chinhphu.vn',
    desc: 'Cơ quan phát ngôn chính thức của Chính phủ, đăng tải toàn bộ nghị định, quyết định và thông cáo báo chí.',
  },
  {
    name: 'Cơ sở Dữ liệu Quốc gia về Văn bản Pháp luật',
    url: 'https://vbpl.vn',
    desc: 'Hệ thống tra cứu văn bản quy phạm pháp luật chính thống, cập nhật tình trạng hiệu lực của các bộ luật.',
  },
  {
    name: 'Cổng Cảnh báo an toàn thông tin Việt Nam',
    url: 'https://canhbao.khonggianmang.vn',
    desc: 'Cục An toàn thông tin (Bộ TT&TT) tiếp nhận báo cáo lừa đảo trực tuyến, website giả mạo, tin nhắn rác.',
  },
  {
    name: 'Cổng thông tin Bộ Công an',
    url: 'https://bocongan.gov.vn',
    desc: 'Cung cấp thông tin cảnh báo phương thức, thủ đoạn của các loại tội phạm công nghệ cao mới xuất hiện.',
  },
];

export const ReferencesScreen: React.FC = () => {
  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
      {/* Tiêu Đề Màn Hình 5 */}
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-900 tracking-wide uppercase mb-2">
          <span>MÀN HÌNH 5: NGUỒN THAM KHẢO CHÍNH THỐNG</span>
          <span aria-hidden="true">·</span>
          <span>VĂN BẢN QUY PHẠM PHÁP LUẬT</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-950 tracking-tight">
          Nguồn Văn Bản Pháp Luật & Cổng Tra Cứu Quốc Gia
        </h1>
        <p className="text-slate-700 mt-2 text-sm sm:text-base leading-relaxed">
          Tất cả kiến thức, mức xử phạt và giải thích trong ứng dụng này đều được trích dẫn và đối chiếu nguyên bản từ hệ thống văn bản pháp luật hiện hành của Nhà nước Cộng hòa Xã hội Chủ nghĩa Việt Nam.
        </p>
      </div>

      {/* Dòng Lưu Ý Pháp Lý Quan Trọng */}
      <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 text-amber-950 text-xs sm:text-sm flex items-start gap-3.5 shadow-xs">
        <Shield className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="font-bold text-amber-950 block">LƯU Ý QUAN TRỌNG VỀ TÍNH PHÁP LÝ:</strong>
          <p className="leading-relaxed text-amber-900">
            Toàn bộ thông tin, dữ liệu, nội dung trích dẫn và đối chiếu trên trang web này <strong>chỉ mang tính chất tham khảo, tuyên truyền phổ biến giáo dục pháp luật</strong> và nâng cao nhận thức cộng đồng; <strong>không thay thế cho văn bản pháp luật chính thức</strong> được công báo hoặc văn bản hướng dẫn/kết luận từ cơ quan tư pháp và cơ quan nhà nước có thẩm quyền.
          </p>
        </div>
      </div>

      {/* Bảng Tổng Hợp Căn Cứ Pháp Lý Cho 15 Lỗi Vi Phạm Phổ Biến */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wide">
              <FileText className="w-4 h-4 text-blue-900" />
              <span>BẢNG ĐỐI CHIẾU CĂN CỨ PHÁP LÝ CHI TIẾT</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 mt-1">
              Căn Cứ Pháp Lý & Chế Tài Cho 15 Lỗi An Ninh Mạng Phổ Biến
            </h2>
          </div>
          <span className="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-900 rounded-full border border-blue-200 self-start sm:self-auto">
            15/15 Lỗi Được Chuẩn Hóa
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Dưới đây là bảng trích dẫn nguyên văn tên văn bản quy phạm pháp luật và điều khoản áp dụng cho từng hành vi vi phạm có trong hệ thống, đảm bảo tính minh bạch và chuẩn xác tuyệt đối theo pháp luật Việt Nam:
        </p>

        <div className="overflow-x-auto -mx-2 sm:mx-0">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-slate-100 text-blue-950 font-bold border-b border-slate-200">
                <th className="py-3 px-3.5 rounded-l-xl">STT & Hành vi vi phạm</th>
                <th className="py-3 px-3.5">Nhóm vi phạm</th>
                <th className="py-3 px-3.5">Mức phạt tiền</th>
                <th className="py-3 px-3.5 rounded-r-xl">Căn cứ pháp lý áp dụng</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {CYBER_VIOLATIONS_15.map((item, idx) => (
                <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-3.5 align-top">
                    <div className="font-bold text-blue-950 flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-900 font-mono text-[11px] inline-flex items-center justify-center font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <span>{item.tenHanhVi}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1 line-clamp-1">{item.moTaNgan}</div>
                  </td>
                  <td className="py-3.5 px-3.5 align-top">
                    <span className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                      {item.nhomViPham}
                    </span>
                  </td>
                  <td className="py-3.5 px-3.5 align-top font-bold text-blue-950 font-mono text-xs whitespace-nowrap">
                    {item.mucPhat}
                  </td>
                  <td className="py-3.5 px-3.5 align-top text-xs">
                    <div className="font-bold text-blue-900">{item.dieuKhoan}</div>
                    <div className="text-[11px] text-slate-600 mt-0.5">{item.tenVanBan}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Danh Sách Các Văn Bản Cốt Lõi */}
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-900" />
          <span>Các Văn Bản Pháp Quy Cốt Lõi</span>
        </h2>

        <div className="space-y-4">
          {LEGAL_DOCUMENTS.map((doc, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 space-y-3 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-1">
                    <span className="font-mono font-bold text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">{doc.code}</span>
                    <span aria-hidden="true">·</span>
                    <span>Ban hành: {doc.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{doc.issuer}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-blue-950">
                    {doc.title}
                  </h3>
                </div>

                <a
                  href={doc.link}
                  target="_blank"
                  rel="noreferrer"
                  className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-blue-900 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors cursor-pointer shrink-0 border border-blue-200"
                >
                  <span>Xem toàn văn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {doc.summary}
              </p>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm">
                <strong className="text-blue-950 font-bold block mb-0.5">Các điều khoản quan trọng cần nắm: </strong>
                <span className="text-slate-700">{doc.keyArticles}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cổng Tra Cứu Trực Tuyến Quốc Gia */}
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 flex items-center gap-2">
          <Scale className="w-5 h-5 text-blue-900" />
          <span>Cổng Thông Tin & Tra Cứu Trực Tuyến Của Cơ Quan Nhà Nước</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {OFFICIAL_PORTALS.map((portal, i) => (
            <a
              key={i}
              href={portal.url}
              target="_blank"
              rel="noreferrer"
              className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 hover:border-blue-900 hover:shadow-sm transition-all group flex flex-col justify-between space-y-3 cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1 font-mono">
                  <span>{portal.url.replace('https://', '')}</span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-900 transition-colors" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-blue-950 group-hover:text-blue-900 transition-colors">
                  {portal.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                  {portal.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Danh Bạ Đường Dây Nóng Khẩn Cấp */}
      <HotlinesAndEvidence />
    </div>
  );
};
