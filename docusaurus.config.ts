import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Foundation Formation Kit",
  tagline: "By the Open Source Justice Foundation",
  favicon: "img/favicon.ico",

  url: "https://docs.foundationformationkit.org",
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    path: "i18n",
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
        calendar: "gregory",
        path: "en",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/Open-Source-Justice-Foundation/ffk-docs",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/Open-Source-Justice-Foundation/ffk-docs",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        href: "/img/favicon-96x96.png",
        sizes: "96x96",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/svg+xml",
        href: "/img/favicon.svg",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/img/apple-touch-icon.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "manifest",
        href: "/img/site.webmanifest",
      },
    },
  ],

  themeConfig: {
    metadata: [
      {
        name: "description",
        content:
          "Docs for the Foundation Formation Kit by the Open Source Justice Foundation ⚖️",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
      {
        name: "author",
        content: "Open Source Justice Foundation",
      },
      {
        name: "apple-mobile-web-app-title",
        content: "FFK Docs",
      },
      {
        property: "og:locale",
        content: "en",
      },
      {
        property: "og:title",
        content: "Foundation Formation Kit",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:image",
        content:
          "https://docs.foundationformationkit.org/img/logos/ffk-docs-open-graph-rectangle.png",
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:image:alt",
        content: "Foundation Formation Kit Open Graph Rectangular Image",
      },
      {
        property: "og:image",
        content:
          "https://docs.foundationformationkit.org/img/logos/ffk-docs-open-graph-square.png",
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "1200",
      },
      {
        property: "og:image:alt",
        content: "Foundation Formation Kit Open Graph Square Image",
      },
      {
        property: "og:url",
        content: "https://docs.foundationformationkit.org",
      },
      {
        property: "og:description",
        content:
          "Docs for the Foundation Formation Kit by the Open Source Justice Foundation ⚖️",
      },
      {
        property: "og:site_name",
        content: "Foundation Formation Kit",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Foundation Formation Kit",
      },
      {
        name: "twitter:description",
        content:
          "Docs for the Foundation Formation Kit by the Open Source Justice Foundation ⚖️",
      },
      {
        name: "twitter:url",
        content: "https://docs.foundationformationkit.org",
      },
      {
        name: "twitter:site",
        content: "@OSJF_org",
      },
      {
        name: "twitter:image",
        content:
          "https://docs.foundationformationkit.org/img/logos/ffk-docs-twitter-summary-large.png",
      },
      {
        name: "twitter:image:alt",
        content: "Foundation Formation Kit Twitter Summary Large Image",
      },
      {
        name: "twitter:creator",
        content: "@OSJF_org",
      },
    ],
    navbar: {
      title: "Foundation Formation Kit",
      logo: {
        alt: "Foundation Formation Kit Logo",
        src: "img/logos/logo.svg",
        srcDark: "img/logos/logo-dark.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/Open-Source-Justice-Foundation/ffk-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Guide",
          items: [
            {
              label: "Docs",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/FYkpPB8meW",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/Open-Source-Justice-Foundation/ffk-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Open Source Justice Foundation.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  organizationName: "Open-Source-Justice-Foundation",
  projectName: "ffk-docs",
  deploymentBranch: "master",
};

export default config;
