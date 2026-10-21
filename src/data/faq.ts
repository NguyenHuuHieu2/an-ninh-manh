export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  lawCite: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Tôi bị người khác đăng bài bóc phốt, vu khống trên Facebook thì phải làm sao?',
    answer: 'Bước 1: Không đôi co chửi bới lại trên mạng. Bước 2: Chụp ảnh màn hình URL, bài viết, tài khoản đối tượng và liên hệ ngay Văn phòng Thừa phát lại để lập vi bằng xác thực chứng cứ điện tử. Bước 3: Gửi đơn tố giác hành vi vi phạm đến Thanh tra Sở Thông tin và Truyền thông hoặc Cơ quan Công an cấp quận/huyện để yêu cầu xử phạt vi phạm hành chính và buộc bồi thường tổn thất tinh thần.',
    category: 'Bảo vệ bản thân',
    lawCite: 'Khoản 1 Điều 101 Nghị định 15/2020/NĐ-CP; Điều 155, 156 Bộ luật Hình sự',
  },
  {
    id: 'faq-2',
    question: 'Tôi chia sẻ (Share) lại một bài viết của người khác, nếu bài đó sai sự thật thì tôi có bị phạt tiền không?',
    answer: 'CÓ! Nghị định 15/2020/NĐ-CP quy định xử phạt cả hành vi "cung cấp" lẫn "chia sẻ" thông tin sai sự thật, xuyên tạc. Mức phạt đối với cá nhân là từ 5 đến 10 triệu đồng. Cơ quan chức năng không phân biệt bạn là người đầu tiên viết hay chỉ là người bấm chia sẻ lại. Do đó, nếu chưa có thông tin chính thống, tuyệt đối không bấm nút Chia sẻ.',
    category: 'Chia sẻ thông tin',
    lawCite: 'Điểm a Khoản 1 Điều 101 Nghị định 15/2020/NĐ-CP',
  },
  {
    id: 'faq-3',
    question: 'Đăng ảnh thẻ Căn cước công dân (CCCD) của người vay tiền để đòi nợ có vi phạm pháp luật không?',
    answer: 'VI PHẠM NGHIÊM TRỌNG! Số định danh cá nhân, ảnh chân dung trên CCCD là dữ liệu cá nhân nhạy cảm được pháp luật bảo vệ nghiêm ngặt theo Nghị định 13/2023/NĐ-CP và Luật An ninh mạng. Đăng CCCD của người khác khi chưa được cho phép bị phạt từ 10 - 20 triệu đồng và có thể bị khởi tố hình sự nếu gây hậu quả xấu.',
    category: 'Dữ liệu cá nhân',
    lawCite: 'Điểm e Khoản 1 Điều 102 Nghị định 15/2020/NĐ-CP; Nghị định 13/2023/NĐ-CP',
  },
  {
    id: 'faq-4',
    question: 'Chụp ảnh đề thi của kỳ thi tốt nghiệp THPT hoặc tài liệu công vụ đăng lên story có bị xử lý không?',
    answer: 'Đề thi chính thức trước khi hết giờ làm bài được xếp vào danh mục Bí mật Nhà nước mức độ Tối mật. Hành vi chụp ảnh truyền ra ngoài không gian mạng sẽ bị xử lý hình sự về Tội cố ý làm lộ bí mật nhà nước (Điều 337 Bộ luật Hình sự) với khung hình phạt từ 2 đến 15 năm tù.',
    category: 'An ninh trật tự',
    lawCite: 'Điều 337 Bộ luật Hình sự; Luật Bảo vệ bí mật nhà nước',
  },
  {
    id: 'faq-5',
    question: 'Đăng bình luận đánh giá tiêu cực (review 1 sao) về nhà hàng, quán ăn có bị coi là vu khống không?',
    answer: 'Nếu bạn review dựa trên trải nghiệm thực tế khách quan, mô tả chân thực món ăn/dịch vụ mà không bịa đặt, không chửi bới nhục mạ nhân phẩm nhân viên hay chủ quán thì hoàn toàn hợp pháp. Ngược lại, nếu bịa đặt chuyện quán dùng thịt ôi thiu mà không có bằng chứng, hoặc cố tình kêu gọi bão đánh giá 1 sao nhằm triệt hạ đối thủ kinh doanh thì cấu thành hành vi truyền đưa thông tin bịa đặt gây thiệt hại cho doanh nghiệp, bị phạt 10 - 20 triệu đồng.',
    category: 'Phát ngôn mạng',
    lawCite: 'Điểm a Khoản 1 Điều 101 Nghị định 15/2020/NĐ-CP; Luật Cạnh tranh',
  },
];
