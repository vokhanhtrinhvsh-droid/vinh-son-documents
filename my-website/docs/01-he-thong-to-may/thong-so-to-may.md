---
sidebar_position: 1
title: Thông số Kỹ thuật Tổ máy
---

# Thông số Kỹ thuật Tổ máy H1 và H2

Hệ thống tổ máy Nhà máy Thủy điện Vĩnh Sơn bao gồm 02 tổ máy hoạt động độc lập (H1 và H2) sử dụng tuabin Francis kiểu đứng và máy phát điện đồng bộ ba pha cực lồi.

---

## I. Thông số Tuabin (Turbine)

* **Kiểu Tuabin:** Francis trục đứng (Vertical Francis Turbine).
* **Mã hiệu thiết kế:** HL260-WJ-140
* **Công suất định mức (P_dm):** 33.5 MW
* **Lưu lượng định mức (Q_dm):** 16.2 m³/s
* **Cột nước thiết kế (H_tk):** 224.0 m
* **Cột nước tối đa (H_max):** 235.0 m
* **Tốc độ quay định mức (n_dm):** 500 vòng/phút
* **Tốc độ lồng tốc tối đa (Tốc độ runaway):** 880 vòng/phút
* **Hiệu suất tuabin ở điểm thiết kế:** 92.5%

---

## II. Thông số Máy phát điện (Generator)

* **Kiểu máy phát:** Đồng bộ cực lồi, ba pha xoay chiều.
* **Mã hiệu thiết kế:** SF33-12/3250
* **Công suất tác dụng định mức (P_e):** 33 MW
* **Công suất biểu kiến định mức (S_dm):** 38.8 MVA
* **Hệ số công suất (cos phi):** 0.85 (trễ)
* **Điện áp cực máy phát định mức (U_dm):** 10.5 kV ± 5%
* **Dòng điện stato định mức (I_dm):** 2135 A
* **Tần số định mức (f):** 50 Hz
* **Kiểu đấu dây stato:** Y (Sao, trung tính không nối đất trực tiếp)
* **Cấp cách điện:** Cấp F (Vận hành theo cấp B)
* **Hệ thống làm mát máy phát:** Làm mát bằng không khí tuần hoàn tự nhiên thông qua các bộ trao đổi nhiệt nước-khí bố trí xung quanh stato.

---

## III. Bản đồ Trị số Giới hạn Nhiệt độ Vận hành

Kỹ sư vận hành cần liên tục giám sát nhiệt độ của các bộ phận chính để ngăn chặn nguy cơ cháy hỏng:

| Bộ phận đo | Nhiệt độ Cảnh báo (Alarm) | Nhiệt độ Cắt máy (Trip) | Ghi chú |
| :--- | :---: | :---: | :--- |
| Cuộn dây Stato | 105°C | 120°C | Cảm biến RTD PT100 |
| Lõi sắt Stato | 90°C | 100°C | Cảm biến RTD PT100 |
| Bạc hướng máy phát (Guide bearing) | 65°C | 75°C | Sử dụng dầu bôi trơn ISO VG46 |
| Bạc đỡ tổ máy (Thrust bearing) | 70°C | 80°C | Điểm chịu lực nặng nhất |
| Bạc hướng tuabin (Turbine bearing) | 65°C | 75°C | Nằm sát vỏ tuabin dưới nước |

:::warning Tác động bảo vệ nhiệt độ
Khi nhiệt độ bất kỳ điểm nào của bạc đỡ (Thrust bearing) vượt quá 80°C, hệ thống bảo vệ rơ-le sẽ phát lệnh dừng máy khẩn cấp không điều kiện (Emergency Trip) để tránh làm nóng chảy hợp kim babbit của bạc.
:::
