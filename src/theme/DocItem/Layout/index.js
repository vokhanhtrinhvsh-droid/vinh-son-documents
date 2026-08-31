import React from 'react';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import {useDoc, useDocsSidebar} from '@docusaurus/plugin-content-docs/client';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import ContentVisibility from '@theme/ContentVisibility';
import styles from './styles.module.css';

import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';

function getIconForLabel(label) {
  const lower = label.toLowerCase();
  if (lower.includes('kinh nghiệm') || lower.includes('học tập')) return '💡';
  if (lower.includes('quy trình') || lower.includes('vận hành')) return '⚙️';
  if (lower.includes('bản vẽ') || lower.includes('tài liệu')) return '📋';
  if (lower.includes('hình ảnh') || lower.includes('thiết bị')) return '🖼️';
  if (lower.includes('kỹ năng') || lower.includes('thực tế')) return '🛠️';
  if (lower.includes('sự cố')) return '⚠️';
  if (lower.includes('câu hỏi') || lower.includes('ôn tập')) return '❓';
  
  // System 7 subdirectories specific icons
  if (lower.includes('bánh xe công tác') || lower.includes('tầng hầm')) return '🌀';
  if (lower.includes('buồng ổ hướng') || lower.includes('tuabin')) return '🌪️';
  if (lower.includes('buồng máy phát')) return '⚡';
  if (lower.includes('ổ hướng ổ đỡ')) return '🔩';
  if (lower.includes('tủ đầu ra')) return '🎛️';
  if (lower.includes('thiết bị 13.8kv') || lower.includes('13.8kv')) return '🔌';
  if (lower.includes('trung áp')) return '🔋';
  if (lower.includes('máy biến áp chính')) return '📐';
  if (lower.includes('trạm 110kv') || lower.includes('110kv')) return '📡';

  return '📄';
}

function getCleanLabelForSlug(href, originalLabel) {
  const mapping = {
    'kinh-nghiem-hoc-tap-nhanh': 'KINH NGHIỆM HỌC TẬP',
    'quy-trinh-vh-va-xlsc': 'QUY TRÌNH VH & XLSC',
    'ban-ve-va-tai-lieu-ky-thuat': 'BẢN VẼ & TÀI LIỆU',
    'hinh-anh-thiet-bi': 'HÌNH ẢNH THIẾT BỊ',
    'ky-nang-van-hanh-thuc-te': 'KỸ NĂNG VẬN HÀNH',
    'cac-su-co-da-xay-ra': 'CÁC SỰ CỐ ĐÃ XẢY RA',
    'cac-cau-hoi-on-tap': 'CÁC CÂU HỎI ÔN TẬP',
    
    // System 7 specific
    'tang-ham-banh-xe-cong-tac': 'TẦNG HẦM BÁNH XE CÔNG TÁC',
    'buong-o-huong-tuabin': 'BUỒNG Ổ HƯỚNG TUABIN',
    'buong-may-phat': 'BUỒNG MÁY PHÁT',
    'o-huong-o-do-may-phat': 'Ổ HƯỚNG Ổ ĐỠ MÁY PHÁT',
    'tu-dau-ra-may-phat': 'TỦ ĐẦU RA MÁY PHÁT',
    'thiet-bi-13-8kv': 'THIẾT BỊ 13.8KV',
    'may-bien-ap-trung-ap': 'MÁY BIẾN ÁP TRUNG ÁP',
    'may-bien-ap-chinh': 'MÁY BIẾN ÁP CHÍNH',
    'he-thong-110kv': 'HỆ THỐNG 110KV'
  };

  if (!href) return originalLabel ? originalLabel.toUpperCase() : '';
  const parts = href.split('/').filter(Boolean);
  const lastPart = parts[parts.length - 1];
  
  if (mapping[lastPart]) {
    return mapping[lastPart];
  }
  
  return originalLabel ? originalLabel.replace(/^\d+\.\s*/, '').toUpperCase() : '';
}

function findActiveLevel1Category(sidebarItems, pathname) {
  if (!sidebarItems) return null;
  const normalizedPathname = pathname.replace(/\/$/, '');
  
  for (const item of sidebarItems) {
    if (item.href && item.href.replace(/\/$/, '') === normalizedPathname) {
      return item;
    }
    if (item.items) {
      const hasChildMatch = item.items.some(child => {
        if (child.href && normalizedPathname.startsWith(child.href.replace(/\/$/, ''))) {
          return true;
        }
        if (child.items) {
          return child.items.some(grandChild => grandChild.href && normalizedPathname.startsWith(grandChild.href.replace(/\/$/, '')));
        }
        return false;
      });
      if (hasChildMatch) {
        return item;
      }
    }
  }
  return null;
}

const PAGE_SUB_ITEMS = {
  '/docs/he-thong-dieu-toc/hinh-anh-thiet-bi': [
    { label: 'Tủ Điều Tốc', tabValue: 'tu-dieu-toc' },
    { label: 'Hệ Thống Dầu Thủy Lực', tabValue: 'he-thong-dau-thuy-luc' },
    { label: 'Bình Accu Dầu', tabValue: 'binh-accu-dau' },
    { label: 'Các Van Điện Tử', tabValue: 'cac-van-dien-tu' },
    { label: 'Van Cầu', tabValue: 'van-cau' },
  ],
  '/docs/he-thong-1-chieu/hinh-anh-thiet-bi': [
    { label: 'Hệ thống 125VDC', tabValue: 'sys-125vdc' },
    { label: 'Hệ thống 48VDC', tabValue: 'sys-48vdc' },
  ],
};

function DocsHorizontalTabs() {
  const sidebar = useDocsSidebar();
  const {pathname} = useLocation();
  const [activeDropdownIdx, setActiveDropdownIdx] = React.useState(null);

  React.useEffect(() => {
    const handleHashSwitch = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setTimeout(() => {
          let targetLabel = '';
          Object.values(PAGE_SUB_ITEMS).forEach(items => {
            const matched = items.find(i => i.tabValue === hash);
            if (matched) targetLabel = matched.label;
          });

          const tabButtons = Array.from(document.querySelectorAll('li[role="tab"]'));
          const target = tabButtons.find(btn => {
            const txt = btn.textContent.trim().toLowerCase();
            const searchLabel = targetLabel ? targetLabel.toLowerCase() : '';
            const searchHash = hash.replace(/-/g, ' ').toLowerCase();
            return (searchLabel && txt.includes(searchLabel)) || txt.includes(searchHash);
          });
          if (target) {
            target.click();
          } else {
            const el = document.getElementById(hash);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        }, 150);
      }
    };

    handleHashSwitch();
    window.addEventListener('hashchange', handleHashSwitch);
    return () => window.removeEventListener('hashchange', handleHashSwitch);
  }, [pathname]);

  if (!sidebar || !sidebar.items) return null;

  const activeLevel1 = findActiveLevel1Category(sidebar.items, pathname);
  if (!activeLevel1) return null;

  const subItems = activeLevel1.items || [];
  if (subItems.length === 0) return null;

  const normalizedPathname = pathname.replace(/\/$/, '');
  const isOverviewActive = activeLevel1.href && normalizedPathname === activeLevel1.href.replace(/\/$/, '');

  const allTabs = [];

  subItems.forEach(item => {
    if (item.type === 'link' || item.type === 'category') {
      const href = item.href;
      if (href) {
        const normalizedHref = href.replace(/\/$/, '');
        const itemActive = normalizedPathname.startsWith(normalizedHref);
        const cleanLabel = getCleanLabelForSlug(href, item.label);

        let dropdownItems = [];
        if (PAGE_SUB_ITEMS[normalizedHref]) {
          dropdownItems = PAGE_SUB_ITEMS[normalizedHref].map(sub => ({
            label: sub.label,
            href: `${href}#${sub.tabValue}`,
            tabValue: sub.tabValue
          }));
        } else if (item.items && item.items.length > 0) {
          const filteredChildren = item.items.filter(child => child.href && child.href.replace(/\/$/, '') !== normalizedHref);
          dropdownItems = filteredChildren.map(child => ({
            label: getCleanLabelForSlug(child.href, child.label),
            href: child.href
          }));
        }

        allTabs.push({
          label: cleanLabel,
          href: href,
          icon: getIconForLabel(item.label || ''),
          isActive: itemActive && !isOverviewActive,
          dropdownItems: dropdownItems
        });
      }
    }
  });

  const cols = allTabs.length;

  const onDropdownItemClick = (e, subHref, tabValue, subLabel) => {
    if (tabValue) {
      const currentPath = window.location.pathname.replace(/\/$/, '');
      const targetPath = subHref.split('#')[0].replace(/\/$/, '');
      if (currentPath === targetPath) {
        e.preventDefault();
        window.location.hash = tabValue;
        const tabButtons = Array.from(document.querySelectorAll('li[role="tab"]'));
        const target = tabButtons.find(btn => {
          const txt = btn.textContent.trim().toLowerCase();
          const searchLabel = subLabel ? subLabel.toLowerCase() : '';
          const searchVal = tabValue ? tabValue.replace(/-/g, ' ').toLowerCase() : '';
          return (searchLabel && txt.includes(searchLabel)) || (searchVal && txt.includes(searchVal));
        });
        if (target) {
          target.click();
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          const el = document.getElementById(tabValue);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
        setActiveDropdownIdx(null);
      }
    }
  };

  return (
    <div className="docs-tabs-wrapper-outer">
      <div className="docs-tabs-wrapper">
        <div className={`docs-tabs-container docs-tabs-cols-${cols}`}>
          {allTabs.map((tab, idx) => {
            const hasDropdown = tab.dropdownItems && tab.dropdownItems.length > 0;
            const isDropdownOpen = activeDropdownIdx === idx;

            return (
              <div
                key={idx}
                className={`docs-tab-item-wrapper ${hasDropdown ? 'has-dropdown' : ''}`}
                onMouseEnter={() => hasDropdown && setActiveDropdownIdx(idx)}
                onMouseLeave={() => hasDropdown && setActiveDropdownIdx(null)}
              >
                <Link
                  to={tab.href}
                  className={`docs-tab-item ${tab.isActive ? 'active' : ''}`}
                >
                  <span className="docs-tab-label">{tab.label}</span>
                  {hasDropdown && <span className="docs-tab-arrow">▾</span>}
                </Link>

                {hasDropdown && isDropdownOpen && (
                  <div className="docs-tab-dropdown">
                    {tab.dropdownItems.map((sub, subIdx) => (
                      <Link
                        key={subIdx}
                        to={sub.href}
                        className="docs-dropdown-item"
                        onClick={(e) => onDropdownItemClick(e, sub.href, sub.tabValue, sub.label)}
                      >
                        <span className="docs-dropdown-bullet">🔹</span>
                        <span>{sub.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


function useDocTOC() {
  const {frontMatter, toc} = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined;
  return {
    hidden,
    mobile,
    desktop,
  };
}

export default function DocItemLayout({children}) {
  const docTOC = useDocTOC();
  const {metadata} = useDoc();
  return (
    <div className="row">
      <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
        <ContentVisibility metadata={metadata} />
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocsHorizontalTabs />
            <DocVersionBadge />
            {docTOC.mobile}
            
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}


