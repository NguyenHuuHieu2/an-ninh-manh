/**
 * TỆP DỮ LIỆU MẪU: 15 LỖI VI PHẠM AN NINH MẠNG PHỔ BIẾN TẠI VIỆT NAM
 * 
 * Mỗi mục bao gồm:
 * - tenHanhVi: Tên hành vi vi phạm
 * - nhomViPham: Nhóm phân loại
 * - moTaNgan: Mô tả ngắn gọn, dễ hiểu cho người dùng phổ thông
 * - mucPhat: Mức phạt tiền và chế tài xử lý (hành chính & hình sự)
 * - tinhHuongMinhHoa: Tình huống thực tế đời thường
 * - tenVanBan: Tên văn bản pháp luật áp dụng
 * - dieuKhoan: Điều khoản cụ thể
 */

export interface CyberViolationItem {
  id: string;
  tenHanhVi: string;
  nhomViPham: string;
  moTaNgan: string;
  mucPhat: string;
  tinhHuongMinhHoa: string;
  tenVanBan: string;
  dieuKhoan: string;
}

export const CYBER_VIOLATIONS_15: CyberViolationItem[] = [
  {
    id: 'vp-01',
    tenHanhVi: 'Tung tin giả, sai sự thật về bão lũ, dịch bệnh, thiên tai',
    nhomViPham: 'Tin giả & Sai sự thật',
    moTaNgan: 'Đăng tải hoặc bấm nút chia sẻ (Share) bài viết giật gân, bịa đặt về thảm họa, dịch bệnh khi cơ quan chức năng chưa xác thực, gây hoang mang cho người dân.',
    mucPhat: 'Phạt tiền từ 10.000.000đ - 20.000.000đ đối với tổ chức; từ 5.000.000đ - 10.000.000đ đối với cá nhân. Buộc gỡ bỏ thông tin vi phạm. Nếu gây hậu quả đặc biệt nghiêm trọng có thể bị truy cứu hình sự theo Điều 288 Bộ luật Hình sự.',
    tinhHuongMinhHoa: 'Thấy một tài khoản mạng xã hội đăng tin "Đêm nay hồ thủy điện vỡ đập, nước dâng ngập nóc nhà, bà con share gấp", liền bấm nút Share về trang cá nhân khiến người thân nửa đêm cuống cuồng chạy nạn.',
    tenVanBan: 'Nghị định số 15/2020/NĐ-CP (sửa đổi, bổ sung bởi Nghị định 14/2022/NĐ-CP)',
    dieuKhoan: 'Điểm a Khoản 1 Điều 101',
  },
  {
    id: 'vp-02',
    tenHanhVi: 'Bóc phốt đòi nợ, bêu riếu hình ảnh người khác lên mạng',
    nhomViPham: 'Xúc phạm danh dự & Nhân phẩm',
    moTaNgan: 'Dùng Facebook, Zalo, TikTok để chửi bới, đăng mặt con nợ hoặc đối thủ kèm lời lẽ lăng mạ, vu khống lừa đảo để tạo sức ép đòi tiền.',
    mucPhat: 'Phạt tiền từ 5.000.000đ - 10.000.000đ đối với cá nhân; buộc công khai xin lỗi và xóa bài. Nạn nhân có thể khởi kiện đòi bồi thường danh dự hoặc cơ quan công an khởi tố tội Làm nhục người khác (Điều 155 BLHS, phạt tù đến 5 năm).',
    tinhHuongMinhHoa: 'Cho bạn vay 20 triệu đồng nhưng bị khất nợ, bèn chụp ảnh chân dung người đó kèm dòng chữ "Con nợ mặt dày vô liêm sỉ chuyên đi lừa đảo khắp xóm" đăng vào các hội nhóm địa phương.',
    tenVanBan: 'Nghị định số 15/2020/NĐ-CP và Bộ luật Dân sự 2015',
    dieuKhoan: 'Điểm a Khoản 1 Điều 101 Nghị định 15/2020/NĐ-CP; Điều 34 Bộ luật Dân sự',
  },
  {
    id: 'vp-03',
    tenHanhVi: 'Đăng ảnh hai mặt thẻ Căn cước công dân (CCCD), số điện thoại người khác',
    nhomViPham: 'Bảo vệ dữ liệu cá nhân',
    moTaNgan: 'Tự ý chụp, đăng tải công khai số Căn cước công dân, địa chỉ nhà, số điện thoại, sao kê ngân hàng của người khác khi chưa được họ cho phép bằng văn bản.',
    mucPhat: 'Phạt tiền từ 10.000.000đ - 20.000.000đ đối với cá nhân; buộc tiêu hủy toàn bộ dữ liệu thu thập trái phép.',
    tinhHuongMinhHoa: 'Nhặt được CCCD của người đánh rơi hoặc mâu thuẫn mua bán hàng, chụp rõ nét 2 mặt thẻ CCCD có số định danh, ngày sinh, quê quán rồi đăng lên diễn đàn công cộng.',
    tenVanBan: 'Nghị định số 15/2020/NĐ-CP và Nghị định số 13/2023/NĐ-CP',
    dieuKhoan: 'Điểm e Khoản 1 Điều 102 Nghị định 15/2020/NĐ-CP; Điều 17 Nghị định 13/2023/NĐ-CP',
  },
  {
    id: 'vp-04',
    tenHanhVi: 'Bình luận miệt thị ngoại hình (body shaming), lăng mạ trên livestream',
    nhomViPham: 'Xúc phạm danh dự & Ứng xử MXH',
    moTaNgan: 'Để lại những bình luận xúc phạm nhân phẩm, chê bai cơ thể, khiếm khuyết ngoại hình hoặc đe dọa người khác trên các bài đăng, video hoặc livestream.',
    mucPhat: 'Phạt tiền từ 5.000.000đ - 10.000.000đ đối với cá nhân vi phạm. Nếu tái phạm nhiều lần hoặc xúc phạm nghiêm trọng có thể bị lập vi bằng xử lý hình sự.',
    tinhHuongMinhHoa: 'Vào xem phiên livestream bán hàng của một người khuyết tật rồi bình luận liên tục: "Trông quái thai dị hợm thế kia mà cũng dám lên mạng kiếm tiền", kích động nhiều người khác hùa theo chửi bới.',
    tenVanBan: 'Nghị định số 15/2020/NĐ-CP và Quyết định 874/QĐ-BTTTT',
    dieuKhoan: 'Điểm a Khoản 1 Điều 101 Nghị định 15/2020/NĐ-CP',
  },
  {
    id: 'vp-05',
    tenHanhVi: 'Lập fanpage, website mạo danh cơ quan Công an, Tòa án, ngân hàng',
    nhomViPham: 'Lừa đảo & Mạo danh tổ chức',
    moTaNgan: 'Sử dụng logo, tên gọi, hình ảnh của cơ quan nhà nước hoặc tổ chức tín dụng để lập trang cá nhân, hội nhóm giả mạo nhằm trục lợi hoặc lừa đảo.',
    mucPhat: 'Phạt tiền từ 10.000.000đ - 20.000.000đ đối với hành vi giả mạo trang tin điện tử; truy cứu trách nhiệm hình sự về tội Lừa đảo chiếm đoạt tài sản (Điều 174 BLHS) với khung phạt tù lên tới chung thân.',
    tinhHuongMinhHoa: 'Lập fanpage mang tên "Cục An ninh mạng - Tiếp nhận hỗ trợ lấy lại tiền lừa đảo" có gắn huy hiệu Công an để dẫn dụ những người từng bị lừa tiếp tục nộp "phí xử lý hồ sơ".',
    tenVanBan: 'Luật An ninh mạng năm 2018 và Nghị định số 15/2020/NĐ-CP',
    dieuKhoan: 'Điều 18 Luật An ninh mạng 2018; Điểm đ Khoản 1 Điều 101 Nghị định 15/2020/NĐ-CP',
  },
  {
    id: 'vp-06',
    tenHanhVi: 'Quảng cáo bán hàng online thổi phồng, cam kết "chữa khỏi 100% bệnh nan y"',
    nhomViPham: 'Gian lận thương mại & Tin giả',
    moTaNgan: 'Kinh doanh thực phẩm bảo vệ sức khỏe hoặc mỹ phẩm qua mạng nhưng đăng bài quảng cáo gian dối như thần dược chữa dứt điểm ung thư, tiểu đường.',
    mucPhat: 'Phạt tiền từ 50.000.000đ - 70.000.000đ theo Nghị định 38/2021/NĐ-CP về quảng cáo; phạt bổ sung 10 - 20 triệu đồng theo Nghị định 15/2020/NĐ-CP, buộc tiêu hủy và thu hồi sản phẩm.',
    tinhHuongMinhHoa: 'Bán trà lá cây trên TikTok, ghép hình bác sĩ quân y nổi tiếng và cam kết: "Uống 1 hộp khỏi tiệt nọc tiểu đường tuýp 2, cam kết không tái phát trọn đời".',
    tenVanBan: 'Nghị định số 38/2021/NĐ-CP và Luật Quảng cáo năm 2012',
    dieuKhoan: 'Khoản 5 Điều 34 Nghị định 38/2021/NĐ-CP; Điều 101 Nghị định 15/2020/NĐ-CP',
  },
  {
    id: 'vp-07',
    tenHanhVi: 'Hack tài khoản mạng xã hội của bạn bè rồi nhắn tin vay tiền danh bạ',
    nhomViPham: 'Tấn công mạng & Lừa đảo tài sản',
    moTaNgan: 'Dùng thủ thuật đánh cắp quyền truy cập Facebook, Zalo của người khác, sau đó mạo danh chủ nick nhắn tin nhờ chuyển khoản vay tiền khẩn cấp.',
    mucPhat: 'Xử phạt hành chính từ 30.000.000đ - 50.000.000đ về hành vi xâm nhập trái phép mạng máy tính; truy cứu hình sự về tội Lừa đảo theo Điều 174 BLHS hoặc Điều 290 BLHS (phạt tù từ 7 đến 20 năm hoặc chung thân).',
    tinhHuongMinhHoa: 'Gửi link bình chọn ảnh cuộc thi có mã độc, bạn bấm vào bị mất nick Facebook; đối tượng nhắn tin cho 5 người bạn thân của nạn nhân nhờ chuyển 5 triệu đồng để nộp viện phí cấp cứu.',
    tenVanBan: 'Bộ luật Hình sự năm 2015 và Nghị định số 15/2020/NĐ-CP',
    dieuKhoan: 'Điều 289, Điều 290 Bộ luật Hình sự; Điều 80 Nghị định 15/2020/NĐ-CP',
  },
  {
    id: 'vp-08',
    tenHanhVi: 'Gửi đường link trúng thưởng giả mạo (phishing) lừa chiếm mã OTP ngân hàng',
    nhomViPham: 'Tội phạm công nghệ cao',
    moTaNgan: 'Phát tán tin nhắn "Tài khoản của bạn nhận được quà tặng tri ân 5 triệu đồng", kèm đường dẫn đến trang web giả mạo giao diện ngân hàng để yêu cầu nhập mật khẩu và mã OTP.',
    mucPhat: 'Phạt tù từ 03 năm đến 20 năm theo Điều 290 Bộ luật Hình sự (Tội sử dụng mạng máy tính, mạng viễn thông chiếm đoạt tài sản); tịch thu toàn bộ phương tiện và tài sản phạm tội.',
    tinhHuongMinhHoa: 'Gửi tin nhắn SMS mạo danh thương hiệu ngân hàng lớn: "Phát hiện đăng nhập bất thường, truy cập link www.nganhang-xacminh.com để bảo vệ tài sản", dẫn đến trang web giả lừa lấy mã OTP.',
    tenVanBan: 'Bộ luật Hình sự năm 2015 (sửa đổi 2017) và Luật An ninh mạng 2018',
    dieuKhoan: 'Điều 290 Bộ luật Hình sự; Điều 18 Luật An ninh mạng 2018',
  },
  {
    id: 'vp-09',
    tenHanhVi: 'Chia sẻ video bạo lực học đường, xâm hại đời tư trẻ em để câu view',
    nhomViPham: 'Văn hóa phẩm độc hại & Trẻ em',
    moTaNgan: 'Quay hoặc chia sẻ các clip học sinh bị lột đồ, đánh hội đồng lên mạng kèm chú thích giật gân, làm tổn hại nghiêm trọng tâm lý và danh dự trẻ em.',
    mucPhat: 'Phạt tiền từ 5.000.000đ - 10.000.000đ đối với cá nhân; buộc xóa vĩnh viễn clip. Nếu clip có tính chất làm nhục nạn nhân nặng nề có thể bị truy cứu trách nhiệm hình sự.',
    tinhHuongMinhHoa: 'Tình cờ có clip nữ sinh bị tát trong nhà vệ sinh trường học, đăng lên TikTok kèm ghi chú "Hóng biến link full dưới cmt" để tăng lượt theo dõi bán hàng.',
    tenVanBan: 'Luật Trẻ em năm 2016 và Luật An ninh mạng năm 2018',
    dieuKhoan: 'Điều 29 Luật An ninh mạng 2018; Điểm b Khoản 1 Điều 101 Nghị định 15/2020/NĐ-CP',
  },
  {
    id: 'vp-10',
    tenHanhVi: 'Chụp ảnh đề thi chính thức hoặc tài liệu mật của nhà nước đăng lên mạng',
    nhomViPham: 'Bí mật nhà nước & An ninh trật tự',
    moTaNgan: 'Chụp ảnh đề thi tuyển sinh, đề thi tốt nghiệp THPT khi chưa hết giờ làm bài, hoặc chụp văn bản công văn mật của cơ quan nhà nước đăng lên story mạng xã hội.',
    mucPhat: 'Xử lý hình sự về Tội cố ý làm lộ bí mật nhà nước (Điều 337 Bộ luật Hình sự) với khung hình phạt từ 02 năm đến 15 năm tù; đình chỉ thi và hủy toàn bộ kết quả.',
    tinhHuongMinhHoa: 'Thí sinh giấu điện thoại vào phòng thi tốt nghiệp, chụp đề thi môn Ngữ văn gửi cho người quen bên ngoài giải hộ chỉ sau 15 phút phát đề, làm lộ đề thi ra mạng xã hội.',
    tenVanBan: 'Bộ luật Hình sự năm 2015 và Luật Bảo vệ bí mật nhà nước 2018',
    dieuKhoan: 'Điều 337 Bộ luật Hình sự; Điều 8 Luật An ninh mạng 2018',
  },
  {
    id: 'vp-11',
    tenHanhVi: 'Livestream phát lậu trận bóng đá có bản quyền, chèn link cá độ cờ bạc',
    nhomViPham: 'Bản quyền & Đánh bạc trái phép',
    moTaNgan: 'Thu phát trái phép luồng tín hiệu truyền hình thể thao hoặc phim ảnh độc quyền lên Facebook, YouTube nhằm thu hút người xem rồi chèn banner dẫn sang trang cá cược bóng đá.',
    mucPhat: 'Phạt tiền từ 10.000.000đ - 30.000.000đ về vi phạm bản quyền theo Nghị định 131/2013/NĐ-CP; nếu có tổ chức lôi kéo đánh bạc có thể bị xử lý hình sự theo Điều 322 BLHS (phạt tù từ 05 đến 10 năm).',
    tinhHuongMinhHoa: 'Tạo trang "Xôi bóng đá" phát lậu trận đấu Ngoại hạng Anh thuộc bản quyền độc quyền của đài truyền hình, gắn mã QR dẫn vào nhóm Telegram đặt cược tiền.',
    tenVanBan: 'Nghị định số 131/2013/NĐ-CP và Nghị định số 15/2020/NĐ-CP',
    dieuKhoan: 'Khoản 2 Điều 101 Nghị định 15/2020/NĐ-CP; Điều 322 Bộ luật Hình sự',
  },
  {
    id: 'vp-12',
    tenHanhVi: 'Đăng tin tuyển dụng "việc nhẹ lương cao", làm nhiệm vụ online dụ nạp tiền',
    nhomViPham: 'Lừa đảo trực tuyến',
    moTaNgan: 'Đăng bài tuyển cộng tác viên xem video, ấn thích Shopee/TikTok được trả 300k - 500k/ngày, sau đó yêu cầu nạn nhân chuyển tiền nạp cọc "nâng cấp VIP" rồi cắt liên lạc.',
    mucPhat: 'Truy cứu trách nhiệm hình sự về Tội lừa đảo chiếm đoạt tài sản theo Điều 174 Bộ luật Hình sự, mức án cao nhất là tù chung thân.',
    tinhHuongMinhHoa: 'Nhắn tin qua Zalo tuyển mẹ bỉm sữa làm việc tại nhà kiếm 1 triệu/ngày, ban đầu trả thưởng 50k để tạo niềm tin, sau đó yêu cầu nạp 20 triệu để nhận hoa hồng 30% rồi chặn liên lạc.',
    tenVanBan: 'Bộ luật Hình sự năm 2015 và Luật An ninh mạng 2018',
    dieuKhoan: 'Điều 174 Bộ luật Hình sự; Điều 18 Luật An ninh mạng 2018',
  },
  {
    id: 'vp-13',
    tenHanhVi: 'Đăng bài phân biệt vùng miền, kỳ thị sắc tộc, kích động bạo lực',
    nhomViPham: 'Kích động & Phá hoại đoàn kết',
    moTaNgan: 'Sử dụng các danh xưng miệt thị văn hóa, tiếng nói, con người của một vùng miền hoặc dân tộc cụ thể, kích động tư tưởng thù hằn và chia rẽ nội bộ.',
    mucPhat: 'Phạt tiền từ 10.000.000đ - 20.000.000đ đối với cá nhân. Nếu có dấu hiệu chia rẽ khối đại đoàn kết toàn dân tộc sẽ bị xử lý hình sự theo Điều 116 Bộ luật Hình sự (phạt tù từ 02 đến 15 năm).',
    tinhHuongMinhHoa: 'Sau một vụ việc tranh cãi giao thông, đăng bài viết dùng từ ngữ miệt thị toàn bộ người dân của một tỉnh miền Trung kèm lời kêu gọi tẩy chay, xua đuổi.',
    tenVanBan: 'Luật An ninh mạng năm 2018 và Nghị định số 15/2020/NĐ-CP',
    dieuKhoan: 'Điểm b Khoản 1 Điều 101 Nghị định 15/2020/NĐ-CP; Điều 8 Luật An ninh mạng 2018',
  },
  {
    id: 'vp-14',
    tenHanhVi: 'Phát tán văn hóa phẩm đồi trụy, chia sẻ "link clip nóng" vào nhóm chat',
    nhomViPham: 'Văn hóa phẩm độc hại',
    moTaNgan: 'Tải về và phát tán các hình ảnh, video khiêu dâm, dung tục, đời tư nhạy cảm của người khác vào các hội nhóm Zalo, Telegram, Facebook.',
    mucPhat: 'Phạt tiền từ 5.000.000đ - 10.000.000đ (cá nhân); hoặc bị truy cứu trách nhiệm hình sự về Tội truyền bá văn hóa phẩm đồi trụy (Điều 326 BLHS) với mức án phạt tù lên đến 15 năm.',
    tinhHuongMinhHoa: 'Thấy trên mạng xôn xao vụ lộ clip riêng tư của một cô gái trẻ, lưu về máy rồi gửi vào nhóm chat bạn bè với chú thích "Link full không che cho anh em", khiến video lan truyền rộng rãi.',
    tenVanBan: 'Bộ luật Hình sự năm 2015 và Nghị định số 15/2020/NĐ-CP',
    dieuKhoan: 'Điểm b Khoản 1 Điều 101 Nghị định 15/2020/NĐ-CP; Điều 326 Bộ luật Hình sự',
  },
  {
    id: 'vp-15',
    tenHanhVi: 'Kêu gọi từ thiện cứu trợ giả mạo bằng tài khoản cá nhân trên mạng xã hội',
    nhomViPham: 'Lừa đảo & Lợi dụng lòng tin',
    moTaNgan: 'Lợi dụng tình hình bão lũ, hoàn cảnh hiểm nghèo của các bệnh nhân nặng, tự ý sao chép bài viết rồi đổi số tài khoản ngân hàng của bản thân để nhận tiền quyên góp rồi chiếm đoạt.',
    mucPhat: 'Phạt tiền từ 10.000.000đ - 20.000.000đ và buộc nộp lại toàn bộ số tiền thu lợi bất chính; truy cứu hình sự về Tội lừa đảo chiếm đoạt tài sản theo Điều 174 Bộ luật Hình sự.',
    tinhHuongMinhHoa: 'Lấy ảnh một cháu bé bị bỏng nặng đang điều trị tại bệnh viện đăng lên Facebook, giả danh người nhà kêu gọi ủng hộ và đính kèm số tài khoản ngân hàng cá nhân, chiếm đoạt hơn 80 triệu đồng của các nhà hảo tâm.',
    tenVanBan: 'Nghị định số 15/2020/NĐ-CP và Bộ luật Hình sự năm 2015',
    dieuKhoan: 'Điểm đ Khoản 1 Điều 101 Nghị định 15/2020/NĐ-CP; Điều 174 Bộ luật Hình sự',
  },
];
