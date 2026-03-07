
Mục tiêu: dựng một portfolio cá nhân 1 trang, chuyên nghiệp, dựa trên CV trong file PDF bạn tải lên, tối ưu để ứng tuyển vị trí Back-end Developer.

1) Nội dung sẽ lấy từ CV
- Tên: Lê Nguyễn Thanh Bình
- Vị trí mục tiêu: Back-end Developer
- Career objective: xây dựng hệ thống/API scalable, maintainable
- Kỹ năng chính:
  - Ngôn ngữ: C#, Dart, TypeScript
  - Back-end: ASP.NET Core, RESTful APIs
  - DB: SQL Server, SQLite
  - Front-end: Flutter, React Native, Vue.js
  - Khác: JWT, SOLID, Docker, LINQ, Azure, Quartz, OneSignal
- Kinh nghiệm: Intern Back-end Developer tại Nam Phuong Technology (11/2025–02/2026)
- Dự án: E-Office, Aircraft Catering Delivery, Chrome Operation Management System (+ link GitHub Chrome)
- Học vấn: STU 2021–2025, GPA 3.1/4.0

2) Cấu trúc trang sẽ xây
```text
Header (logo/tên + menu)
Hero (giới thiệu nhanh + CTA)
About (career objective)
Skills (badge/tag theo nhóm)
Experience (timeline)
Projects (card chi tiết + tech stack + link)
Education
Contact (email/phone/github nếu có)
Footer
```

3) Kế hoạch triển khai trong code
- Cập nhật `src/pages/Index.tsx` từ trang trống thành landing portfolio hoàn chỉnh.
- Dùng component sẵn có để đồng bộ giao diện:
  - `Card` cho project/experience
  - `Badge` cho skill tags
  - `Button` cho CTA (xem dự án, tải CV)
  - `Avatar` (fallback chữ cái nếu chưa có ảnh)
- Tổ chức dữ liệu dạng mảng object ngay trong file (skills, experiences, projects) để dễ chỉnh sửa sau.
- Thêm điều hướng cuộn mượt đến các section bằng anchor IDs.
- Thiết kế responsive (mobile-first), bố cục 1 cột trên mobile, 2–3 cột ở desktop.
- Thêm CTA:
  - “Liên hệ ngay”
  - “Xem GitHub”
  - “Tải CV” (trỏ tới file PDF trong `public` sau khi thêm file)

4) Chi tiết kỹ thuật (ngắn gọn)
- Không thêm thư viện mới, dùng React + Tailwind + shadcn có sẵn.
- Dùng utility class hiện tại theo design tokens (`bg-background`, `text-foreground`, `muted-foreground`...).
- Ưu tiên semantic HTML và accessibility:
  - heading theo thứ bậc
  - link/button rõ ràng
  - contrast ổn ở cả light/dark theme hiện có
- Nếu thiếu thông tin liên hệ trong PDF, hiển thị placeholder an toàn để bạn cập nhật nhanh.

5) Thông tin cần bạn xác nhận trước khi chốt bản cuối
- Bạn muốn portfolio dùng tiếng Việt hoàn toàn hay song ngữ Việt/Anh?
- Có muốn thêm ảnh đại diện cá nhân không?
- Bạn muốn hiển thị số điện thoại/email công khai hay chỉ để link GitHub + form liên hệ?

6) Tiêu chí hoàn thành
- Trang `/` hiển thị đầy đủ các section từ CV.
- UI sạch, chuyên nghiệp, responsive tốt.
- Có thể dùng ngay để gửi nhà tuyển dụng (kèm nút tải CV + link GitHub).
