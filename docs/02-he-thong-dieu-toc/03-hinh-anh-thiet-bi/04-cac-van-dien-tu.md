---
sidebar_position: 5
title: Các Van Điện Từ
slug: cac-van-dien-tu
---

# HÌNH ẢNH CÁC VAN ĐIỆN TỪ

---

## Van BA
<div style={{ display: 'flex', gap: '25px', alignItems: 'flex-start', flexWrap: 'wrap', padding: '15px' }}>
  <div style={{ flex: '1 1 250px', maxWidth: '300px', textAlign: 'center' }}>
    <img src="/img/van_dien_tu_ba.webp" alt="Van điện từ BA" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', marginBottom: '8px' }} />
    <em style={{ fontSize: '0.9em', display: 'block', color: 'gray', marginBottom: '8px' }}>Van điện từ BA thực tế</em>
    <div style={{ fontSize: '0.85em', textAlign: 'left', padding: '8px 12px', borderRadius: '6px', backgroundColor: 'var(--ifm-background-color)', border: '1px solid var(--ifm-color-emphasis-200)' }}>
      <div style={{ marginBottom: '4px' }}>📍 <strong>Vị trí:</strong> Tầng -3.9m</div>
      <div>🔧 <strong>Nhiệm vụ:</strong> Điều khiển khống chế đóng mở kim phun và cánh hướng</div>
    </div>
  </div>
  <div style={{ flex: '2 2 400px', minWidth: '300px' }}>
    <h4>⚙️ Quá trình hoạt động:</h4>
    <ul>
      <li><strong>Khi van BA có điện:</strong> Đường dầu P sang A của van BA thông → cấp dầu áp lực tới chân Y của van 31A → piston van 31A dịch chuyển lên → đường dầu A sang T của van 31A thông nên dầu được dẫn về thùng chứa dầu → không có dầu áp lực tới chân L của các van BX1, BX2, BX3, BX4, BW → nhờ đó, piston của 5 van này mới có thể dịch chuyển lên xuống theo tín hiệu điều khiển từ tủ điều tốc → đóng mở bốn kim phun và cánh hướng.</li>
      <li><strong>Khi van BA mất điện:</strong> Đường dầu P sang A của van BA không thông nhau → ngừng cấp dầu áp lực tới chân Y của van 31A → piston van 31A dịch chuyển xuống → đường dầu P sang A của van 31A thông nhau → dẫn dầu áp lực tới chân L của các van BX1, BX2, BX3, BX4, BW → làm đẩy piston của 5 van này lên → giúp đóng bốn kim phun và cánh hướng.</li>
    </ul>
    <h4 style={{ marginTop: '20px' }}>⚡ Mạch điện điều khiển:</h4>
    <ul>
      <li><strong>Mở van BA:</strong> Chương trình DCS tổ máy xuất tín hiệu tới kênh ch14 Modun A604 → rơle 769XR có điện và khép tiếp điểm → rơle 610XR có điện và khép tiếp điểm → cuộn dây của van BA có điện → làm hút lõi van BA dịch chuyển sang vị trí mở.</li>
      <li><strong>Đóng van BA:</strong> Chương trình DCS tổ máy ngừng xuất tín hiệu tới kênh ch14 Modun A604 → rơle 769XR mất điện và mở tiếp điểm → rơle 610XR mất điện và mở tiếp điểm → cuộn dây của van BA mất điện → lò xo sẽ đẩy lõi van BA dịch chuyển sang vị trí đóng.</li>
    </ul>
  </div>
</div>

---

## Van BB
<div style={{ display: 'flex', gap: '25px', alignItems: 'flex-start', flexWrap: 'wrap', padding: '15px' }}>
  <div style={{ flex: '1 1 250px', maxWidth: '300px', textAlign: 'center' }}>
    <img src="/img/van_dien_tu_bb.webp" alt="Van điện từ BB" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', marginBottom: '8px' }} />
    <em style={{ fontSize: '0.9em', display: 'block', color: 'gray', marginBottom: '8px' }}>Van điện từ BB thực tế</em>
    <div style={{ fontSize: '0.85em', textAlign: 'left', padding: '8px 12px', borderRadius: '6px', backgroundColor: 'var(--ifm-background-color)', border: '1px solid var(--ifm-color-emphasis-200)' }}>
      <div>📍 <strong>Vị trí:</strong> Tầng -6.9m</div>
    </div>
  </div>
  <div style={{ flex: '2 2 400px', minWidth: '300px' }}>
    <h4>⚙️ Quá trình hoạt động:</h4>
    <ul>
      <li><strong>Cuộn dây BBO có điện:</strong> Đường dầu A sang T của van BB thông nhau, dẫn dầu về thùng chứa dầu → piston của van 30D dịch chuyển xuống → giúp dầu trong bình Accu và dầu trong đường ống thông với nhau (tức là đưa bình Accu dầu vào làm việc).</li>
      <li><strong>Cuộn dây BBF có điện:</strong> Đường dầu P sang A của van BB thông nhau → dẫn dầu áp lực làm đẩy piston của van 30D dịch chuyển lên → làm dầu trong bình Accu và dầu trong đường ống không còn thông với nhau (tức là bình Accu dầu ngừng vào làm việc).</li>
    </ul>
    <h4 style={{ marginTop: '20px' }}>⚡ Mạch điện điều khiển:</h4>
    <ul>
      <li><strong>Mở van BB:</strong> Chương trình DCS tổ máy xuất tín hiệu tới kênh ch7 Modun A604 → rơle 632XR có điện và khép tiếp điểm → cuộn dây của van BBO có điện → làm hút lõi van BB dịch chuyển sang vị trí mở.</li>
      <li><strong>Đóng van BB:</strong> Chương trình DCS tổ máy xuất tín hiệu tới kênh ch8 Modun A604 → rơle 633XR có điện và khép tiếp điểm → cuộn dây của van BBF có điện → làm hút lõi van BB dịch chuyển sang vị trí đóng.</li>
    </ul>
  </div>
</div>

---

## Van BD
<div style={{ display: 'flex', gap: '25px', alignItems: 'flex-start', flexWrap: 'wrap', padding: '15px' }}>
  <div style={{ flex: '1 1 250px', maxWidth: '300px', textAlign: 'center' }}>
    <img src="/img/van_dien_tu_bd.webp" alt="Van điện từ BD" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', marginBottom: '8px' }} />
    <em style={{ fontSize: '0.9em', display: 'block', color: 'gray', marginBottom: '8px' }}>Van điện từ BD thực tế</em>
    <div style={{ fontSize: '0.85em', textAlign: 'left', padding: '8px 12px', borderRadius: '6px', backgroundColor: 'var(--ifm-background-color)', border: '1px solid var(--ifm-color-emphasis-200)' }}>
      <div>📍 <strong>Vị trí:</strong> Tầng -6.9m</div>
    </div>
  </div>
  <div style={{ flex: '2 2 400px', minWidth: '300px' }}>
    <h4>⚙️ Quá trình hoạt động:</h4>
    <ul>
      <li><strong>Khi van BD có điện:</strong> Đường dầu P sang B của van BD thông nhau → dẫn dầu áp lực vào buồng mở servo 1T, đồng thời vào chân X của van 31T → piston van 31T dịch chuyển lên → đường dầu A sang T của van 31T thông nên dầu được dẫn về thùng chứa dầu. Đồng thời, khi dầu áp lực vào servo 1T → đẩy trục servo 1T dịch chuyển mở van ba ngã 45T → đường A sang T thông nhau, dẫn nước áp lực trong van seal hạ lưu van cầu ra ngoài → giúp mở van seal hạ lưu của van cầu.</li>
      <li><strong>Khi van BD mất điện:</strong> Đường dầu P sang A của van BD thông nhau, đồng thời đường P sang A của van 31T thông → dẫn dầu áp lực vào buồng đóng servo 1T → đẩy trục servo 1T dịch chuyển đóng van ba ngã 45T → đường A sang P thông nhau, dẫn nước áp lực vào trong van seal hạ lưu → giúp đóng van seal hạ lưu của van cầu.</li>
    </ul>
    <h4 style={{ marginTop: '20px' }}>⚡ Mạch điện điều khiển:</h4>
    <ul>
      <li><strong>Mở van BD:</strong> Chương trình DCS tổ máy xuất tín hiệu tới kênh ch10 Modun A604 → rơle 635XR có điện và khép tiếp điểm → cuộn dây của van BD có điện → làm hút lõi van BD dịch chuyển sang vị trí mở.</li>
      <li><strong>Đóng van BD:</strong> Chương trình DCS tổ máy ngừng xuất tín hiệu tới kênh ch10 Modun A604 → rơle 635XR mất điện và mở tiếp điểm → cuộn dây của van BD mất điện → lò xo sẽ đẩy lõi van BD dịch chuyển sang vị trí đóng.</li>
    </ul>
  </div>
</div>

---

## Van BF
<div style={{ display: 'flex', gap: '25px', alignItems: 'flex-start', flexWrap: 'wrap', padding: '15px' }}>
  <div style={{ flex: '1 1 250px', maxWidth: '300px', textAlign: 'center' }}>
    <img src="/img/van_dien_tu_bf.webp" alt="Van điện từ BF" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', marginBottom: '8px' }} />
    <em style={{ fontSize: '0.9em', display: 'block', color: 'gray', marginBottom: '8px' }}>Van điện từ BF thực tế</em>
    <div style={{ fontSize: '0.85em', textAlign: 'left', padding: '8px 12px', borderRadius: '6px', backgroundColor: 'var(--ifm-background-color)', border: '1px solid var(--ifm-color-emphasis-200)' }}>
      <div>📍 <strong>Vị trí:</strong> Tầng -6.9m</div>
    </div>
  </div>
  <div style={{ flex: '2 2 400px', minWidth: '300px' }}>
    <h4>⚙️ Quá trình hoạt động:</h4>
    <ul>
      <li><strong>Khi van BF có điện:</strong> Đường dầu P sang A của van BF thông nhau → dẫn dầu áp lực vào chân Y của van 30T → đẩy piston van 30T dịch chuyển lên → đường dầu P sang A của van 30T thông nên dầu áp lực vào buồng mở của servo 50T → đẩy trục servo 50T dịch chuyển lên → giúp mở van cầu.</li>
      <li><strong>Khi van BF mất điện:</strong> Đường dầu A sang T của van BF thông nhau → dẫn dầu áp lực từ chân Y của van 30T về thùng chứa dầu → piston van 30T dịch chuyển xuống → đường dầu A sang T của van 30T thông nên dẫn dầu áp lực vào buồng mở của servo 50T về lại thùng chứa dầu → trục servo 50T dịch chuyển xuống → giúp đóng van cầu.</li>
    </ul>
    <h4 style={{ marginTop: '20px' }}>⚡ Mạch điện điều khiển:</h4>
    <ul>
      <li><strong>Mở van BF:</strong> Chương trình DCS tổ máy xuất tín hiệu tới kênh ch12 Modun A604 → rơle 767XR có điện và khép tiếp điểm → rơle 609XR có điện và khép tiếp điểm → cuộn dây của van BF có điện → làm hút lõi van BF dịch chuyển sang vị trí mở.</li>
      <li><strong>Đóng van BF:</strong> Chương trình DCS tổ máy ngừng xuất tín hiệu tới kênh ch12 Modun A604 → rơle 767XR mất điện và mở tiếp điểm → rơle 609XR mất điện và mở tiếp điểm → cuộn dây của van BF mất điện → lò xo sẽ đẩy lõi van BF dịch chuyển sang vị trí đóng.</li>
    </ul>
  </div>
</div>

---

## Van BI
<div style={{ display: 'flex', gap: '25px', alignItems: 'flex-start', flexWrap: 'wrap', padding: '15px' }}>
  <div style={{ flex: '1 1 250px', maxWidth: '300px', textAlign: 'center' }}>
    <img src="/img/van_dien_tu_bi.webp" alt="Van điện từ BI" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', marginBottom: '8px' }} />
    <em style={{ fontSize: '0.9em', display: 'block', color: 'gray', marginBottom: '8px' }}>Van điện từ BI thực tế</em>
    <div style={{ fontSize: '0.85em', textAlign: 'left', padding: '8px 12px', borderRadius: '6px', backgroundColor: 'var(--ifm-background-color)', border: '1px solid var(--ifm-color-emphasis-200)' }}>
      <div>📍 <strong>Vị trí:</strong> Tầng -6.9m</div>
    </div>
  </div>
  <div style={{ flex: '2 2 400px', minWidth: '300px' }}>
    <h4>⚙️ Quá trình hoạt động:</h4>
    <ul>
      <li><strong>Khi van BI có điện:</strong> Khi mức dầu trong bình Accu dầu áp lực lên mức DA và kèm một số điều kiện khác, thì hệ thống DCS sẽ xuất tín hiệu cấp điện cho van BI → dẫn khí nén 80bar từ hệ thống khí nén vào bình Accu dầu áp lực.</li>
      <li><strong>Khi van BI mất điện:</strong> Khi mức dầu trong bình Accu dầu áp lực không còn ở mức DA, thì hệ thống DCS sẽ ngừng xuất tín hiệu và van BI mất điện → ngừng dẫn khí nén 80bar từ hệ thống khí nén vào bình Accu dầu áp lực.</li>
    </ul>
    <h4 style={{ marginTop: '20px' }}>⚡ Mạch điện điều khiển:</h4>
    <ul>
      <li><strong>Mở van BI:</strong> Chương trình DCS tổ máy xuất tín hiệu tới kênh ch9 Modun A604 → rơle 634XR có điện và khép tiếp điểm → cuộn dây của van BI có điện → làm hút lõi van BI dịch chuyển sang vị trí mở.</li>
      <li><strong>Đóng van BI:</strong> Chương trình DCS tổ máy ngừng xuất tín hiệu tới kênh ch9 Modun A604 → rơle 634XR mất điện và mở tiếp điểm → cuộn dây của van BI mất điện → lò xo sẽ đẩy lõi van BI dịch chuyển sang vị trí đóng.</li>
    </ul>
  </div>
</div>

---

## Van BW
<div style={{ display: 'flex', gap: '25px', alignItems: 'flex-start', flexWrap: 'wrap', padding: '15px' }}>
  <div style={{ flex: '1 1 250px', maxWidth: '300px', textAlign: 'center' }}>
    <img src="/img/van_dien_tu_bw.webp" alt="Van điện từ BW" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', marginBottom: '8px' }} />
    <em style={{ fontSize: '0.9em', display: 'block', color: 'gray', marginBottom: '8px' }}>Van điện từ BW thực tế</em>
    <div style={{ fontSize: '0.85em', textAlign: 'left', padding: '8px 12px', borderRadius: '6px', backgroundColor: 'var(--ifm-background-color)', border: '1px solid var(--ifm-color-emphasis-200)' }}>
      <div style={{ marginBottom: '4px' }}>📍 <strong>Vị trí:</strong> Tầng -3.9m</div>
      <div>🔧 <strong>Nhiệm vụ:</strong> Điều khiển đóng mở cánh hướng</div>
    </div>
  </div>
  <div style={{ flex: '2 2 400px', minWidth: '300px' }}>
    <h4>ℹ️ Thông tin chung & Nhiệm vụ:</h4>
    <ul>
      <li><strong>Loại van:</strong> ED 25SE, điện áp định mức 24VDC.</li>
      <li><strong>Nhiệm vụ:</strong> Điều khiển đóng mở cánh hướng. Tùy vào độ lớn dòng điện cấp vào cuộn dây của van BW mà piston của van BW dịch chuyển lên xuống → dẫn dầu áp lực vào buồng đóng, buồng mở của servo cánh hướng → trục servo cánh hướng dịch chuyển vào, ra để điều khiển độ mở bốn cánh hướng của bốn kim phun.</li>
    </ul>
    <h4 style={{ marginTop: '20px' }}>⚡ Mạch điện điều khiển:</h4>
    <ul>
      <li>Bộ điều khiển trong tủ điều tốc → cấp tín hiệu tới modun đầu ra analog A12 → cấp điện áp điều khiển tới bộ khếch đại tỷ lệ N02 → cấp dòng điện tới cuộn dây của van BW → piston của van BW dịch chuyển lên xuống.</li>
    </ul>
  </div>
</div>

---

## Van BX
<div style={{ display: 'flex', gap: '25px', alignItems: 'flex-start', flexWrap: 'wrap', padding: '15px' }}>
  <div style={{ flex: '1 1 250px', maxWidth: '300px', textAlign: 'center' }}>
    <img src="/img/van_dien_tu_bx.webp" alt="Van điện từ BX" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', marginBottom: '8px' }} />
    <em style={{ fontSize: '0.9em', display: 'block', color: 'gray', marginBottom: '8px' }}>Van điện từ BX thực tế</em>
    <div style={{ fontSize: '0.85em', textAlign: 'left', padding: '8px 12px', borderRadius: '6px', backgroundColor: 'var(--ifm-background-color)', border: '1px solid var(--ifm-color-emphasis-200)' }}>
      <div style={{ marginBottom: '4px' }}>📍 <strong>Vị trí:</strong> Tầng -3.9m</div>
      <div>🔧 <strong>Nhiệm vụ:</strong> Điều khiển đóng mở kim phun (gồm 4 bộ: BX1, BX2, BX3, BX4)</div>
    </div>
  </div>
  <div style={{ flex: '2 2 400px', minWidth: '300px' }}>
    <h4>ℹ️ Thông tin chung & Nhiệm vụ:</h4>
    <ul>
      <li><strong>Loại van:</strong> ED 12DE, điện áp định mức 24VDC.</li>
      <li><strong>Nhiệm vụ:</strong> Điều khiển đóng mở bốn kim phun. Tùy vào độ lớn dòng điện cấp vào cuộn dây của van BX mà piston của van BX dịch chuyển lên xuống → dẫn dầu áp lực vào buồng đóng, buồng mở của kim phun → trục kim phun dịch chuyển vào, ra để điều khiển độ mở bốn kim phun.</li>
    </ul>
    <h4 style={{ marginTop: '20px' }}>⚡ Mạch điện điều khiển:</h4>
    <ul>
      <li>Bộ điều khiển trong tủ điều tốc → cấp tín hiệu tới modun đầu ra analog A12 (đối với kim phun 1, 4) và A22 (đối với kim phun 2, 3) → cấp điện áp điều khiển tới bộ khếch đại tỷ lệ N01 (kim 1), N11 (kim 2), N12 (kim 3), N03 (kim 4) → cấp dòng điện tới cuộn dây của van BX1/BX2/BX3/BX4 → piston của van BX1/BX2/BX3/BX4 dịch chuyển lên xuống.</li>
    </ul>
  </div>
</div>
