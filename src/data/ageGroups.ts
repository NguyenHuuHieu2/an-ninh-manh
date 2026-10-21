export interface AgeGroupRule {
  id: string;
  ageRange: string;
  groupTitle: string;
  targetUserDesc: string;
  mainPitfalls: string[];
  safeRules: {
    rule: string;
    explanation: string;
  }[];
  warningCase: string;
}

export const AGE_GROUP_GUIDES: AgeGroupRule[] = [
  {
    id: 'group-teen',
    ageRange: '13 - 18 tuổi',
    groupTitle: 'Học Sinh & Giới Trẻ Mới Dùng Mạng',
    targetUserDesc: 'Thường xuyên dùng TikTok, Facebook, Discord, Zalo, chơi game online và trò chuyện nhóm bạn bè.',
    mainPitfalls: [
      'Bình luận chê bai ngoại hình (body shaming) hoặc chửi nhau trong nhóm kín/livestream.',
      'Chia sẻ clip đánh nhau học đường hoặc phát tán ảnh dìm hàng, ảnh nhạy cảm của bạn bè.',
      'Sử dụng phần mềm bẻ khóa (crack tool), tải game lậu có chứa virus đánh cắp nick.',
      'Tin theo các lời rủ rê "việc nhẹ lương cao", "nạp thẻ trúng iPhone" trên mạng xã hội.',
    ],
    safeRules: [
      {
        rule: 'Tôn trọng bạn bè: Không tham gia lập hội anti hoặc cô lập người khác trên mạng.',
        explanation: 'Nhóm chat kín vẫn có thể bị chụp màn hình làm bằng chứng tố giác hành vi làm nhục người khác.',
      },
      {
        rule: 'Bảo vệ hình ảnh cá nhân: Không gửi ảnh nhạy cảm cho bất kỳ ai, kể cả người yêu.',
        explanation: 'Hình ảnh nhạy cảm rất dễ bị đối tượng xấu tống tiền hoặc phát tán trái phép.',
      },
      {
        rule: 'Khi thấy bạo lực: Báo ngay cho thầy cô, bố mẹ hoặc gọi Tổng đài 111.',
        explanation: 'Tuyệt đối không hùa theo chia sẻ clip bạo lực để câu view, người chia sẻ cũng bị phạt tiền.',
      },
    ],
    warningCase: 'Một bạn học sinh 15 tuổi quay clip bạn cùng lớp bị đánh rồi đăng TikTok kèm link trong bình luận. Công an đã mời phụ huynh và học sinh lên lập biên bản, xử phạt hành chính và yêu cầu nhà trường hạ hạnh kiểm.',
  },
  {
    id: 'group-adult',
    ageRange: '19 - 45 tuổi',
    groupTitle: 'Người Đi Làm, Kinh Doanh & Phụ Huynh',
    targetUserDesc: 'Thường xuyên mua sắm online, kinh doanh, tương tác hội nhóm Facebook, Threads, Zalo, ngân hàng số.',
    mainPitfalls: [
      'Bóc phốt con nợ, đối tác làm ăn hoặc người có xích mích lên các hội nhóm Facebook.',
      'Đăng ảnh thẻ CCCD, số điện thoại, sao kê ngân hàng của người khác khi chưa được cho phép.',
      'Chia sẻ các bài viết giật gân về dịch bệnh, thiên tai, chính trị từ các trang fanpage không rõ nguồn.',
      'Quảng cáo bán hàng phóng đại công dụng (ví dụ: cam kết trị khỏi ung thư, giảm 10kg/tuần).',
    ],
    safeRules: [
      {
        rule: 'Giải quyết nợ nần qua Tòa án, không dùng Facebook để đòi nợ.',
        explanation: 'Đăng bài bêu riếu nợ nần vừa bị phạt từ 5 - 10 triệu đồng, vừa có nguy cơ bị khởi tố tội Làm nhục người khác.',
      },
      {
        rule: 'Đánh giá dịch vụ (review) khách quan, trung thực, không vu khống.',
        explanation: 'Chỉ nhận xét đúng trải nghiệm của bản thân, không bịa đặt hoặc dùng từ ngữ mạt sát triệt hạ đối thủ.',
      },
      {
        rule: 'Xác minh tin tức trước khi chia sẻ về dòng thời gian.',
        explanation: 'Người bấm chia sẻ (Share) tin giả cũng chịu trách nhiệm pháp lý và mức phạt tiền như người viết bài.',
      },
    ],
    warningCase: 'Chị N. bức xúc vì bị bạn quỵt 20 triệu nên đã đăng ảnh chân dung và 2 mặt CCCD của bạn lên mạng xã hội kèm lời chửi bới. Hậu quả: Chị N. bị phạt 7,5 triệu đồng và buộc gỡ bài, công khai xin lỗi.',
  },
  {
    id: 'group-senior',
    ageRange: '46 - 65 tuổi',
    groupTitle: 'Người Trung Niên & Cao Tuổi',
    targetUserDesc: 'Thường dùng Zalo, YouTube, Facebook để đọc tin tức, giữ liên lạc gia đình, xem mẹo sức khỏe.',
    mainPitfalls: [
      'Dễ tin và chia sẻ các bài viết mẹo chữa bệnh dân gian, thuốc giả, tin đồn thiên tai chưa kiểm chứng.',
      'Là mục tiêu chính của các bẫy lừa đảo: Mạo danh Công an, Tòa án, Viện kiểm sát gọi điện đe dọa.',
      'Dễ bị dụ dỗ vào các hội nhóm "đầu tư tài chính siêu lợi nhuận", "quỹ từ thiện tặng tiền".',
      'Đọc mã OTP hoặc cung cấp mật khẩu ngân hàng cho người lạ qua điện thoại.',
    ],
    safeRules: [
      {
        rule: 'Công an KHÔNG BAO GIỜ làm việc hay dọa bắt qua điện thoại.',
        explanation: 'Nếu có cuộc gọi tự xưng Công an/Viện kiểm sát yêu cầu chuyển tiền hoặc tải app lạ: Cúp máy ngay lập tức!',
      },
      {
        rule: 'Tuyệt đối KHÔNG đọc mã OTP hoặc mật khẩu cho bất kỳ ai.',
        explanation: 'Kể cả nhân viên ngân hàng cũng không được phép hỏi mã OTP của khách hàng.',
      },
      {
        rule: 'Không chia sẻ bài viết chữa bệnh lạ khi chưa có ý kiến của bác sĩ chuyên khoa.',
        explanation: 'Nhiều bài thuốc giả trên mạng vừa gây hại sức khỏe người khác, vừa vi phạm quy định về tin sai sự thật.',
      },
    ],
    warningCase: 'Bác T. (58 tuổi) nhận được cuộc gọi tự xưng là cán bộ công an thông báo tài khoản dính vào đường dây rửa tiền, yêu cầu chuyển 200 triệu vào "tài khoản tạm giữ của cơ quan điều tra". Rất may người nhà đã phát hiện và can ngăn kịp thời.',
  },
];

export const DOS_AND_DONTS = [
  {
    category: 'Chia sẻ thông tin',
    do: 'Chỉ chia sẻ tin tức từ báo chí chính thống (VTV, Thông tấn xã, Báo Nhân Dân, VnExpress, Tuổi Trẻ...)',
    dont: 'Bấm chia sẻ ngay tin tức giật gân, tai nạn thảm khốc từ các tài khoản cá nhân trôi nổi.',
  },
  {
    category: 'Bất đồng & Mâu thuẫn',
    do: 'Thương lượng văn minh hoặc gửi đơn đến cơ quan chức năng, Tòa án nhân dân nơi cư trú.',
    dont: 'Đăng bài "bóc phốt", xúc phạm nhân phẩm, chửi bới người khác lên mạng xã hội.',
  },
  {
    category: 'Dữ liệu cá nhân',
    do: 'Che mờ số CCCD, địa chỉ nhà, số điện thoại của mình và người khác trước khi đăng ảnh lên mạng.',
    dont: 'Chụp ảnh hai mặt CCCD của người khác đăng lên mạng với bất kỳ lý do gì.',
  },
  {
    category: 'Cuộc gọi & Tin nhắn lạ',
    do: 'Cúp máy ngay khi có người lạ xưng là Công an, Tòa án đòi chuyển tiền; hỏi ý kiến người thân.',
    dont: 'Nhấp vào đường link lạ gửi qua Zalo, Messenger hoặc cài đặt ứng dụng theo hướng dẫn của người lạ.',
  },
];
