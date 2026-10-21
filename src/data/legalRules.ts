export interface LegalRuleItem {
  id: string;
  category: 'fake_news' | 'defamation' | 'privacy' | 'fraud' | 'cyberattack' | 'security' | 'harmful_content' | 'copyright';
  categoryName: string;
  title: string;
  prohibitedAct: string;
  legalBasis: string;
  adminPenalty: string;
  criminalPenalty?: string;
  realWorldExample: string;
  correctConduct: string;
  riskBadge: 'Cao' | 'Rất nghiêm trọng' | 'Nghiêm trọng';
}

export const LEGAL_RULES: LegalRuleItem[] = [
  {
    id: 'rule-fake-news-1',
    category: 'fake_news',
    categoryName: 'Tin giả & Sai sự thật',
    title: 'Cung cấp, chia sẻ thông tin giả mạo, sai sự thật, xuyên tạc',
    prohibitedAct: 'Đăng tải hoặc chia sẻ bài viết, hình ảnh, video sai sự thật về dịch bệnh, thiên tai, chính sách hoặc các vụ việc xã hội chưa kiểm chứng gây hoang mang dư luận.',
    legalBasis: 'Điểm a Khoản 1 Điều 101 Nghị định 15/2020/NĐ-CP (sửa đổi bởi NĐ 14/2022/NĐ-CP); Điều 8 & Điều 16 Luật An ninh mạng 2018',
    adminPenalty: 'Phạt tiền từ 10.000.000đ đến 20.000.000đ đối với tổ chức (cá nhân chịu phạt 5.000.000đ - 10.000.000đ); buộc gỡ bỏ thông tin vi phạm.',
    criminalPenalty: 'Nếu gây hậu quả rất nghiêm trọng hoặc thu lợi bất chính có thể bị phạt tù từ 2 đến 7 năm theo Điều 288 Bộ luật Hình sự 2015.',
    realWorldExample: 'Chia sẻ bài viết "vỡ đập thủy điện" hoặc "dịch bệnh bùng phát phong tỏa toàn thành phố" kèm lời kêu gọi tích trữ đồ ăn chỉ vì thấy một trang mạng đăng tải.',
    correctConduct: 'Chỉ chia sẻ tin tức từ các cơ quan báo chí chính thống có giấy phép hoạt động, cổng thông tin điện tử của Chính phủ và các Bộ ngành.',
    riskBadge: 'Nghiêm trọng',
  },
  {
    id: 'rule-defamation-1',
    category: 'defamation',
    categoryName: 'Xúc phạm danh dự & Bóc phốt',
    title: 'Vu khống, xúc phạm uy tín cơ quan hoặc danh dự nhân phẩm cá nhân',
    prohibitedAct: 'Dùng trang cá nhân, hội nhóm để "bóc phốt", chửi bới, gán ghép tội danh lừa đảo cho người khác khi cơ quan chức năng chưa kết luận.',
    legalBasis: 'Điểm a Khoản 1 Điều 101 Nghị định 15/2020/NĐ-CP; Điều 16 Luật An ninh mạng 2018',
    adminPenalty: 'Phạt tiền 5.000.000đ - 10.000.000đ đối với cá nhân; buộc công khai xin lỗi và gỡ bỏ bài viết.',
    criminalPenalty: 'Có thể bị truy cứu hình sự về Tội làm nhục người khác (Điều 155 BLHS) với mức phạt tù đến 5 năm, hoặc Tội vu khống (Điều 156 BLHS) phạt tù đến 7 năm.',
    realWorldExample: 'Đăng ảnh chân dung người khác kèm lời thóa mạ "con nợ lừa đảo giật tiền" lên các nhóm Facebook để gây sức ép đòi nợ.',
    correctConduct: 'Tranh chấp dân sự hoặc tài chính cần được giải quyết thông qua thương lượng hoặc nộp đơn khởi kiện tại Tòa án nhân dân, không được tự ý bêu riếu trên mạng.',
    riskBadge: 'Cao',
  },
  {
    id: 'rule-privacy-1',
    category: 'privacy',
    categoryName: 'Đời tư & Dữ liệu cá nhân',
    title: 'Tiết lộ bí mật đời tư, căn cước công dân, số điện thoại người khác',
    prohibitedAct: 'Tự ý thu thập, đăng tải hình ảnh riêng tư, tài liệu mật, số Căn cước công dân, địa chỉ nhà riêng, sao kê ngân hàng của cá nhân mà không được sự đồng ý.',
    legalBasis: 'Điểm e Khoản 1 Điều 102 Nghị định 15/2020/NĐ-CP; Nghị định 13/2023/NĐ-CP về Bảo vệ dữ liệu cá nhân; Điều 16 Luật An ninh mạng 2018',
    adminPenalty: 'Phạt tiền 10.000.000đ - 20.000.000đ đối với cá nhân; buộc tiêu hủy dữ liệu và gỡ bỏ thông tin.',
    criminalPenalty: 'Có thể bị xử lý hình sự theo Điều 288 hoặc Điều 159 Bộ luật Hình sự (Tội xâm phạm bí mật hoặc an toàn thư tín, điện thoại, điện tín).',
    realWorldExample: 'Chụp hình hai mặt CCCD của người khác hoặc đăng số điện thoại của người bán hàng vào các diễn đàn quấy rối (doxing).',
    correctConduct: 'Tuyệt đối tôn trọng quyền bảo vệ đời tư cá nhân. Chỉ chia sẻ dữ liệu cá nhân khi người đó cho phép bằng văn bản hoặc quy định pháp luật cho phép.',
    riskBadge: 'Cao',
  },
  {
    id: 'rule-fraud-1',
    category: 'fraud',
    categoryName: 'Lừa đảo & Giả mạo',
    title: 'Giả mạo trang tin, cơ quan nhà nước, gửi link lừa đảo chiếm đoạt tài sản',
    prohibitedAct: 'Lập fanpage, website giả mạo cơ quan Công an, Tòa án, ngân hàng; phát tán đường link phishing để chiếm đoạt tài khoản mạng xã hội hoặc tiền ngân hàng.',
    legalBasis: 'Điều 18 & 21 Luật An ninh mạng 2018; Điểm đ Khoản 1 Điều 101 Nghị định 15/2020/NĐ-CP',
    adminPenalty: 'Phạt tiền 10.000.000đ - 20.000.000đ đối với hành vi giả mạo trang tin điện tử; tịch thu tang vật.',
    criminalPenalty: 'Truy cứu hình sự theo Điều 174 (Tội lừa đảo chiếm đoạt tài sản) hoặc Điều 290 Bộ luật Hình sự (Sử dụng mạng máy tính chiếm đoạt tài sản), phạt tù từ 07 đến 20 năm hoặc tù chung thân.',
    realWorldExample: 'Mạo danh cán bộ Công an gọi điện dọa "liên quan đường dây rửa tiền", yêu cầu bấm vào đường link lạ để xác minh tài khoản.',
    correctConduct: 'Cơ quan Công an không bao giờ làm việc qua điện thoại hay yêu cầu chuyển tiền vào tài khoản cá nhân. Báo ngay cho cơ quan công an gần nhất.',
    riskBadge: 'Rất nghiêm trọng',
  },
  {
    id: 'rule-cyberattack-1',
    category: 'cyberattack',
    categoryName: 'Tấn công mạng & Mã độc',
    title: 'Xâm nhập trái phép tài khoản, đánh cắp mật khẩu, phát tán mã độc',
    prohibitedAct: 'Cố ý chiếm quyền điều khiển Facebook, Zalo, Email của người khác; phát tán virus, trojan, keylogger qua tập tin đính kèm hoặc tin nhắn.',
    legalBasis: 'Điều 18 Luật An ninh mạng 2018; Điều 80 Nghị định 15/2020/NĐ-CP',
    adminPenalty: 'Phạt tiền từ 30.000.000đ đến 50.000.000đ đối với hành vi truy cập bất hợp pháp thiết bị người khác.',
    criminalPenalty: 'Phạt tù từ 01 năm đến 12 năm theo Điều 287 (Tội cản trở hoặc gây rối loạn mạng) hoặc Điều 289 (Tội xâm nhập trái phép mạng máy tính) Bộ luật Hình sự.',
    realWorldExample: 'Hack tài khoản Facebook của bạn bè rồi nhắn tin cho danh bạ nhờ chuyển khoản vay tiền gấp.',
    correctConduct: 'Sử dụng xác thực 2 lớp (2FA), không mượn tài khoản hoặc sử dụng công cụ crack phần mềm độc hại.',
    riskBadge: 'Rất nghiêm trọng',
  },
  {
    id: 'rule-security-1',
    category: 'security',
    categoryName: 'An ninh trật tự & Kích động',
    title: 'Kích động bạo lực, chia rẽ khối đại đoàn kết, chống phá Nhà nước',
    prohibitedAct: 'Đăng tải thông tin kích động biểu tình trái phép, chia rẽ vùng miền, sắc tộc, tôn giáo, xuyên tạc lịch sử hoặc chống phá Nhà nước CHXHCN Việt Nam.',
    legalBasis: 'Điều 8 Luật An ninh mạng 2018; Điểm b Khoản 1 Điều 101 Nghị định 15/2020/NĐ-CP',
    adminPenalty: 'Phạt tiền 10.000.000đ - 20.000.000đ (cá nhân vi phạm) nếu chưa cấu thành tội phạm hình sự.',
    criminalPenalty: 'Truy cứu hình sự theo Điều 117 (Làm, tàng trữ, phát tán thông tin chống Nhà nước) hoặc Điều 331 (Lợi dụng quyền tự do dân chủ) với khung hình phạt đến 12 năm tù.',
    realWorldExample: 'Đăng bài phân biệt vùng miền bằng từ ngữ thù địch, kêu gọi tụ tập bạo động phá hoại tài sản công cộng.',
    correctConduct: 'Tôn trọng truyền thống đoàn kết toàn dân tộc, giữ gìn thuần phong mỹ tục, tuyệt đối không hùa theo các lời kích động cực đoan.',
    riskBadge: 'Rất nghiêm trọng',
  },
  {
    id: 'rule-harmful-content-1',
    category: 'harmful_content',
    categoryName: 'Văn hóa phẩm độc hại & Trẻ em',
    title: 'Phát tán clip bạo lực học đường, hình ảnh khiêu dâm, xâm hại trẻ em',
    prohibitedAct: 'Chia sẻ các clip học sinh đánh nhau, video tai nạn ghê rợn máu me, nội dung dâm ô khiêu dâm hoặc hình ảnh xâm hại quyền trẻ em trên không gian mạng.',
    legalBasis: 'Điều 29 Luật An ninh mạng 2018 (Bảo vệ trẻ em trên không gian mạng); Điểm b Khoản 1 Điều 101 Nghị định 15/2020/NĐ-CP',
    adminPenalty: 'Phạt tiền 5.000.000đ - 10.000.000đ (cá nhân); buộc tiêu hủy và gỡ bỏ toàn bộ tệp tin vi phạm.',
    criminalPenalty: 'Có thể bị truy cứu về Tội truyền bá văn hóa phẩm đồi trụy (Điều 326 BLHS) với mức phạt tù lên đến 15 năm.',
    realWorldExample: 'Chia sẻ clip một nhóm học sinh đánh bạn kèm chú thích "link full trong bình luận" để câu tương tác bán hàng online.',
    correctConduct: 'Khi phát hiện bạo lực học đường hoặc xâm hại trẻ em, hãy bấm báo cáo vi phạm trên nền tảng và gọi ngay Tổng đài Quốc gia Bảo vệ Trẻ em 111.',
    riskBadge: 'Nghiêm trọng',
  },
  {
    id: 'rule-copyright-1',
    category: 'copyright',
    categoryName: 'Bản quyền & Sở hữu trí tuệ',
    title: 'Phát tán phim lậu, phần mềm bẻ khóa, âm nhạc chưa được cấp phép',
    prohibitedAct: 'Truyền bá tác phẩm điện ảnh, âm nhạc, sách báo điện tử hoặc phần mềm có bản quyền mà không có sự cho phép của chủ sở hữu quyền tác giả.',
    legalBasis: 'Khoản 2 Điều 101 Nghị định 15/2020/NĐ-CP; Nghị định 131/2013/NĐ-CP; Luật Sở hữu trí tuệ',
    adminPenalty: 'Phạt tiền 10.000.000đ - 20.000.000đ đối với hành vi xuất bản, phân phối trái phép; buộc gỡ bỏ đường dẫn.',
    criminalPenalty: 'Truy cứu hình sự theo Điều 225 Bộ luật Hình sự (Tội xâm phạm quyền tác giả, quyền liên quan) nếu quy mô thương mại.',
    realWorldExample: 'Livestream phát lậu trận bóng đá có bản quyền độc quyền của đài truyền hình kèm chèn banner cá cược online.',
    correctConduct: 'Tôn trọng tài sản trí tuệ của tác giả, sử dụng các dịch vụ và nền tảng nội dung số có bản quyền chính thức.',
    riskBadge: 'Nghiêm trọng',
  },
];
