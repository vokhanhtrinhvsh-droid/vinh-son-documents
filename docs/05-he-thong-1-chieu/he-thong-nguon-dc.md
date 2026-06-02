---
sidebar_position: 1
title: Hệ thống Nguồn 220VDC
---

# Hệ thống Nguồn một chiều 220VDC điều khiển

Hệ thống nguồn điện một chiều DC (Direct Current) 220V dự phòng của nhà máy Thủy điện Vĩnh Sơn có nhiệm vụ vô cùng quan trọng: cung cấp nguồn điện ổn định, liên tục cho toàn bộ hệ thống điều khiển DCS, hệ thống rơ-le bảo vệ, cuộn cắt máy cắt 110kV và chiếu sáng sự cố khẩn cấp khi nhà máy xảy ra sự cố mất hoàn toàn điện xoay chiều tự dùng (Blackout).

---

## I. Cấu hình Giàn ắc quy dự phòng (Battery Bank)

Hệ thống bao gồm 02 giàn ắc quy độc lập (Giàn A và Giàn B) hoạt động song song hoặc dự phòng nóng:

- **Kiểu ắc quy:** Ắc quy chì-axit kín khí miễn bảo dưỡng (VRLA - Valve Regulated Lead Acid).
- **Số lượng bình:** 108 bình đấu nối tiếp (Mỗi bình có điện áp định mức 2.0 V).
- **Điện áp định mức giàn ắc quy:** 216 VDC (Điện áp phao nạp thả nổi duy trì ở mức 243 VDC).
- **Dung lượng định mức:** 200 Ah (Cho phép duy trì cấp điện khẩn cấp liên tục trong 08 giờ liên tiếp khi mất toàn bộ điện tự dùng AC).
- **Tuổi thọ thiết kế:** 10 năm.

---

## II. Bộ sạc Ắc quy thông minh (Charger Cabinet)

Mỗi giàn ắc quy được cấp nguồn bởi một tủ sạc tự động kỹ thuật số sử dụng công nghệ cầu chỉnh lưu Thyristor điều khiển bằng bộ vi xử lý:

- **Hãng sản xuất:** Chloride / AEG.
- **Nguồn cấp AC đầu vào:** 380 VAC ba pha xoay chiều tự dùng.
- **Chế độ nạp:**
  - **Nạp duy trì (Float Charge):** Duy trì liên tục ở điện áp 2.25 V/bình (khoảng 243 VDC toàn bộ giàn). Dòng điện nạp nhỏ, tự động bù điện tự xả của ắc quy.
  - **Nạp tăng cường (Boost Charge):** Thực hiện sau khi ắc quy bị phóng điện xả sâu do mất điện AC. Điện áp nạp nâng lên 2.40 V/bình (khoảng 259 VDC), tự động ngắt chuyển về Float khi dòng sạc nhỏ hơn 2 A.
  - **Nạp san đều (Equalizing Charge):** Định kỳ nạp san đều chênh lệch điện áp giữa các bình 6 tháng một lần.

---

## III. Sơ đồ Phân phối Nguồn 220VDC

Hệ thống phân phối nguồn một chiều 220VDC từ tủ nguồn chính đến các hộ tiêu thụ thông qua sơ đồ thanh cái kép có liên lạc:

```
[Giàn Ắc quy A] ──> [Tủ sạc A] ──> [Thanh cái DC Phân phối A] ──> Tủ điều khiển DCS H1 / Tủ Rơ-le bảo vệ MC171
                                                 │
                                           (Dao liên lạc)
                                                 │
[Giàn Ắc quy B] ──> [Tủ sạc B] ──> [Thanh cái DC Phân phối B] ──> Tủ điều khiển DCS H2 / Tủ Rơ-le bảo vệ MC172
```

:::important Quy định giám sát thông số hàng ca
Vận hành viên trực phụ trợ phải trực tiếp kiểm tra tủ sạc và đo đạc điện áp từng bình ắc quy mỗi tuần một lần, ghi nhận trị số nhiệt độ bình (không vượt quá 35°C), kiểm tra vết rạn nứt vỏ bình và độ chặt của các bu-lông điện cực. Điện áp bình đơn lẻ không được lệch quá 0.05 V so với trị số trung bình.
:::
