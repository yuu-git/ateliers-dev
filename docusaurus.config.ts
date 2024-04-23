import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Atelier for `Yuu`',
  tagline: 'For a Better Future. －「より良い未来のために。」',
  favicon: 'img/ico/favicon.ico',

  // サイトの本番URLをここに設定します
  url: 'https://ateliers.dev/',
  // サイトが提供される/<baseUrl>/パス名を設定します
  // GitHub Pagesのデプロイの場合、通常は '/<projectName>/' です
  baseUrl: '/',
  // その他の設定...
  
  // trailingSlash: true を設定した場合、すべてのページURLの末尾にスラッシュ (/) が付加されます。
  // false を設定した場合、URLの末尾からスラッシュが削除されます。
  trailingSlash: false,

  // GitHub Pagesのデプロイ設定
  // GitHub Pagesを使用していない場合、これらは不要です
  organizationName: 'yuu-git', // 通常はGitHubの組織名またはユーザー名です
  projectName: 'ateliers-dev', // 通常はリポジトリ名です

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 国際化を使用しない場合でも、このフィールドを使用してhtmlの言語などの有用なメタデータを設定できます。
  // 例えば、サイトが日本語の場合は、"en"を"ja"に置き換えることができます。
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/yuu-git/ateliers-dev/edit/master/',
            showLastUpdateAuthor: false,
            showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/yuu-git/ateliers-dev/edit/master/',        
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    /*image: 'img/docusaurus-social-card.jpg', */
    navbar: {
      title: 'ateliers.dev',
      logo: {
        alt: 'My Site Logo',
        src: 'img/svg/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'githubGuidelinesSidebar',
          position: 'left',
          label: 'GitHub ガイドライン',
        },
        {
          type: 'docSidebar',
          sidebarId: 'technicalPoliciesSidebar',
          position: 'left',
          label: 'テクニカルポリシー',
        },
        {
          type: 'docSidebar',
          sidebarId: 'technicalNotebookSidebar',
          position: 'left',
          label: 'テクニカルノート',
        },
        {
          type: 'docSidebar',
          sidebarId: 'profileSidebar',
          position: 'left',
          label: 'プロフィール',
        },
        {
          to: '/docs/faq', 
          label: 'FAQ', 
          position: 'left'
        },
        /*{to: '/blog', label: 'Blog', position: 'left'},*/
        {
          to: '/docs/tags', 
          label: 'タグ検索', 
          position: 'right'
        },
        {
          href: 'https://github.com/yuu-git',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'GitHub ガイドライン',
              to: '/docs/github-guidelines/',
            },
            {
              label: 'テクニカル ポリシー',
              to: '/docs/technical-policies/',
            },
            {
              label: 'テクニカル ノート',
              to: '/docs/technical-notebook/',
            },
            {
              label: 'プロフィール',
              to: '/docs/profiles/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'はてなブックマーク',
              href: 'https://b.hatena.ne.jp/yuu-0503/',
            },
            {
              label: 'Qiita',
              href: 'https://qiita.com/yuu-dev',
            },
            /* {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },*/
          ],
        },
        {
          title: 'More',
          items: [
            /*
            {
              label: 'Blog',
              to: '/blog',
            },*/
            {
              label: 'GitHub',
              href: 'https://github.com/yuu-git',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ateliers.dev - Yuu.Konno - GitHub: yuu-git`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
