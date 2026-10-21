export interface HotlineEntry {
  id: string;
  agencyName: string;
  role: string;
  phone: string;
  website?: string;
  address?: string;
  instructions: string;
}

export const OFFICIAL_HOTLINES: HotlineEntry[] = [
  {
    id: 'a05-bca',
    agencyName: 'Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao (A05) - Bộ Công an',
    role: 'Tiếp nhận tố giác tội phạm công nghệ cao, lừa đảo trực tuyến, xâm phạm an ninh quốc gia.',
    phone: '069.234.3146',
    address: 'Số 47 Phạm Văn Đồng, Cầu Giấy, Hà Nội',
    instructions: 'Người dân có thể đến trực tiếp trụ sở hoặc nộp đơn tố giác tội phạm kèm đầy đủ tài liệu, chứng cứ.',
  },
  {
    id: 'ais-mic',
    agencyName: 'Cổng Cảnh báo an toàn thông tin Việt Nam (Cục An toàn thông tin - Bộ TT&TT)',
    role: 'Tiếp nhận báo cáo website lừa đảo, tin nhắn rác, cuộc gọi giả mạo và mã độc.',
    phone: '024.3209.6789',
    website: 'https://canhbao.khonggianmang.vn',
    instructions: 'Truy cập cổng canhbao.khonggianmang.vn để gửi link lừa đảo, số điện thoại mạo danh hoặc tài khoản ngân hàng gian lận.',
  },
  {
    id: 'childline-111',
    agencyName: 'Tổng đài Quốc gia Bảo vệ Trẻ em (Cục Trẻ em - Bộ LĐ-TB&XH)',
    role: 'Hỗ trợ, can thiệp khẩn cấp bảo vệ trẻ em trên môi trường mạng, xử lý bạo lực học đường, bóc mẽ quấy rối.',
    phone: '111',
    website: 'https://tongdai111.vn',
    instructions: 'Gọi miễn phí 24/7 từ bất kỳ số điện thoại nào trên toàn quốc.',
  },
  {
    id: 'vncert',
    agencyName: 'Trung tâm Ứng cứu khẩn cấp không gian mạng Việt Nam (VNCERT/CC)',
    role: 'Phản ánh tin nhắn rác, cuộc gọi rác và thư điện tử rác.',
    phone: '156 hoặc 5656',
    website: 'https://chongthurac.vn',
    instructions: 'Soạn tin nhắn miễn phí gửi 156 (hoặc 5656) theo cú pháp: V [Số điện thoại phát tán] [Nội dung quảng cáo] gửi 156.',
  },
];

export const EVIDENCE_COLLECTION_GUIDE = [
  {
    step: '1',
    title: 'Chụp ảnh màn hình toàn diện',
    details: 'Chụp rõ nét toàn bộ màn hình bao gồm: đường link (URL) trang cá nhân hoặc bài viết, thời gian đăng bài, ảnh đại diện, nội dung bài viết và các bình luận liên quan.',
  },
  {
    step: '2',
    title: 'Lập Vi Bằng tại Văn phòng Thừa phát lại',
    details: 'Vi bằng là văn bản do Thừa phát lại lập ghi nhận lại việc bài viết, video hay tin nhắn đang tồn tại trên không gian mạng. Vi bằng là nguồn chứng cứ hợp pháp có giá trị pháp lý cao khi nộp ra Tòa án hoặc cơ quan Công an, tránh trường hợp đối tượng xóa bài tẩu tán chứng cứ.',
  },
  {
    step: '3',
    title: 'Sao kê ngân hàng & Lưu trữ tin nhắn',
    details: 'Nếu bị lừa đảo tài chính: in bản sao kê có đóng dấu đỏ của ngân hàng giao dịch, lưu trữ toàn bộ lịch sử trò chuyện chat Zalo/Telegram/Messenger không được xóa.',
  },
  {
    step: '4',
    title: 'Gửi Đơn tố giác tội phạm',
    details: 'Gửi đơn đến Cơ quan Cảnh sát điều tra Công an cấp quận/huyện nơi bạn cư trú hoặc nơi đối tượng cư trú để được thụ lý giải quyết theo quy định của Bộ luật Tố tụng hình sự.',
  },
];
