---
sidebar_position: 1
title: HÌNH ẢNH THIẾT BỊ
slug: hinh-anh-thiet-bi
pagination_prev: null
pagination_next: null
---

# 🖼️ HÌNH ẢNH THIẾT BỊ HỆ THỐNG KÍCH TỪ

---

## 1. Cấu trúc 5 Tủ Kích Từ (Phòng M401 - Cao trình 0.0m)

📍 **Vị trí:** Phòng M401 (Tầng 0.0m Nhà máy Thủy điện Vĩnh Sơn)

### 🔹 Tủ A.V.R COMPARTMENT (Tủ điều khiển AVR trung tâm)
- **Thiết bị chính:** 2 CPU trung tâm `A1` và `A2` (Intel Atom CP1485), Màn hình cảm ứng tại chỗ LCP (`A11`), Module đo lường dòng/áp `A10, A16, A20, A26`, 2 Bộ phát xung `A13, A23` (TTM211).
- **Hệ thống nguồn:** Bộ nguồn kép `A01, A02` (Chuyển đổi 125VDC / 220VAC sang 24VDC), Switch Ethernet mạng Powerlink/Modbus `A101, A201, A301`.
- **Rơle bảo vệ:** Rơle bảo vệ quá dòng & bảo vệ chạm đất Rotor 2 cấp (`F15`).

<div style={{ padding: '15px', borderRadius: '8px', backgroundColor: 'var(--ifm-color-emphasis-100)', borderLeft: '4px solid var(--ifm-color-primary)', margin: '15px 0' }}>
  📌 <strong>Mật khẩu truy cập màn hình LCP (Tủ A11):</strong>
  <ul style={{ margin: '5px 0 0 20px' }}>
    <li><strong>Cấp Operator (Vận hành H1):</strong> <code>1320</code> (H2: User <code>OPERATING</code>)</li>
    <li><strong>Cấp Maintenance (Bảo dưỡng H1):</strong> <code>2320</code> (H2: User <code>MAINTENANCE</code>)</li>
  </ul>
</div>

---

### 🔹 Tủ THYRISTOR BRIDGE 1 & 2 COMPARTMENT (Cầu chỉnh lưu Thyristor)
- **Thiết bị chính:** 2 Cầu chỉnh lưu Thyristor B6C làm việc dự phòng song song.
- **Giải nhiệt & Bảo vệ:** Hệ thống quạt giải nhiệt cưỡng bức (động cơ quạt `Q211, Q221`), 6 cầu chì cắt nhanh `F1 - F6` bảo vệ Thyristor, cảm biến nhiệt độ `T1 - T6`.
- **Đo lường:** 4 BI đo lường dòng xoay chiều AC đầu vào `T41, T43, T51, T53`.

---

### 🔹 Tủ FIELD CIRCUIT BREAKER COMPARTMENT (Máy cắt kích từ & Bảo vệ Crowbar)
- **Thiết bị chính:** Contactor kích từ chính `-Q01` (đóng/cắt nguồn kích từ Rotor).
- **Mạch Hãm điện:** Contactor hãm điện `-Q05, -Q06`.
- **Bảo vệ Quá áp Rotor (Crowbar):** Van Crowbar `U40` kết hợp rơle quá áp `F50`, tự động khép mạch ngắn mạch Rotor qua trở dập khi xuất hiện xung điện áp cao nguy hiểm.

---

### 🔹 Tủ A.C SYSTEM COMPARTMENT (MBA Kích từ & Điện trở dập từ)
- **Máy biến áp kích từ chính (TE1/TE2 - T501):** Công suất **460 kVA**, điện áp **13,8 kV / 0,22 kV**.
- **Điện trở dập từ:** Điện trở dập từ chính **`R01 = 0.394 Ω`** (tiêu tán năng lượng từ trường Rotor khi cắt Q01) và điện trở dập từ phụ **`R02 = 1.1 Ω`**.
- **Biến áp phụ:** MBA hãm điện `T502 (37 kVA)`, MBA nguồn quạt `T211, T221`.

---

### 🔹 Tủ Dao nối đất (+DS01)
📍 **Vị trí:** Cao trình -3.9m (Tầng hầm nhà máy).
- **Chức năng:** Nối đất an toàn cho cuộn Rotor trong quá trình hãm điện và sửa chữa bảo dưỡng.

---

## 2. Giao diện Thao tác Màn hình LCP Thực tế

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '20px 0' }}>
  <div style={{ textAlign: 'center', padding: '15px', borderRadius: '10px', border: '1px solid var(--ifm-color-emphasis-200)', backgroundColor: 'var(--ifm-card-background-color)' }}>
    <img src="/img/chuyen_kenh_kich_tu_h1_1.webp" alt="Màn hình LCP Kích từ H1" style={{ width: '100%', borderRadius: '6px' }} />
    <p style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '0.9em' }}>Màn hình LCP Kích từ H1 (Tủ A11)</p>
  </div>
  <div style={{ textAlign: 'center', padding: '15px', borderRadius: '10px', border: '1px solid var(--ifm-color-emphasis-200)', backgroundColor: 'var(--ifm-card-background-color)' }}>
    <img src="/img/chuyen_kenh_kich_tu_h2_1.webp" alt="Màn hình LCP Kích từ H2" style={{ width: '100%', borderRadius: '6px' }} />
    <p style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '0.9em' }}>Màn hình LCP Kích từ H2 (Tủ A11)</p>
  </div>
</div>
