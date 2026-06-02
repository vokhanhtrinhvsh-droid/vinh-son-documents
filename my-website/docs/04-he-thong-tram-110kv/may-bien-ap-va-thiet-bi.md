---
sidebar_position: 1
title: Máy biến áp & Thiết bị đóng cắt
---

# Máy biến áp lực chính và Thiết bị đóng cắt 110kV

Sân phân phối 110kV và trạm biến áp lực chính có nhiệm vụ tăng áp dòng điện từ 10.5 kV lên 110 kV để truyền tải điện năng đi xa, giảm hao hụt điện năng truyền tải.

---

## I. Thông số Máy biến áp chính (T1 và T2)

* **Số lượng:** 02 máy biến áp lực (T1 liên kết với H1, T2 liên kết với H2).
* **Kiểu làm mát:** ONAN/ONAF (Làm mát bằng dầu tuần hoàn tự nhiên và không khí thổi quạt gió cưỡng bức).
* **Công suất định mức (S_dm):** 40,000 kVA (40 MVA).
* **Tỷ số biến áp:** 115 ± 9 x 1.78% / 10.5 kV (Có bộ điều áp dưới tải OLTC điều khiển bằng điện).
* **Tổ đấu dây:** YN/d11 (Phía cao thế đấu hình Sao nối đất, phía hạ thế đấu Tam giác).
* **Điện áp ngắn mạch (U_k%):** 10.5%
* **Hãng sản xuất:** Công ty Cổ phần Chế tạo Thiết bị điện Đông Anh (EEMC).

---

## II. Thiết bị Đóng cắt Sân phân phối 110kV

Sân phân phối 110kV sử dụng sơ đồ thanh cái đơn có thanh cái vòng, bao gồm các thiết bị chính đóng cắt cao áp:

1. **Máy cắt 110kV (Circuit Breaker - MC 171 và MC 172):**
   - Kiểu dập hồ quang: Sử dụng khí SF6 cách điện cao áp.
   - Cơ cấu truyền động: Lò xo tích năng bằng động cơ điện 220VDC kết hợp cuộn cắt đóng độc lập kép.
   - Dòng định mức: 1250 A | Dòng cắt ngắn mạch chịu đựng: 31.5 kA/3s.
2. **Dao cách ly (Disconnector):**
   - Kiểu: Dao cách ly quay ngang hai trụ, thao tác bằng động cơ điện hoặc bằng tay quay dự phòng.
   - Khóa liên động cơ điện: Chỉ cho phép thao tác dao cách ly khi máy cắt tương ứng ở trạng thái mở hoàn toàn.
3. **Biến điện áp (TU/VT) và Biến dòng điện (TI/CT):**
   - TI kiểu tụ điện đo lường bảo vệ: Tỷ số biến dòng nhánh MBA chính: 300/5 A.

---

## III. Các Trị số Giám sát Dầu Máy biến áp lực

Nhân viên ca trực vận hành phải theo dõi các thông số giám sát tự động của máy biến áp T1/T2 báo về phòng điều khiển trung tâm DCS:

- **Nhiệt độ dầu lớp trên cùng (Top oil temperature):**
  - Trị số định mức: 55°C - 65°C.
  - Cảnh báo cao (Alarm): 85°C.
  - Tự động cắt bảo vệ (Trip): 95°C.
- **Nhiệt độ cuộn dây (Winding temperature):**
  - Trị số định mức: 60°C - 75°C.
  - Cảnh báo cao (Alarm): 95°C.
  - Tự động cắt bảo vệ (Trip): 105°C.
- **Áp suất thùng dầu chính:** Cảnh báo nhảy nút rơ-le áp lực đột ngột (Rơ-le đột biến áp suất chống nổ đập MBA).

:::important Chế độ quạt làm mát ONAF
Hệ thống quạt làm mát cưỡng bức của máy biến áp T1/T2 được thiết lập tự động khởi động chạy khi nhiệt độ dầu đạt 55°C HOẶC khi công suất tải định mức của máy biến áp vượt quá 70% công suất định mức (28 MVA), nhằm nâng cao tuổi thọ của lớp giấy cách điện cuộn dây.
:::
