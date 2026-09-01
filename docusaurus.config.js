// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Thủy điện Vĩnh Sơn',
  tagline: 'Hệ thống quản lý, tra cứu hồ sơ kỹ thuật, quy trình vận hành và an toàn',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    faster: false,
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['vi', 'en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.webp',
      colorMode: {
        respectPrefersColorScheme: true,
        disableSwitch: true,
      },
      navbar: {
        logo: {
          alt: 'Vinh Son Hydroelectric Logo',
          src: 'img/vinh_son_logo.webp',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Kho Tài Liệu',
          },
          {
            type: 'html',
            position: 'right',
            value: '<span class="navbar-title-right">Thủy điện Vĩnh Sơn</span>',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Hệ thống thiết bị chính',
            items: [
              {
                label: 'Hệ thống Tổ máy',
                to: '/docs/he-thong-to-may',
              },
              {
                label: 'Hệ thống Điều tốc',
                to: '/docs/he-thong-dieu-toc',
              },
              {
                label: 'Hệ thống Kích từ',
                to: '/docs/he-thong-kich-tu',
              },
            ],
          },
          {
            title: 'Trạm & Nguồn tự dùng',
            items: [
              {
                label: 'Hệ thống Tự dùng',
                to: '/docs/he-thong-tu-dung',
              },
              {
                label: 'Hệ thống Trạm 110kV',
                to: '/docs/he-thong-tram-110kv',
              },
              {
                label: 'Hệ thống 1 chiều',
                to: '/docs/he-thong-1-chieu',
              },
            ],
          },
          {
            title: 'Thông tin công ty',
            items: [
              {
                label: 'Trang chủ tài liệu',
                to: '/',
              },
              {
                label: 'Website VSH',
                href: 'http://vsh.com.vn',
              },
            ],
          },
        ],
        copyright: `Bản quyền © ${new Date().getFullYear()} Công ty Cổ phần Thủy điện Vĩnh Sơn - Sông Hinh (VSH).`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
