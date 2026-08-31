---
sidebar_position: 4
title: Bình Accu Dầu
slug: binh-accu-dau
---

# HÌNH ẢNH BÌNH ACCU DẦU

📍 **Vị trí:** Tầng -6.9m

---

<div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start', flexWrap: 'wrap', marginTop: '20px' }}>
  <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
    <img src="/img/binh_accu_dau.jpg" alt="Bình accu dầu" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 6px 16px rgba(0,0,0,0.15)', marginBottom: '10px' }} />
    <em style={{ fontSize: '0.9em', display: 'block', color: 'gray', marginBottom: '5px' }}>Bình accu dầu áp lực thực tế</em>
    <div style={{ fontSize: '0.9em', color: 'gray', marginBottom: '10px' }}>📍 <strong>Vị trí:</strong> Tầng -6.9m</div>
  </div>
  <div style={{ flex: '2 2 400px', minWidth: '320px' }}>
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
      <thead>
        <tr style={{ borderBottom: '2px solid var(--ifm-color-emphasis-200)' }}>
          <th style={{ padding: '10px', textAlign: 'center', width: '80px' }}>Mức</th>
          <th style={{ padding: '10px', textAlign: 'left' }}>Mô tả & Logic điều khiển / Bảo vệ</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ borderBottom: '1px solid var(--ifm-color-emphasis-100)' }}>
          <td style={{ padding: '10px', textAlign: 'center' }}>
            <span style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: '#e53e3e', color: 'white', fontWeight: 'bold', fontSize: '0.85em', display: 'inline-block', minWidth: '45px' }}>ND</span>
          </td>
          <td style={{ padding: '10px' }}>
            <strong>Mức dầu quá cao.</strong> Nếu mức dầu <code>ND=1</code> thì hệ thống DCS sẽ lệnh <strong>dừng tổ máy</strong> theo sự cố cơ 5M.
          </td>
        </tr>
        <tr style={{ borderBottom: '1px solid var(--ifm-color-emphasis-100)' }}>
          <td style={{ padding: '10px', textAlign: 'center' }}>
            <span style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: '#dd6b20', color: 'white', fontWeight: 'bold', fontSize: '0.85em', display: 'inline-block', minWidth: '45px' }}>DA</span>
          </td>
          <td style={{ padding: '10px' }}>
            <strong>Mức dầu cao.</strong> Mở van BI để nạp khí vào bình Accu dầu.
          </td>
        </tr>
        <tr style={{ borderBottom: '1px solid var(--ifm-color-emphasis-100)' }}>
          <td style={{ padding: '10px', textAlign: 'center' }}>
            <span style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: '#3182ce', color: 'white', fontWeight: 'bold', fontSize: '0.85em', display: 'inline-block', minWidth: '45px' }}>DB</span>
          </td>
          <td style={{ padding: '10px' }}>
            <strong>Mức dầu xác lập</strong> sau khi đóng van cách ly. Sử dụng cho nhiều mục đích khác nhau trong chương trình DCS.
          </td>
        </tr>
        <tr style={{ borderBottom: '1px solid var(--ifm-color-emphasis-100)' }}>
          <td style={{ padding: '10px', textAlign: 'center' }}>
            <span style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: '#38a169', color: 'white', fontWeight: 'bold', fontSize: '0.85em', display: 'inline-block', minWidth: '45px' }}>DC</span>
          </td>
          <td style={{ padding: '10px' }}>
            <strong>Mức dầu làm việc thích hợp (62 - 64 bar).</strong> Nếu mức dầu <code>DC=1</code> và kèm điều kiện khác thì DCS sẽ lệnh <strong>ngừng chạy động cơ bơm dầu không ưu tiên</strong>.
          </td>
        </tr>
        <tr style={{ borderBottom: '1px solid var(--ifm-color-emphasis-100)' }}>
          <td style={{ padding: '10px', textAlign: 'center' }}>
            <span style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: '#d69e2e', color: 'white', fontWeight: 'bold', fontSize: '0.85em', display: 'inline-block', minWidth: '45px' }}>DD</span>
          </td>
          <td style={{ padding: '10px' }}>
            <strong>Mức dầu thấp.</strong> Nếu mức dầu <code>DD=1</code> và kèm điều kiện van cách ly bình Accu dầu mở thì DCS sẽ lệnh <strong>chạy động cơ bơm dầu không ưu tiên</strong>.
          </td>
        </tr>
        <tr style={{ borderBottom: '1px solid var(--ifm-color-emphasis-100)' }}>
          <td style={{ padding: '10px', textAlign: 'center' }}>
            <span style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: '#718096', color: 'white', fontWeight: 'bold', fontSize: '0.85em', display: 'inline-block', minWidth: '45px' }}>DE</span>
          </td>
          <td style={{ padding: '10px' }}>
            <strong>Mức dầu dự phòng.</strong>
          </td>
        </tr>
        <tr style={{ borderBottom: '1px solid var(--ifm-color-emphasis-100)' }}>
          <td style={{ padding: '10px', textAlign: 'center' }}>
            <span style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: '#9b2c2c', color: 'white', fontWeight: 'bold', fontSize: '0.85em', display: 'inline-block', minWidth: '45px' }}>NA</span>
          </td>
          <td style={{ padding: '10px' }}>
            <strong>Mức dầu quá thấp cấp 1.</strong> Nếu mức dầu <code>NA=1</code> thì hệ thống DCS sẽ lệnh <strong>dừng tổ máy</strong> theo sự cố cơ 5M.
          </td>
        </tr>
        <tr style={{ borderBottom: '1px solid var(--ifm-color-emphasis-100)' }}>
          <td style={{ padding: '10px', textAlign: 'center' }}>
            <span style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: '#822727', color: 'white', fontWeight: 'bold', fontSize: '0.85em', display: 'inline-block', minWidth: '45px' }}>NC</span>
          </td>
          <td style={{ padding: '10px' }}>
            <strong>Mức dầu quá thấp cấp 2.</strong> Nếu mức dầu <code>NC=1</code> thì hệ thống DCS sẽ lệnh <strong>đóng van cách ly BBF</strong> của bình Accu dầu áp lực và đồng thời <strong>dừng tổ máy</strong> theo sự cố cơ 5M.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
