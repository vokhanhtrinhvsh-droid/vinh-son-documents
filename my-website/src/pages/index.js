import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Trang chủ - ${siteConfig.title}`}
      description={siteConfig.tagline}>
      
      {/* Hero Section */}
      <header className="hero-vinhson">
        <div className="container">
          <h1 className="hero-title">{siteConfig.title}</h1>
          <p className="hero-subtitle">{siteConfig.tagline}</p>
          <div className="hero-buttons">
            <Link
              className="button button--secondary button--lg btn-hero-primary"
              to="/docs/intro">
              📂 Vào Kho Tài Liệu
            </Link>
            <a
              className="button button--secondary button--lg btn-hero-secondary"
              href="#he-thong">
              🔍 Xem Các Hệ Thống
            </a>
          </div>
        </div>
      </header>

      {/* Dashboard Statistics Banner */}
      <section className="stats-banner">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">5/5</span>
            <span className="stat-label">Hệ thống cốt lõi</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">66 MW</span>
            <span className="stat-label">Tổng công suất</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Tài liệu số hóa</span>
          </div>
        </div>
      </section>

      {/* Categories Grid Section */}
      <main className="categories-section" id="he-thong">
        <div className="container">
          <h2 className="section-title">Hệ Thống Thiết Bị & Tài Liệu</h2>
          
          <div className="categories-grid">
            {/* 1. Hệ thống Tổ máy */}
            <div className="category-card">
              <span className="category-icon" role="img" aria-label="turbine">🌀</span>
              <h3 className="category-title">Hệ thống Tổ máy</h3>
              <p className="category-description">
                Thông số kỹ thuật chi tiết tuabin Francis, máy phát điện đồng bộ H1-H2, hệ thống nhiệt độ giới hạn và quy trình khởi động hòa lưới tự động qua DCS.
              </p>
              <Link className="category-link" to="/docs/he-thong-to-may">
                Xem tài liệu <span>→</span>
              </Link>
            </div>

            {/* 2. Hệ thống Điều tốc */}
            <div className="category-card">
              <span className="category-icon" role="img" aria-label="governor">🎚️</span>
              <h3 className="category-title">Hệ thống Điều tốc</h3>
              <p className="category-description">
                Tài liệu về bộ điều tốc điện - thủy lực kỹ thuật số PLC, trạm dầu tích năng áp lực 4.0 MPa và hướng dẫn vận hành, xử lý khẩn cấp sự cố sụt áp dầu.
              </p>
              <Link className="category-link" to="/docs/he-thong-dieu-toc">
                Xem tài liệu <span>→</span>
              </Link>
            </div>

            {/* 3. Hệ thống Kích từ */}
            <div className="category-card">
              <span className="category-icon" role="img" aria-label="excitation">⚡</span>
              <h3 className="category-title">Hệ thống Kích từ</h3>
              <p className="category-description">
                Cấu trúc hệ thống kích từ tĩnh, nguyên lý tự động điều áp kỹ thuật số AVR và quy trình bảo vệ chạm đất rotor máy phát điện (64R).
              </p>
              <Link className="category-link" to="/docs/he-thong-kich-tu">
                Xem tài liệu <span>→</span>
              </Link>
            </div>

            {/* 4. Hệ thống Trạm 110kV */}
            <div className="category-card">
              <span className="category-icon" role="img" aria-label="substation">🗼</span>
              <h3 className="category-title">Hệ thống Trạm 110kV</h3>
              <p className="category-description">
                Thông số máy biến áp lực chính T1/T2, máy cắt khí SF6 sân phân phối 110kV và sơ đồ cấu hình bảo vệ rơ-le (87T, 21, 87L).
              </p>
              <Link className="category-link" to="/docs/he-thong-tram-110kv">
                Xem tài liệu <span>→</span>
              </Link>
            </div>

            {/* 5. Hệ thống 1 chiều */}
            <div className="category-card">
              <span className="category-icon" role="img" aria-label="dc-battery">🔋</span>
              <h3 className="category-title">Hệ thống 1 chiều</h3>
              <p className="category-description">
                Hướng dẫn kỹ thuật giàn ắc quy chì-axit dự phòng 220VDC điều khiển, tủ sạc Chloride thông minh và quy trình dò tìm chạm đất DC thủ công.
              </p>
              <Link className="category-link" to="/docs/he-thong-1-chieu">
                Xem tài liệu <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Notice Banner */}
      <section className="notice-section">
        <div className="notice-container">
          <div className="notice-content">
            <span className="notice-badge">Lưu ý</span>
            <p className="notice-text">
              Hệ thống tài liệu nội bộ - Chỉ lưu hành và khai thác trong phạm vi Nhà máy Thủy điện Vĩnh Sơn.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
