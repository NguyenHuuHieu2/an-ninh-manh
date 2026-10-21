export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  feedback: string;
}

export interface QuizScenario {
  id: string;
  title: string;
  situation: string;
  question: string;
  options: QuizOption[];
  legalReference: string;
  practicalTip: string;
}

export const QUIZ_SCENARIOS: QuizScenario[] = [
  {
    id: 'quiz-1',
    title: 'Tình huống 1: Đòi nợ qua mạng xã hội',
    situation: 'Bạn cho một người quen vay 20 triệu đồng. Đến hẹn người này không trả và chặn liên lạc. Quá bức xúc, bạn chụp hình chân dung của người đó kèm ảnh chụp CCCD đăng lên Facebook với nội dung: "Truy tìm con nợ lừa đảo, ai thấy liên hệ giúp mình, loại người vô liêm sỉ".',
    question: 'Hành vi của bạn có vi phạm pháp luật an ninh mạng không?',
    options: [
      {
        id: 'opt-1a',
        text: 'Không vi phạm, vì người đó quỵt nợ của tôi trước nên tôi có quyền tố cáo công khai.',
        isCorrect: false,
        feedback: 'Sai. Pháp luật không cho phép dùng hành vi trái luật (xúc phạm danh dự, lộ dữ liệu cá nhân) để giải quyết quan hệ dân sự.',
      },
      {
        id: 'opt-1b',
        text: 'Có vi phạm. Bị phạt tiền từ 5 - 10 triệu đồng và có thể bị xử lý hình sự về tội làm nhục người khác hoặc vu khống.',
        isCorrect: true,
        feedback: 'Chính xác! Đăng ảnh CCCD và từ ngữ lăng mạ người khác lên mạng vi phạm Điểm a Khoản 1 Điều 101 Nghị định 15/2020/NĐ-CP và Điều 16 Luật An ninh mạng.',
      },
      {
        id: 'opt-1c',
        text: 'Chỉ vi phạm nếu bị người đó kiện ra tòa, còn công an không can thiệp.',
        isCorrect: false,
        feedback: 'Sai. Cơ quan công an hoàn toàn có thể lập biên bản xử phạt hành chính khi nhận được tố giác hoặc phát hiện hành vi vi phạm.',
      },
    ],
    legalReference: 'Điểm a Khoản 1 Điều 101 Nghị định 15/2020/NĐ-CP; Điều 155 Bộ luật Hình sự',
    practicalTip: 'Khi bị nợ không trả, hãy làm đơn khởi kiện ra Tòa án nhân dân hoặc nộp đơn tố giác tội phạm lừa đảo/lạm dụng tín nhiệm đến cơ quan Công an.',
  },
  {
    id: 'quiz-2',
    title: 'Tình huống 2: Chia sẻ tin tức giật gân chưa kiểm chứng',
    situation: 'Lướt Facebook thấy một bài viết từ tài khoản cá nhân thông báo: "Khẩn cấp: Hồ thủy điện gần tỉnh mình sắp xả lũ bất ngờ nửa đêm, nguy cơ ngập chìm toàn huyện, bà con chia sẻ ngay để sơ tán!". Thấy nguy cấp, bạn bấm nút Chia sẻ (Share) ngay về trang cá nhân.',
    question: 'Nếu thông tin này là bịa đặt, bạn có bị xử phạt không dù bạn chỉ là người bấm chia sẻ?',
    options: [
      {
        id: 'opt-2a',
        text: 'Có bị phạt. Người chia sẻ lại thông tin sai sự thật cũng chịu trách nhiệm pháp lý như người đăng bài gốc.',
        isCorrect: true,
        feedback: 'Chính xác! Điểm a Khoản 1 Điều 101 Nghị định 15/2020/NĐ-CP quy định xử phạt cả hành vi "cung cấp, chia sẻ" thông tin giả mạo, sai sự thật.',
      },
      {
        id: 'opt-2b',
        text: 'Không bị phạt vì tôi chỉ share lại chứ không phải người tự viết ra nội dung đó.',
        isCorrect: false,
        feedback: 'Sai lầm rất phổ biến! Luật quy định rõ hành vi "chia sẻ" (share/retweet) tin giả cũng bị phạt tiền từ 5 - 10 triệu đồng.',
      },
      {
        id: 'opt-2c',
        text: 'Chỉ bị nhắc nhở bằng văn bản nếu xóa bài trong 24 giờ.',
        isCorrect: false,
        feedback: 'Sai. Việc gỡ bỏ là biện pháp khắc phục hậu quả bắt buộc, nhưng cơ quan chức năng vẫn có quyền ra quyết định xử phạt hành chính.',
      },
    ],
    legalReference: 'Điểm a Khoản 1 Điều 101 Nghị định 15/2020/NĐ-CP (phạt từ 5 - 10 triệu đồng với cá nhân)',
    practicalTip: 'Đối với tin tức thiên tai, bão lũ, hãy kiểm tra ngay Cổng thông tin Trung tâm Dự báo Khí tượng Thủy văn Quốc gia hoặc báo chí chính thống trước khi lan truyền.',
  },
  {
    id: 'quiz-3',
    title: 'Tình huống 3: Bình luận xúc phạm trên Livestream',
    situation: 'Xem một buổi livestream bán hàng hoặc giải trí, bạn cảm thấy khó chịu với ngoại hình của người dẫn chương trình và để lại bình luận: "Trông mặt mũi như quái vật dị hợm, giọng nói kinh tởm mà cũng bày đặt lên mạng kiếm tiền".',
    question: 'Bình luận trên môi trường mạng như vậy bị xử lý thế nào?',
    options: [
      {
        id: 'opt-3a',
        text: 'Mạng xã hội là nơi tự do ngôn luận nên bình luận chê bai là chuyện bình thường không thể bị phạt.',
        isCorrect: false,
        feedback: 'Sai. Tự do ngôn luận phải trong khuôn khổ pháp luật và không được xâm hại danh dự, nhân phẩm của cá nhân khác.',
      },
      {
        id: 'opt-3b',
        text: 'Có thể bị xử phạt hành chính từ 5 đến 10 triệu đồng vì xúc phạm danh dự, nhân phẩm người khác.',
        isCorrect: true,
        feedback: 'Chính xác! Hành vi dùng từ ngữ miệt thị, hạ nhục người khác trong bình luận mạng xã hội vi phạm Nghị định 15/2020/NĐ-CP.',
      },
      {
        id: 'opt-3c',
        text: 'Chỉ bị tài khoản đó chặn (block), pháp luật không quan tâm đến các bình luận nhỏ lẻ.',
        isCorrect: false,
        feedback: 'Sai. Nạn nhân có quyền lập vi bằng lưu lại bình luận và gửi đơn khiếu nại đến Sở Thông tin và Truyền thông hoặc cơ quan Công an.',
      },
    ],
    legalReference: 'Điểm a Khoản 1 Điều 101 Nghị định 15/2020/NĐ-CP; Quyết định 874/QĐ-BTTTT',
    practicalTip: 'Tuân thủ quy tắc ứng xử lành mạnh: không sử dụng ngôn từ miệt thị ngoại hình (body shaming) hay xúc phạm người khác trên không gian mạng.',
  },
  {
    id: 'quiz-4',
    title: 'Tình huống 4: Bán hàng qua mạng quảng cáo thổi phồng',
    situation: 'Bạn kinh doanh trà thảo mộc trên mạng xã hội. Để thu hút khách mua, bạn viết bài quảng cáo: "Trà thảo mộc thần dược - Cam kết chữa khỏi dứt điểm 100% bệnh tiểu đường và ung thư chỉ sau 2 tuần".',
    question: 'Quảng cáo sai sự thật trên không gian mạng sẽ bị xử lý ra sao?',
    options: [
      {
        id: 'opt-4a',
        text: 'Bị xử phạt vi phạm hành chính về quảng cáo gian dối và thông tin sai sự thật, mức phạt có thể lên tới 50 - 70 triệu đồng, buộc thu hồi sản phẩm.',
        isCorrect: true,
        feedback: 'Chính xác! Hành vi quảng cáo sai sự thật về công dụng thuốc/thực phẩm chức năng vi phạm nghiêm trọng Luật Quảng cáo và Nghị định 38/2021/NĐ-CP.',
      },
      {
        id: 'opt-4b',
        text: 'Chỉ vi phạm nếu có khách uống vào bị ngộ độc nhập viện.',
        isCorrect: false,
        feedback: 'Sai. Bản thân hành vi đăng thông tin quảng cáo sai sự thật đã cấu thành vi phạm pháp luật mà không cần đợi hậu quả ngộ độc xảy ra.',
      },
      {
        id: 'opt-4c',
        text: 'Mạng xã hội bán hàng ai cũng nói quá, cơ quan chức năng không quản lý việc này.',
        isCorrect: false,
        feedback: 'Sai. Lực lượng Quản lý thị trường và An ninh mạng thường xuyên rà soát và xử phạt rất nghiêm khắc các trường hợp quảng cáo thần thánh hóa thuốc.',
      },
    ],
    legalReference: 'Điều 34 Nghị định 38/2021/NĐ-CP; Điều 101 Nghị định 15/2020/NĐ-CP',
    practicalTip: 'Bán hàng online phải trung thực, minh bạch thành phần, có giấy phép công bố sản phẩm của cơ quan y tế có thẩm quyền.',
  },
  {
    id: 'quiz-5',
    title: 'Tình huống 5: Phát tán video bạo lực học đường',
    situation: 'Bạn tình cờ quay được clip hai bạn học sinh đánh nhau trong công viên. Bạn đăng ngay video này lên TikTok với caption "Hóng biến cực căng, link full đánh dã man" để kéo lượt theo dõi.',
    question: 'Hành vi phát tán clip bạo lực trẻ em trên mạng vi phạm điều gì?',
    options: [
      {
        id: 'opt-5a',
        text: 'Không vi phạm vì tôi chỉ quay lại sự việc có thật để cảnh báo xã hội.',
        isCorrect: false,
        feedback: 'Sai. Mục đích câu view và chia sẻ hình ảnh bạo lực xâm hại trẻ em là hành vi bị nghiêm cấm theo luật pháp.',
      },
      {
        id: 'opt-5b',
        text: 'Vi phạm Luật Trẻ em 2016 và Luật An ninh mạng 2018 (Điều 29), bị xử phạt tiền và buộc gỡ bỏ nội dung độc hại.',
        isCorrect: true,
        feedback: 'Chính xác! Pháp luật nghiêm cấm công bố, tiết lộ thông tin về đời sống riêng tư, bí mật cá nhân của trẻ em mà không được sự đồng ý.',
      },
      {
        id: 'opt-5c',
        text: 'Chỉ vi phạm nếu hai học sinh đó yêu cầu gỡ.',
        isCorrect: false,
        feedback: 'Sai. Cơ quan chức năng có thẩm quyền chủ động xử lý để bảo vệ danh dự, tâm lý và quyền lợi tốt nhất của trẻ em.',
      },
    ],
    legalReference: 'Điều 29 Luật An ninh mạng 2018; Điều 31 Nghị định 130/2021/NĐ-CP',
    practicalTip: 'Khi chứng kiến bạo lực trẻ em, hãy can thiệp an toàn hoặc gọi ngay Tổng đài 111 và báo công an, tuyệt đối không phát tán clip làm tổn thương nạn nhân.',
  },
];
