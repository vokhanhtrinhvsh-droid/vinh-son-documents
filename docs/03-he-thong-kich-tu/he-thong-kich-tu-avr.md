---
sidebar_position: 1
title: Hệ thống Kích từ & AVR
---

# Hệ thống Kích từ tĩnh tích hợp (Static Excitation System)

Hệ thống kích từ tổ máy H1/H2 có nhiệm vụ cung cấp nguồn điện một chiều (DC) điều chỉnh được vào cuộn dây rotor của máy phát để thiết lập từ trường cực máy phát, tự động điều chỉnh điện áp đầu cực máy phát và công suất phản kháng (Q) hòa vào lưới điện.

---

## I. Cấu trúc Hệ thống Kích từ tĩnh

Hệ thống kích từ tại nhà máy Thủy điện Vĩnh Sơn là kiểu kích từ tĩnh tự cấp (Self-excited Static Excitation System), sơ đồ khối bao gồm:

```
[Điện cực máy phát 10.5kV] ──> [Biến áp kích từ TE] ──> [Cầu chỉnh lưu Thyristor] ──> [Chổi than / Rotor máy phát]
                                                                  ▲
                                                                  │ (Góc mở kích xung alpha)
                                                        [Tủ điều khiển AVR]
```

### Các thành phần chính:
1. **Biến áp kích từ (Excitation Transformer - TE):**
   - Kiểu: Biến áp khô, đúc nhựa epoxy chịu nhiệt mác F.
   - Công suất: 450 kVA.
   - Tỷ số biến áp: 10.5 kV / 185 V.
2. **Cầu chỉnh lưu Thyristor (Thyristor Rectifier Bridge):**
   - Sơ đồ: Cầu ba pha chỉnh lưu điều khiển hoàn toàn (Three-phase fully controlled bridge).
   - Linh kiện Thyristor công suất cao tích hợp bộ tản nhiệt làm mát bằng quạt gió cưỡng bức.
3. **Mạch dập từ (De-excitation Circuit):**
   - Trang bị điện trở phi tuyến dập từ nhanh (ZnO) để triệt tiêu năng lượng từ trường rotor một cách an toàn khi có sự cố dừng máy khẩn cấp cắt kích từ.

---

## II. Bộ tự động điều áp kỹ thuật số (AVR - Automatic Voltage Regulator)

- **Kiểu bộ điều khiển:** Kênh kép song song hoạt động độc lập (Dual Channel Controller Channel A/B).
- **Bộ vi xử lý:** Chíp DSP chuyên dụng cho tính toán thời gian thực góc kích mở xung chỉnh lưu.
- **Chế độ vận hành chính:**
  - Chế độ tự động điều áp đầu cực máy phát (AUTO - điều khiển theo điện áp đầu cực U_dm).
  - Chế độ điều khiển dòng điện kích từ rotor (MANUAL - điều khiển theo trị số dòng kích từ thực tế I_kt).
  - Chế độ tự động bù trừ hệ số công suất cos phi.

---

## III. Các thông số vận hành Kích từ định mức

| Thông số kích từ | Trị số định mức | Đơn vị | Ghi chú |
| :--- | :---: | :---: | :--- |
| Điện áp kích từ định mức (U_kt) | 165 | VDC | Khi máy phát chạy định mức 33MW |
| Dòng điện kích từ định mức (I_kt) | 420 | A | Khi máy phát chạy định mức 33MW |
| Dòng kích từ không tải máy phát | 135 | A | Điện áp cực máy phát 10.5kV hòa lưới |
| Góc kích mở xung nhỏ nhất (Alpha_min)| 15 | độ | Giới hạn góc điều khiển chỉnh lưu |
| Dòng điện kích từ cưỡng bức tối đa | 840 | A | Cho phép chạy liên tục trong 10 giây |

:::important Quy trình chuyển kênh AVR
Khi phát hiện kênh AVR đang chạy (ví dụ Kênh A) gặp sự cố truyền thông hoặc lỗi cảm biến đo lường điện áp cực máy phát, hệ thống AVR sẽ tự động chuyển kênh điều khiển sang Kênh B. Kỹ sư vận hành cũng có thể chủ động chuyển kênh bằng tay thông qua nút ấn trên cánh tủ AVR tại buồng điều khiển máy phát.
:::
