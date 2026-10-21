import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, XCircle, Volume2, Square, ShieldAlert, Sparkles, BookOpen } from 'lucide-react';
import { speakVietnamese, stopSpeaking, isSpeaking } from '../utils/speech';
import { DoAndDontGrid } from '../components/DoAndDontGrid';
import { SituationLookupAI } from '../components/SituationLookupAI';
import awarenessImg from '@/src/assets/images/social_media_awareness_1792609422093.jpg';

interface RealLifeCase {
  id: string;
  tag: string;
  title: string;
  story: string;
  commonMistake: string;
  legalConsequence: string;
  decreeClause: string;
  penaltyVND: string;
  solution: string;
}

const REAL_LIFE_CASES: RealLifeCase[] = [
  {
    id: 'case-debt',
    tag: 'Tài chính & Quan hệ dân sự',
    title: 'Tình huống 1: Bóc phốt con nợ lên Facebook để ép trả tiền',
    story: 'Chị Mai cho anh Tuấn vay 30 triệu đồng nhưng nhiều lần thất hứa không trả và khóa máy. Bức xúc, chị Mai chụp ảnh chân dung anh Tuấn, ảnh chụp 2 mặt Căn cước công dân và sao kê tin nhắn, đăng vào hội nhóm "Cảnh giác lừa đảo" với tiêu đề: "Mặt dày giật nợ, phường vô liêm sỉ chuyên đi lừa đảo". Bài đăng nhận hàng trăm lượt chia sẻ và bình luận chửi bới.',
    commonMistake: 'Nhiều người nghĩ: "Người ta quỵt nợ của tôi trước thì tôi có quyền đăng ảnh cảnh báo cộng đồng và đòi lại công bằng".',
    legalConsequence: 'Anh Tuấn đã đến văn phòng Thừa phát lại lập vi bằng toàn bộ bài viết, sau đó nộp đơn lên Công an. Chị Mai bị xử phạt vi phạm hành chính 7.500.000 đồng về hành vi xúc phạm danh dự và tiết lộ thông tin đời tư cá nhân, đồng thời buộc gỡ bỏ bài viết và xin lỗi công khai.',
    decreeClause: 'Điểm a Khoản 1 Điều 101 & Điểm e Khoản 1 Điều 102 Nghị định 15/2020/NĐ-CP; Điều 155 Bộ luật Hình sự',
    penaltyVND: 'Phạt tiền từ 5.000.000đ - 10.000.000đ; nguy cơ bị khởi tố hình sự nếu nạn nhân bị suy sụp tinh thần.',
    solution: 'Để đòi nợ hợp pháp: Khởi kiện ra Tòa án nhân dân cấp huyện nơi con nợ cư trú kèm theo hợp đồng vay, giấy biên nhận tiền hoặc lịch sử chuyển khoản ngân hàng.',
  },
  {
    id: 'case-fakenews',
    tag: 'Tin tức & Mạng xã hội',
    title: 'Tình huống 2: Chia sẻ lại tin đồn thiên tai vì muốn cảnh báo người thân',
    story: 'Buổi tối lướt mạng, anh Hải thấy tài khoản Facebook lạ đăng tin "Hồ thủy điện trên địa bàn tỉnh đang có nguy cơ vỡ đập, dự kiến nửa đêm nước tràn ngập thị trấn, bà con share gấp để sơ tán". Lo lắng cho người nhà ở quê, anh Hải vội vàng bấm nút Chia sẻ (Share) về trang cá nhân kèm lời nhắn "Mọi người ở quê cẩn thận nhé". Bài viết sau đó lan truyền nhanh chóng khiến hàng trăm hộ dân hoang mang, thức trắng đêm dọn đồ.',
    commonMistake: 'Người dân thường nghĩ: "Tôi chỉ bấm nút Share lại từ người khác để cảnh báo thôi, tôi đâu có tự nghĩ ra tin đó mà bị phạt".',
    legalConsequence: 'Cơ quan chức năng và Ban quản lý hồ đập khẳng định đây là tin đồn hoàn toàn thất thiệt. Cơ quan Công an đã triệu tập anh Hải và người đăng gốc. Dù không cố ý, anh Hải vẫn bị xử phạt 7.500.000 đồng vì hành vi "chia sẻ thông tin sai sự thật, gây hoang mang trong nhân dân".',
    decreeClause: 'Điểm a Khoản 1 Điều 101 Nghị định 15/2020/NĐ-CP (áp dụng cho cả hành vi chia sẻ)',
    penaltyVND: 'Phạt tiền từ 5.000.000đ - 10.000.000đ (cá nhân), buộc xóa bài đính chính.',
    solution: 'Nguyên tắc vàng: Đối với tin thiên tai, bão lũ, chỉ tin và chia sẻ tin tức từ Trung tâm Dự báo KTTV Quốc gia, cổng thông tin UBND tỉnh hoặc báo chí chính thống.',
  },
  {
    id: 'case-bodyshaming',
    tag: 'Giao tiếp & Livestream',
    title: 'Tình huống 3: Bình luận xúc phạm ngoại hình và lăng mạ trên livestream',
    story: 'Xem livestream của một người mẫu bán hàng trực tuyến, một tài khoản tên B. liên tục để lại bình luận miệt thị: "Mặt mũi biến dạng nhìn như quái vật dị hợm mà cũng livestream", đồng thời kích động người xem khác vào thả phẫn nộ và report trang.',
    commonMistake: 'Suy nghĩ: "Bình luận trên mạng là thế giới ảo, thích nói gì thì nói, không vừa mắt thì chê, làm sao công an biết được là ai".',
    legalConsequence: 'Chủ kênh đã ủy quyền cho luật sư lập vi bằng bình luận, gửi văn bản đến Thanh tra Sở TT&TT. Người để lại bình luận đã bị xác minh danh tính qua số điện thoại đăng ký tài khoản và bị xử phạt 5.000.000 đồng về hành vi xúc phạm danh dự nhân phẩm.',
    decreeClause: 'Điểm a Khoản 1 Điều 101 Nghị định 15/2020/NĐ-CP; Quyết định 874/QĐ-BTTTT',
    penaltyVND: 'Phạt tiền từ 5.000.000đ - 10.000.000đ, công khai xin lỗi.',
    solution: 'Bình luận văn minh, tôn trọng người khác. Nếu không thích nội dung, có thể chọn ẩn bài viết, chặn kênh hoặc bấm báo cáo vi phạm theo chuẩn mực cộng đồng.',
  },
  {
    id: 'case-fake-police',
    tag: 'Người cao tuổi & Cảnh giác lừa đảo',
    title: 'Tình huống 4: Cuộc gọi giả danh Công an, Tòa án dọa bắt giam',
    story: 'Bác Thảo (62 tuổi) nhận được cuộc gọi từ đầu số lạ, người gọi tự xưng là "Cán bộ điều tra Cục Cảnh sát điều tra Bộ Công an" thông báo số tài khoản ngân hàng của bác đang liên quan đến đường dây mua bán ma túy và rửa tiền xuyên quốc gia. Đối tượng đe dọa lệnh bắt tạm giam đã được ký và yêu cầu bác tuyệt đối giữ bí mật, cài đặt ứng dụng có logo Công an để "bảo vệ tài sản".',
    commonMistake: 'Nhiều người lớn tuổi quá lo sợ bị bắt giam nên răm rắp làm theo hướng dẫn của kẻ xấu, cung cấp mã OTP hoặc chuyển toàn bộ tiền tiết kiệm.',
    legalConsequence: 'Sau khi cài ứng dụng lạ chứa mã độc và cấp quyền trợ năng, tài khoản của bác Thảo đã bị kẻ xấu tự động chiếm quyền điều khiển và chuyển sạch 150 triệu đồng.',
    decreeClause: 'Điều 18 Luật An ninh mạng 2018; Điều 174 & 290 Bộ luật Hình sự',
    penaltyVND: 'Tội phạm lừa đảo công nghệ cao bị truy cứu hình sự với khung hình phạt từ 12 đến 20 năm tù hoặc chung thân.',
    solution: 'Cơ quan Công an, Viện kiểm sát, Tòa án KHÔNG BAO GIỜ làm việc qua điện thoại hay yêu cầu chuyển tiền. Hãy cúp máy ngay lập tức và báo cho con cháu hoặc công an phường.',
  },
  {
    id: 'case-exam-leak',
    tag: 'Học sinh & An ninh quốc gia',
    title: 'Tình huống 5: Chụp ảnh đề thi chính thức đăng lên story "khoe mạng xã hội"',
    story: 'Trong giờ thi tốt nghiệp môn Toán, một thí sinh giấu điện thoại mang vào phòng thi, chụp ảnh đề thi khi chưa hết 2/3 thời gian làm bài rồi gửi vào nhóm bạn bè trên mạng xã hội để "nhờ giải hộ" và đăng một góc ảnh lên Story Instagram.',
    commonMistake: 'Nghĩ rằng: "Mình chỉ gửi cho bạn bè giải hộ trong nhóm kín chứ không có ý định làm lộ ra ngoài công chúng, chắc chỉ bị đình chỉ thi".',
    legalConsequence: 'Đề thi chính thức chưa công bố thuộc danh mục Bí mật Nhà nước độ Tối mật. Hành vi này không chỉ bị đình chỉ thi hủy kết quả, mà thí sinh và người nhận còn bị khởi tố hình sự theo Điều 337 Bộ luật Hình sự.',
    decreeClause: 'Điều 337 Bộ luật Hình sự (Tội cố ý làm lộ bí mật nhà nước); Luật Bảo vệ bí mật nhà nước',
    penaltyVND: 'Khung hình phạt từ 02 đến 07 năm tù (hoặc đến 15 năm tù nếu hậu quả đặc biệt nghiêm trọng).',
    solution: 'Tuyệt đối tuân thủ quy chế thi cử, không mang bất kỳ thiết bị điện tử nào vào phòng thi; không đăng tải bất kỳ tài liệu mật nào lên không gian mạng.',
  },
];

export const CasesScreen: React.FC = () => {
  const [activeCaseId, setActiveCaseId] = useState<string>(REAL_LIFE_CASES[0].id);
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  const selectedCase = REAL_LIFE_CASES.find((c) => c.id === activeCaseId) || REAL_LIFE_CASES[0];

  const handleToggleSpeak = (c: RealLifeCase) => {
    if (speakingId === c.id || isSpeaking()) {
      stopSpeaking();
      setSpeakingId(null);
    } else {
      setSpeakingId(c.id);
      const textToRead = `${c.title}. Câu chuyện thực tế: ${c.story}. Lầm tưởng phổ biến: ${c.commonMistake}. Hậu quả pháp lý: ${c.legalConsequence}. Mức phạt: ${c.penaltyVND}. Lời khuyên đúng luật: ${c.solution}`;
      speakVietnamese(textToRead, () => setSpeakingId(null));
    }
  };

  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
      {/* Tiêu Đề Màn Hình 2 */}
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-900 tracking-wide uppercase mb-2">
          <span>MÀN HÌNH 2: TÌNH HUỐNG MINH HỌA THỰC TẾ</span>
          <span aria-hidden="true">·</span>
          <span>HỌC TỪ NGƯỜI THẬT VIỆC THẬT</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-950 tracking-tight">
          Các Tình Huống Đời Thực Dễ Dính "Bẫy Vi Phạm"
        </h1>
        <p className="text-slate-700 mt-2 text-sm sm:text-base leading-relaxed">
          Đa số các vụ xử phạt vi phạm an ninh mạng xuất phát từ sự vô tình hoặc lầm tưởng "mạng xã hội là ảo". Hãy cùng phân tích các tình huống điển hình dưới đây hoặc sử dụng công cụ AI đối chiếu trực tiếp tình huống của bạn với 15 lỗi vi phạm.
        </p>

        {/* Dòng Lưu Ý Tham Khảo */}
        <div className="mt-4 bg-amber-50/90 border border-amber-300 rounded-xl p-3 text-xs text-amber-950 flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
          <span>
            <strong>Lưu ý:</strong> Các tình huống minh họa nhằm mục đích nâng cao cảnh giác và tuyên truyền giáo dục pháp luật, không thay thế văn bản quy phạm pháp luật chính thức.
          </span>
        </div>
      </div>

      {/* Tra Cứu Tình Huống Bằng AI */}
      <SituationLookupAI />

      {/* Thẻ Cảnh Báo 3 Sai Lầm Lớn Nhất */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-full">
          <img
            src={awarenessImg}
            alt="Ý thức và trách nhiệm khi sử dụng mạng xã hội"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-transparent flex items-end p-6 text-white">
            <div className="space-y-1">
              <span className="font-bold text-amber-300 uppercase tracking-wider text-xs">Nguyên Tắc Trách Nhiệm</span>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">Trước khi bấm nút Share hoặc Đăng bài, hãy dừng lại 3 giây để kiểm chứng nguồn tin.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 p-6 sm:p-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-900 font-bold text-xs sm:text-sm border border-blue-200">
            <ShieldAlert className="w-4 h-4 text-blue-900" />
            <span>Cảnh Báo Pháp Lý Quan Trọng</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 leading-snug">
            3 Lầm Tưởng Lớn Khiến Người Dân Bị Xử Phạt Tiền Triệu
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-slate-700">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-extrabold text-blue-900 font-mono text-base">01</span>
              <div>
                <strong className="text-blue-950 block text-sm">Nghĩ rằng "chỉ share lại thì không có tội"</strong>
                <span className="text-slate-600 text-xs sm:text-sm">Luật quy định xử phạt cả hành vi "cung cấp" lẫn "chia sẻ" tin sai sự thật với mức phạt từ 5 đến 10 triệu đồng.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-extrabold text-blue-900 font-mono text-base">02</span>
              <div>
                <strong className="text-blue-950 block text-sm">Nghĩ rằng "họ nợ tôi trước thì tôi có quyền chửi bới, bóc phốt"</strong>
                <span className="text-slate-600 text-xs sm:text-sm">Mọi tranh chấp dân sự, tiền bạc phải qua Tòa án. Tự ý đăng ảnh bêu riếu người khác là hành vi vi phạm pháp luật độc lập.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-extrabold text-blue-900 font-mono text-base">03</span>
              <div>
                <strong className="text-blue-950 block text-sm">Nghĩ rằng "dùng tài khoản ảo thì cơ quan chức năng không tìm ra"</strong>
                <span className="text-slate-600 text-xs sm:text-sm">Lực lượng an ninh mạng có đầy đủ biện pháp kỹ thuật truy vết IP, thiết bị và tài khoản ngân hàng để xác minh danh tính.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bộ Chọn Tình Huống Chi Tiết */}
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950">
          Chọn Tình Huống Chi Tiết Để Xem Phân Tích
        </h2>

        {/* Nút Chọn Tình Huống Ngang */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {REAL_LIFE_CASES.map((c, idx) => {
            const active = activeCaseId === c.id;
            return (
              <button
                key={c.id}
                onClick={() => {
                  if (speakingId) {
                    stopSpeaking();
                    setSpeakingId(null);
                  }
                  setActiveCaseId(c.id);
                }}
                className={`min-h-[48px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap shrink-0 transition-all cursor-pointer flex items-center gap-2 ${
                  active
                    ? 'bg-blue-900 text-white shadow-sm ring-2 ring-blue-900'
                    : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-blue-950'
                }`}
              >
                <span>Tình huống {idx + 1}</span>
                <span className="opacity-80 font-normal text-xs hidden sm:inline">({c.tag.split('&')[0]})</span>
              </button>
            );
          })}
        </div>

        {/* Thẻ Chi Tiết Tình Huống */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs sm:text-sm font-bold text-blue-900 uppercase tracking-wide">
                Chủ đề: {selectedCase.tag}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-blue-950 mt-1">
                {selectedCase.title}
              </h3>
            </div>

            <button
              onClick={() => handleToggleSpeak(selectedCase)}
              className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shrink-0 border ${
                speakingId === selectedCase.id
                  ? 'bg-blue-900 text-white animate-pulse border-blue-900'
                  : 'bg-blue-50 border-blue-200 text-blue-950 hover:bg-blue-100'
              }`}
            >
              {speakingId === selectedCase.id ? <Square className="w-4 h-4 fill-current" /> : <Volume2 className="w-4 h-4 text-blue-900" />}
              <span>{speakingId === selectedCase.id ? 'Dừng đọc' : '🔊 Nghe đọc tình huống'}</span>
            </button>
          </div>

          {/* Diễn Biến Sự Việc */}
          <div className="space-y-2">
            <h4 className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">
              Diễn biến câu chuyện thực tế
            </h4>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200 italic">
              "{selectedCase.story}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Lầm tưởng */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1.5">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-950 uppercase tracking-wide">
                <AlertCircle className="w-4 h-4 text-amber-700" />
                <span>Lầm tưởng của người dân</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                {selectedCase.commonMistake}
              </p>
            </div>

            {/* Hậu quả pháp lý */}
            <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 space-y-1.5">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-rose-950 uppercase tracking-wide">
                <XCircle className="w-4 h-4 text-rose-700" />
                <span>Hậu quả pháp lý thực tế</span>
              </div>
              <p className="text-xs sm:text-sm text-rose-900 leading-relaxed">
                {selectedCase.legalConsequence}
              </p>
            </div>
          </div>

          {/* Điều Khoản & Mức Phạt */}
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
            <div>
              <span className="text-blue-900 font-bold text-xs block">Căn cứ pháp lý áp dụng:</span>
              <span className="font-mono font-bold text-blue-950">{selectedCase.decreeClause}</span>
            </div>
            <div className="sm:text-right">
              <span className="text-slate-500 text-xs block">Mức phạt tiền:</span>
              <span className="font-bold text-slate-900 tabular-nums">{selectedCase.penaltyVND}</span>
            </div>
          </div>

          {/* Cách Ứng Xử Chuẩn Mực */}
          <div className="p-4.5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1.5">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-950 uppercase tracking-wide">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Cách xử lý đúng chuẩn mực pháp luật</span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-semibold">
              {selectedCase.solution}
            </p>
          </div>
        </div>
      </div>

      {/* Bảng Nên Làm vs Tuyệt Đối Tránh */}
      <DoAndDontGrid />
    </div>
  );
};
