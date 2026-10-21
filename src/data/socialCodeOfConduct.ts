export interface ConductRule {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  checklist: string[];
}

export const CODE_OF_CONDUCT: ConductRule[] = [
  {
    id: 'rule-respect',
    name: '1. Quy tắc Tôn trọng, Tuân thủ pháp luật',
    shortDesc: 'Tuân thủ luật pháp Việt Nam, tôn trọng quyền và lợi ích hợp pháp của tổ chức, cá nhân.',
    fullDesc: 'Mọi phát ngôn và hoạt động tương tác trên không gian mạng đều phải phù hợp với quy định của Hiến pháp, Luật An ninh mạng và các văn bản quy phạm pháp luật liên quan.',
    checklist: [
      'Tìm hiểu và tuân thủ các quy định pháp luật về thông tin điện tử và mạng xã hội.',
      'Không đăng tải, chia sẻ thông tin vi phạm pháp luật, xúc phạm danh dự, nhân phẩm người khác.',
      'Tôn trọng bản quyền tác giả và quyền sở hữu trí tuệ.',
    ],
  },
  {
    id: 'rule-healthy',
    name: '2. Quy tắc Lành mạnh',
    shortDesc: 'Hành vi, ứng xử trên mạng xã hội phù hợp với các giá trị đạo đức, văn hóa truyền thống tốt đẹp của dân tộc.',
    fullDesc: 'Giữ gìn sự trong sáng của tiếng Việt, ứng xử có văn hóa, văn minh, bao dung, không dùng từ ngữ thù ghét hay phân biệt đối xử.',
    checklist: [
      'Không sử dụng ngôn từ tục tĩu, xúc phạm hoặc kích động thù hận, bạo lực.',
      'Góp ý xây dựng, không tham gia bầy đàn mạt sát (cyberbullying).',
      'Lan tỏa thông điệp tích cực, tấm gương người tốt việc tốt trong đời sống.',
    ],
  },
  {
    id: 'rule-security',
    name: '3. Quy tắc An toàn, Bảo mật thông tin',
    shortDesc: 'Tuân thủ các quy định và hướng dẫn về bảo vệ an toàn và bảo mật thông tin.',
    fullDesc: 'Chủ động bảo vệ tài khoản cá nhân, không cung cấp thông tin nhạy cảm của bản thân hoặc người khác cho các đối tượng đáng ngờ.',
    checklist: [
      'Bật bảo mật 2 lớp (2FA) cho tất cả tài khoản mạng xã hội và email.',
      'Không tự ý công khai CCCD, số tài khoản, số điện thoại của mình hoặc người khác.',
      'Cảnh giác trước các đường link trúng thưởng, yêu cầu nạp tiền hoặc mã OTP.',
    ],
  },
  {
    id: 'rule-responsibility',
    name: '4. Quy tắc Trách nhiệm',
    shortDesc: 'Chịu trách nhiệm về các hành vi, ứng xử trên mạng xã hội; phối hợp với cơ quan chức năng xử lý vi phạm.',
    fullDesc: 'Người dùng có trách nhiệm kiểm chứng nguồn tin trước khi chia sẻ, đồng thời chủ động báo cáo các hành vi vi phạm hoặc lừa đảo.',
    checklist: [
      'Chỉ chia sẻ tin tức từ nguồn chính thống đã được cơ quan có thẩm quyền xác thực.',
      'Khi phát hiện tin giả, lừa đảo: bấm báo cáo vi phạm và cảnh báo người thân.',
      'Sẵn sàng đính chính, xin lỗi công khai khi phát hiện mình đã chia sẻ thông tin chưa chính xác.',
    ],
  },
];

export const THREE_SECOND_PAUSE = [
  {
    step: '01',
    title: 'DỪNG LẠI (Pause)',
    content: 'Trước khi bấm Đăng, Bình luận hoặc Chia sẻ, hãy dừng lại 3 giây. Đừng để cảm xúc nóng giận hay tò mò nhất thời dẫn lối.',
  },
  {
    step: '02',
    title: 'KIỂM CHỨNG (Verify)',
    content: 'Nguồn tin này từ ai? Đã có báo chí chính thống hoặc cơ quan công an xác nhận chưa? Có dấu hiệu cắt ghép, bịa đặt không?',
  },
  {
    step: '03',
    title: 'ĐÁNH GIÁ HẬU QUẢ (Think)',
    content: 'Nội dung này có xúc phạm ai không? Có vi phạm Điều 101 Nghị định 15/2020 không? Nếu bị mời lên làm việc, mình có bằng chứng không?',
  },
];
