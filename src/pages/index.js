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
              to="/docs/he-thong-to-may">
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
            <span className="stat-number">6</span>
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
              <h3 className="category-title">Hệ thống Tổ máy</h3>
              <p className="category-description">
                Thông số kỹ thuật, quy trình vận hành và tài liệu liên quan đến tổ máy phát điện.
              </p>
              <Link className="category-link" to="/docs/he-thong-to-may">
                Xem tài liệu <span>→</span>
              </Link>
            </div>

            {/* 2. Hệ thống Điều tốc */}
            <div className="category-card">
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
              <h3 className="category-title">Hệ thống Kích từ</h3>
              <p className="category-description">
                Tài liệu kỹ thuật và quy trình liên quan đến hệ thống kích từ tổ máy phát điện.
              </p>
              <Link className="category-link" to="/docs/he-thong-kich-tu">
                Xem tài liệu <span>→</span>
              </Link>
            </div>

            {/* 4. Hệ thống Tự dùng */}
            <div className="category-card">
              <h3 className="category-title">Hệ thống Tự dùng</h3>
              <p className="category-description">
                Tài liệu, thông số và quy trình vận hành hệ thống tự dùng xoay chiều và một chiều nhà máy.
              </p>
              <Link className="category-link" to="/docs/he-thong-tu-dung">
                Xem tài liệu <span>→</span>
              </Link>
            </div>

            {/* 5. Hệ thống Trạm 110kV */}
            <div className="category-card">
              <h3 className="category-title">Hệ thống Trạm 110kV</h3>
              <p className="category-description">
                Tài liệu kỹ thuật, thông số máy biến áp, máy cắt và sơ đồ cấu hình bảo vệ rơ-le sân phân phối 110kV.
              </p>
              <Link className="category-link" to="/docs/he-thong-tram-110kv">
                Xem tài liệu <span>→</span>
              </Link>
            </div>

            {/* 6. Hệ thống 1 chiều */}
            <div className="category-card">
              <h3 className="category-title">Hệ thống 1 chiều</h3>
              <p className="category-description">
                Tài liệu giàn ắc quy, hệ thống sạc và quy trình kiểm tra chạm đất nguồn một chiều DC.
              </p>
              <Link className="category-link" to="/docs/he-thong-1-chieu">
                Xem tài liệu <span>→</span>
              </Link>
            </div>

            {/* 7. Tổng hợp hình ảnh các hệ thống */}
            <div className="category-card">
              <h3 className="category-title">Tổng hợp hình ảnh các hệ thống</h3>
              <p className="category-description">
                Tổng hợp hình ảnh thực tế các thiết bị tầng hầm bánh xe công tác và buồng ổ hướng Tuabin.
              </p>
              <Link className="category-link" to="/docs/tong-hop-hinh-anh-cua-cac-he-thong">
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
