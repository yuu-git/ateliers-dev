import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Atelier for `yuu-git`',
  tagline: 'For a Better Future. －より良い未来のために。',
  favicon: 'img/ico/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Yuu.Konno', // Usually your GitHub org/user name.
  projectName: 'yuu-git', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
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
        /*{to: '/blog', label: 'Blog', position: 'left'},*/
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
              to: '/docs/github-guidelines/index',
            },
            {
              label: 'テクニカル ポリシー',
              to: '/docs/technical-policies/index',
            },
            {
              label: 'テクニカル ノート',
              to: '/docs/technical-notebook/index',
            },
            {
              label: 'プロフィール',
              to: '/docs/profile/index',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Qiita',
              href: 'https://qiita.com/yuu-dev',
            },
            /*{
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
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
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
