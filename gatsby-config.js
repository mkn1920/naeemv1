module.exports = {
  siteMetadata: {
    siteUrl: "https://www.github.com/mkn1920",
    title: "Naeem",
    description:
      "This is mylittle corner of the internet. Look forward to plenty of interesting ideas & projects.",
    author: "Mohammad Naeem Naseri",
  },
  flags: {
    DEV_SSR: false,
    FAST_DEV: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
    PARALLEL_SOURCING: false,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-double-brackets-link",
            options: {
              titleToURLPath: `${__dirname}/resolve-url.js`,
              stripBrackets: true,
              parseWikiLinks: true,
            },
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-markdown-references`,
      options: {
        types: ["Mdx"], // or ['RemarkMarkdown'] (or both)
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Raleway:400,400i,600,800,800i`, `Nanum Pen Script:400`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mohammad Naeem`,
        short_name: `Naeem`,
        start_url: `/`,
        icon: `src/images/logo.png`,
      },
    },
  ],
};
