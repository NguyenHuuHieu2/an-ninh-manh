import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { CYBER_VIOLATIONS_15, CyberViolationItem } from './src/data/cyberViolationsData.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Initialize GoogleGenAI client (server-side only)
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;
if (apiKey) {
  aiClient = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Convert dataset to string prompt for AI grounding
const DATASET_STRING = JSON.stringify(CYBER_VIOLATIONS_15, null, 2);

// System prompt strictly grounded in the 15 violations
const SITUATION_MATCHING_SYSTEM_PROMPT = `Bạn là Chuyên Viên Pháp Lý An Ninh Mạng Việt Nam.
Nhiệm vụ của bạn là: Đọc kỹ mô tả tình huống của người dùng và ĐỐI CHIẾU CHÍNH XÁC với tệp dữ liệu 15 lỗi vi phạm an ninh mạng phổ biến sau đây:

${DATASET_STRING}

QUY TẮC BẮT BUỘC (CRITICAL COMPLIANCE RULES):
1. Bạn CHỈ ĐƯỢC PHÉP đối chiếu với 15 lỗi vi phạm có trong danh mục trên.
2. Nếu tình huống của người dùng có dấu hiệu tương ứng với 1 trong 15 lỗi vi phạm trong tệp dữ liệu:
   - "matchFound": true
   - "matchedViolation": Trích xuất chính xác thông tin từ tệp dữ liệu gồm: id, tenHanhVi, nhomViPham, moTaNgan, mucPhat, tinhHuongMinhHoa, tenVanBan, dieuKhoan.
   - "explanation": Giải thích ngắn gọn (2-3 câu) vì sao tình huống của người dùng thuộc lỗi này.
   - "advice": Lời khuyên xử sự đúng pháp luật cho người dùng.
3. QUY TẮC TUYỆT ĐỐI VỀ VIỆC KHÔNG TỰ SUY ĐOÁN:
   Nếu mô tả của người dùng KHÔNG TÌM THẤY CĂN CỨ trong danh mục 15 lỗi trên (hoặc không thuộc phạm vi an ninh mạng, ví dụ hỏi về tranh chấp đất đai, ly hôn, vi phạm giao thông đường bộ, hoặc nội dung quá chung chung/mơ hồ không có hành vi cụ thể):
   - BẮT BUỘC trả về "matchFound": false
   - "matchedViolation": null
   - "message": "Hiện chưa đủ căn cứ trong tệp dữ liệu quy định để xác định lỗi vi phạm. Hệ thống tuyệt đối không tự suy đoán mức phạt. Xin vui lòng cung cấp thêm thông tin chi tiết hoặc liên hệ cơ quan có thẩm quyền để được hỗ trợ."
   - TUYỆT ĐỐI KHÔNG TỰ BỊA RA HOẶC SUY ĐOÁN BẤT KỲ MỨC PHẠT TIỀN NÀO.`;

// API: Đối chiếu tình huống người dùng với 15 lỗi vi phạm
app.post('/api/match-violation', async (req: Request, res: Response) => {
  try {
    const { userSituation } = req.body;
    if (!userSituation || typeof userSituation !== 'string' || !userSituation.trim()) {
      return res.status(400).json({ error: 'Mô tả tình huống không được để trống.' });
    }

    if (!aiClient) {
      return res.json(matchOfflineViolation(userSituation));
    }

    const prompt = `Mô tả tình huống của người dùng:
"${userSituation}"

Hãy đọc kỹ và đối chiếu với tệp 15 lỗi vi phạm an ninh mạng.
Trả về định dạng JSON thuần túy (không markdown) với cấu trúc:
{
  "matchFound": boolean,
  "message": string (nếu matchFound là false),
  "matchedViolation": {
    "id": string,
    "tenHanhVi": string,
    "nhomViPham": string,
    "moTaNgan": string,
    "mucPhat": string,
    "tinhHuongMinhHoa": string,
    "tenVanBan": string,
    "dieuKhoan": string
  } | null,
  "explanation": string,
  "advice": string
}`;

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction: SITUATION_MATCHING_SYSTEM_PROMPT,
        responseMimeType: 'application/json',
      },
    });

    const text = response.text?.trim() || '';
    const parsed = JSON.parse(text);
    return res.json(parsed);
  } catch (err: any) {
    console.error('Match violation error:', err);
    return res.json(matchOfflineViolation(req.body.userSituation || ''));
  }
});

// Offline strictly-grounded matching function
function matchOfflineViolation(situation: string) {
  const lower = situation.toLowerCase().trim();

  // Check 1: Tin giả, thiên tai, dịch bệnh (vp-01)
  if (lower.includes('vỡ đập') || lower.includes('tin đồn') || (lower.includes('dịch bệnh') && lower.includes('phong tỏa')) || lower.includes('tin giả') || lower.includes('share tin sai')) {
    const v = CYBER_VIOLATIONS_15.find(i => i.id === 'vp-01')!;
    return {
      matchFound: true,
      matchedViolation: v,
      explanation: 'Tình huống có dấu hiệu chia sẻ hoặc đăng tải thông tin chưa kiểm chứng, có thể gây hoang mang dư luận theo tệp dữ liệu vi phạm số 01.',
      advice: 'Gỡ ngay bài viết hoặc lượt chia sẻ; chỉ tiếp nhận và lan tỏa thông tin từ các cơ quan báo chí chính thống.',
    };
  }

  // Check 2: Bóc phốt nợ nần, chửi bới con nợ (vp-02)
  if ((lower.includes('bóc phốt') || lower.includes('quỵt nợ') || lower.includes('đòi nợ') || lower.includes('con nợ') || lower.includes('giật tiền')) && (lower.includes('facebook') || lower.includes('mạng') || lower.includes('đăng ảnh'))) {
    const v = CYBER_VIOLATIONS_15.find(i => i.id === 'vp-02')!;
    return {
      matchFound: true,
      matchedViolation: v,
      explanation: 'Tình huống sử dụng mạng xã hội để bêu riếu, xúc phạm danh dự người nợ tiền tương ứng với lỗi vi phạm số 02 trong tệp dữ liệu.',
      advice: 'Không dùng Facebook để đòi nợ. Hãy thu thập biên nhận hoặc sao kê giao dịch để khởi kiện tại Tòa án nhân dân nơi con nợ cư trú.',
    };
  }

  // Check 3: Đăng ảnh CCCD, lộ SĐT (vp-03)
  if (lower.includes('cccd') || lower.includes('căn cước') || lower.includes('chứng minh thư') || (lower.includes('số điện thoại') && lower.includes('đăng lên'))) {
    const v = CYBER_VIOLATIONS_15.find(i => i.id === 'vp-03')!;
    return {
      matchFound: true,
      matchedViolation: v,
      explanation: 'Tự ý đăng tải hình ảnh số thẻ Căn cước công dân hoặc thông tin định danh của người khác tương ứng với lỗi vi phạm số 03.',
      advice: 'Xóa ngay hình ảnh CCCD trên các diễn đàn; tuyệt đối bảo vệ dữ liệu cá nhân theo Nghị định 13/2023/NĐ-CP.',
    };
  }

  // Check 4: Miệt thị ngoại hình, body shaming (vp-04)
  if (lower.includes('miệt thị') || lower.includes('body shaming') || lower.includes('chê xấu') || lower.includes('dị hợm') || lower.includes('livestream chửi')) {
    const v = CYBER_VIOLATIONS_15.find(i => i.id === 'vp-04')!;
    return {
      matchFound: true,
      matchedViolation: v,
      explanation: 'Hành vi dùng lời lẽ miệt thị khiếm khuyết cơ thể hoặc lăng mạ người khác trên livestream/bình luận tương ứng với lỗi vi phạm số 04.',
      advice: 'Ứng xử có văn hóa trên mạng xã hội; không công kích cá nhân hay tham gia vào bạo lực mạng.',
    };
  }

  // Check 5: Mạo danh công an, ngân hàng (vp-05)
  if ((lower.includes('giả mạo') || lower.includes('mạo danh') || lower.includes('nhái')) && (lower.includes('công an') || lower.includes('ngân hàng') || lower.includes('tòa án') || lower.includes('fanpage'))) {
    const v = CYBER_VIOLATIONS_15.find(i => i.id === 'vp-05')!;
    return {
      matchFound: true,
      matchedViolation: v,
      explanation: 'Hành vi lập trang web hoặc trang cá nhân mạo danh cơ quan nhà nước, ngân hàng tương ứng với lỗi vi phạm số 05 trong tệp dữ liệu.',
      advice: 'Báo cáo ngay cho cơ quan Công an và Cổng Cảnh báo an toàn thông tin quốc gia (canhbao.khonggianmang.vn).',
    };
  }

  // Check 6: Quảng cáo thuốc thổi phồng (vp-06)
  if (lower.includes('chữa khỏi ung thư') || lower.includes('khỏi 100%') || lower.includes('thần dược') || (lower.includes('thực phẩm chức năng') && lower.includes('quảng cáo'))) {
    const v = CYBER_VIOLATIONS_15.find(i => i.id === 'vp-06')!;
    return {
      matchFound: true,
      matchedViolation: v,
      explanation: 'Quảng cáo sai sự thật, thổi phồng công dụng thực phẩm bảo vệ sức khỏe qua mạng tương ứng với lỗi vi phạm số 06.',
      advice: 'Tuân thủ đúng giấy phép quảng cáo y tế; không cam kết sai sự thật.',
    };
  }

  // Check 7: Hack nick bạn bè vay tiền (vp-07)
  if ((lower.includes('hack') || lower.includes('chiếm nick') || lower.includes('mất nick')) && (lower.includes('vay tiền') || lower.includes('mượn tiền'))) {
    const v = CYBER_VIOLATIONS_15.find(i => i.id === 'vp-07')!;
    return {
      matchFound: true,
      matchedViolation: v,
      explanation: 'Xâm nhập trái phép tài khoản mạng xã hội rồi nhắn tin lừa đảo vay tiền tương ứng với lỗi vi phạm số 07.',
      advice: 'Cảnh báo ngay bạn bè qua điện thoại; bật xác thực 2 lớp và báo tài khoản bị tấn công tới nhà cung cấp dịch vụ.',
    };
  }

  // Check 8: Link phishing chiếm OTP (vp-08)
  if (lower.includes('mã otp') || lower.includes('link trúng thưởng') || lower.includes('phishing') || lower.includes('nhập otp')) {
    const v = CYBER_VIOLATIONS_15.find(i => i.id === 'vp-08')!;
    return {
      matchFound: true,
      matchedViolation: v,
      explanation: 'Gửi liên kết giả mạo để chiếm đoạt thông tin bảo mật và mã OTP ngân hàng tương ứng với lỗi vi phạm số 08.',
      advice: 'Tuyệt đối không nhập mã OTP vào bất kỳ đường link nào được gửi qua tin nhắn.',
    };
  }

  // Check 9: Clip bạo lực học đường (vp-09)
  if (lower.includes('clip đánh nhau') || lower.includes('bạo lực học đường') || lower.includes('lột đồ') || lower.includes('quay clip bạn bị đánh')) {
    const v = CYBER_VIOLATIONS_15.find(i => i.id === 'vp-09')!;
    return {
      matchFound: true,
      matchedViolation: v,
      explanation: 'Phát tán hình ảnh, clip bạo lực xâm phạm đời tư và quyền trẻ em tương ứng với lỗi vi phạm số 09.',
      advice: 'Báo ngay cho nhà trường hoặc gọi Tổng đài 111; không phát tán hay chia sẻ clip bạo lực.',
    };
  }

  // Check 10: Lộ đề thi / tài liệu mật (vp-10)
  if (lower.includes('đề thi') || lower.includes('lộ đề') || lower.includes('tài liệu mật') || lower.includes('chụp đề')) {
    const v = CYBER_VIOLATIONS_15.find(i => i.id === 'vp-10')!;
    return {
      matchFound: true,
      matchedViolation: v,
      explanation: 'Làm lộ đề thi chính thức hoặc tài liệu mật lên mạng xã hội tương ứng với lỗi vi phạm số 10.',
      advice: 'Đề thi thuộc danh mục Bí mật Nhà nước; nghiêm cấm phát tán ra không gian mạng.',
    };
  }

  // Check 11: Livestream lậu cá độ (vp-11)
  if (lower.includes('phát lậu bóng đá') || lower.includes('xem lậu') || lower.includes('kèo bóng đá') || lower.includes('cá cược online')) {
    const v = CYBER_VIOLATIONS_15.find(i => i.id === 'vp-11')!;
    return {
      matchFound: true,
      matchedViolation: v,
      explanation: 'Phát lậu nội dung thể thao có bản quyền kèm dẫn dụ cá cược tương ứng với lỗi vi phạm số 11.',
      advice: 'Sử dụng dịch vụ truyền hình chính thống; không tham gia hoặc lôi kéo cờ bạc online.',
    };
  }

  // Check 12: Tuyển dụng việc nhẹ lương cao (vp-12)
  if (lower.includes('việc nhẹ lương cao') || lower.includes('nạp cọc') || lower.includes('làm nhiệm vụ shopee') || lower.includes('hoa hồng cao')) {
    const v = CYBER_VIOLATIONS_15.find(i => i.id === 'vp-12')!;
    return {
      matchFound: true,
      matchedViolation: v,
      explanation: 'Lừa đảo trực tuyến thông qua hình thức tuyển dụng việc làm online nạp tiền tương ứng với lỗi vi phạm số 12.',
      advice: 'Cảnh giác tuyệt đối với các lời mời kiếm tiền dễ dàng yêu cầu nạp tiền trước.',
    };
  }

  // Check 13: Phân biệt vùng miền (vp-13)
  if (lower.includes('phân biệt vùng miền') || lower.includes('kỳ thị') || lower.includes('chia rẽ') || lower.includes('kích động bạo lực')) {
    const v = CYBER_VIOLATIONS_15.find(i => i.id === 'vp-13')!;
    return {
      matchFound: true,
      matchedViolation: v,
      explanation: 'Đăng tải nội dung xúc phạm, chia rẽ vùng miền hoặc kích động thù hằn tương ứng với lỗi vi phạm số 13.',
      advice: 'Tôn trọng tinh thần đoàn kết toàn dân tộc; không dùng từ ngữ xúc phạm tập thể địa phương.',
    };
  }

  // Check 14: Clip nóng, văn hóa phẩm đồi trụy (vp-14)
  if (lower.includes('clip nóng') || lower.includes('link nhạy cảm') || lower.includes('ảnh khiêu dâm') || lower.includes('clip đồi trụy')) {
    const v = CYBER_VIOLATIONS_15.find(i => i.id === 'vp-14')!;
    return {
      matchFound: true,
      matchedViolation: v,
      explanation: 'Phát tán văn hóa phẩm đồi trụy hoặc hình ảnh đời tư nhạy cảm tương ứng với lỗi vi phạm số 14.',
      advice: 'Không lưu trữ, chia sẻ hay lan truyền hình ảnh nhạy cảm của người khác.',
    };
  }

  // Check 15: Kêu gọi từ thiện giả mạo (vp-15)
  if ((lower.includes('từ thiện') || lower.includes('quyên góp') || lower.includes('cứu trợ')) && (lower.includes('giả mạo') || lower.includes('chiếm đoạt') || lower.includes('tài khoản cá nhân'))) {
    const v = CYBER_VIOLATIONS_15.find(i => i.id === 'vp-15')!;
    return {
      matchFound: true,
      matchedViolation: v,
      explanation: 'Kêu gọi từ thiện cứu trợ giả mạo nhằm chiếm đoạt tiền quyên góp tương ứng với lỗi vi phạm số 15.',
      advice: 'Mọi hoạt động quyên góp từ thiện phải thực hiện minh bạch, công khai sao kê theo quy định.',
    };
  }

  // NO MATCH FOUND IN 15 DATASET ITEMS:
  // Must strictly answer that there is not enough basis and never hallucinate penalties!
  return {
    matchFound: false,
    matchedViolation: null,
    message: 'Hiện chưa đủ căn cứ trong danh mục 15 lỗi an ninh mạng quy định để xác định hành vi vi phạm. Hệ thống tuyệt đối không tự suy đoán mức phạt. Xin vui lòng cung cấp thêm tình tiết cụ thể hoặc liên hệ cơ quan có thẩm quyền.',
    explanation: 'Mô tả chưa khớp với các dấu hiệu cấu thành của 15 lỗi an ninh mạng phổ biến trong tệp dữ liệu.',
    advice: 'Bạn có thể mô tả chi tiết hơn hành vi (ví dụ: ai làm gì, đăng nội dung gì, trên nền tảng nào) để hệ thống đối soát chính xác hơn.',
  };
}

// API: Quét rủi ro bài đăng mạng xã hội (Post Scanner)
app.post('/api/scan-post', async (req: Request, res: Response) => {
  try {
    const { postContent } = req.body;
    if (!postContent || typeof postContent !== 'string') {
      return res.status(400).json({ error: 'Nội dung bài viết không được để trống.' });
    }

    if (!aiClient) {
      return res.json(analyzeOffline(postContent));
    }

    const prompt = `Phân tích bài viết sau đây theo các quy định của Luật An ninh mạng 2018 và Nghị định 15/2020/NĐ-CP (NĐ 14/2022/NĐ-CP) của Việt Nam:
"${postContent}"

Hãy trả về định dạng JSON thuần túy (không markdown) với cấu trúc sau:
{
  "riskLevel": "SAFE" | "WARNING" | "DANGEROUS",
  "score": number,
  "summary": "Tóm tắt đánh giá ngắn gọn trong 1-2 câu",
  "issues": [
    {
      "type": "Tên vấn đề",
      "explanation": "Giải thích chi tiết",
      "lawReference": "Điều khoản pháp luật",
      "penalty": "Mức phạt áp dụng"
    }
  ],
  "recommendations": ["Lời khuyên sửa đổi"],
  "safeRevision": "Gợi ý viết lại chuẩn mực"
}`;

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const text = response.text?.trim() || '';
    const parsed = JSON.parse(text);
    return res.json(parsed);
  } catch (err: any) {
    console.error('Scan error:', err);
    return res.json(analyzeOffline(req.body.postContent || ''));
  }
});

// Offline rule-based analyzer helper
function analyzeOffline(content: string) {
  const lower = content.toLowerCase();
  const issues: any[] = [];
  let score = 95;
  let riskLevel = 'SAFE';

  // Check 1: Private info doxing (phone number, cccd, address)
  const phoneRegex = /(0[35789]\d{8}|\+84[35789]\d{8})/;
  const cccdRegex = /\b\d{12}\b|\b\d{9}\b/;
  if (phoneRegex.test(content) || cccdRegex.test(content) || lower.includes('số điện thoại') || lower.includes('cccd') || lower.includes('địa chỉ nhà')) {
    issues.push({
      type: 'Tiết lộ thông tin đời tư cá nhân',
      explanation: 'Bài viết có chứa hoặc đề cập đến số điện thoại, căn cước công dân hoặc thông tin định danh cá nhân khi chưa được đồng ý.',
      lawReference: 'Điểm e Khoản 1 Điều 102 Nghị định 15/2020/NĐ-CP; Điều 16 Luật An ninh mạng 2018',
      penalty: 'Phạt tiền từ 10 - 20 triệu đồng (tổ chức) hoặc 5 - 10 triệu đồng (cá nhân), buộc gỡ bỏ thông tin.',
    });
    score -= 35;
  }

  // Check 2: Defamation / Bóc phốt / lăng mạ
  const insultWords = ['lừa đảo', 'giật nợ', 'bóc phốt', 'con này', 'thằng này', 'mặt dày', 'chó', 'đồ khốn', 'vô liêm sỉ', 'quỵt tiền'];
  const hasInsult = insultWords.some(w => lower.includes(w));
  if (hasInsult) {
    issues.push({
      type: 'Xúc phạm uy tín, danh dự, nhân phẩm cá nhân/tổ chức',
      explanation: 'Việc dùng từ ngữ thóa mạ, bêu riếu nợ nần hoặc "bóc phốt" công khai trên mạng xã hội vi phạm điều cấm về bảo vệ danh dự, nhân phẩm.',
      lawReference: 'Điểm a Khoản 1 Điều 101 Nghị định 15/2020/NĐ-CP; Điều 155, 156 Bộ luật Hình sự (nếu nghiêm trọng)',
      penalty: 'Xử phạt hành chính 5 - 10 triệu đồng (cá nhân); nguy cơ bị truy cứu hình sự về tội Làm nhục người khác hoặc Vu khống.',
    });
    score -= 40;
  }

  // Check 3: Rumor / fake news / kích động
  const fakeNewsHints = ['nghe đồn', 'tin mật', 'báo đài giấu', 'vỡ đập', 'chết người hàng loạt', 'khẩn cấp chia sẻ ngay', 'ai không share', 'virus mới cực nguy hiểm'];
  const hasFakeHint = fakeNewsHints.some(w => lower.includes(w));
  if (hasFakeHint) {
    issues.push({
      type: 'Phát tán thông tin giả mạo, chưa kiểm chứng',
      explanation: 'Nội dung sử dụng các mô-típ tin đồn giật gân, kêu gọi chia sẻ lan truyền không căn cứ chính thống từ cơ quan thẩm quyền.',
      lawReference: 'Điểm a Khoản 1 Điều 101 Nghị định 15/2020/NĐ-CP',
      penalty: 'Phạt tiền từ 5 - 10 triệu đồng đối với cá nhân, buộc gỡ bỏ thông tin sai sự thật.',
    });
    score -= 30;
  }

  // Check 4: Copyright / Piracy
  if (lower.includes('link tải crack') || lower.includes('phim lậu') || lower.includes('share acc')) {
    issues.push({
      type: 'Vi phạm quyền tác giả, sở hữu trí tuệ',
      explanation: 'Cung cấp, chia sẻ liên kết tải tác phẩm vi phạm bản quyền hoặc phần mềm bẻ khóa trái phép.',
      lawReference: 'Nghị định 131/2013/NĐ-CP và Luật Sở hữu trí tuệ',
      penalty: 'Phạt tiền từ 10 - 30 triệu đồng, buộc tiêu hủy đường dẫn vi phạm.',
    });
    score -= 25;
  }

  score = Math.max(10, Math.min(100, score));
  if (issues.length >= 2 || score < 50) {
    riskLevel = 'DANGEROUS';
  } else if (issues.length === 1 || score < 80) {
    riskLevel = 'WARNING';
  } else {
    riskLevel = 'SAFE';
  }

  const recommendations = [];
  if (issues.length === 0) {
    recommendations.push('Nội dung tuân thủ tốt các chuẩn mực cơ bản về phát ngôn.');
    recommendations.push('Khuyến nghị kiểm tra kỹ độ chính xác của số liệu và nguồn tin trước khi ấn Đăng.');
  } else {
    recommendations.push('Không đăng ảnh chân dung, căn cước, số điện thoại của người khác khi chưa có sự đồng ý bằng văn bản.');
    recommendations.push('Không dùng mạng xã hội để giải quyết mâu thuẫn dân sự (nợ nần, xích mích), hãy nộp đơn ra Tòa án hoặc cơ quan Công an.');
    recommendations.push('Xác thực thông tin từ cổng thông tin báo chí chính thống trước khi chia sẻ sự kiện giật gân.');
  }

  return {
    riskLevel,
    score,
    summary: issues.length === 0 
      ? 'Nội dung bài viết không phát hiện dấu hiệu vi phạm pháp luật an ninh mạng nghiêm trọng.' 
      : `Phát hiện ${issues.length} yếu tố có rủi ro pháp lý cao theo Nghị định 15/2020/NĐ-CP.`,
    issues,
    recommendations,
    safeRevision: issues.length > 0 
      ? 'Nếu cần phản ánh sự việc, hãy sử dụng ngôn từ khách quan, che mờ thông tin cá nhân/CCCD/SĐT và trình báo trực tiếp cho cơ quan có thẩm quyền thay vì đăng bài công kích cá nhân.'
      : content,
  };
}

// Serve Vite in dev mode or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, () => {
    console.log(`Server listening on http://0.0.0.0:${port}`);
  });
}

startServer();
