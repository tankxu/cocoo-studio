module.exports = {
  siteMetadata: {
    siteUrl: "https://design.coding.fashion",
    title: "Cocoo Studio",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-4SQ419MKXX",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`],
          placeholder: `dominantColor`,
          quality: 90,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    "gatsby-plugin-scroll-reveal",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "CoCoo Studio",
        short_name: "CoCoo Studio",
        start_url: "/",
        background_color: "#F1F7FF",
        theme_color: "#257EFA",
        display: "standalone",
        icon: "src/images/favicon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: true, // optional parameter to include script in development
        id: 3019066,
        sv: 6,
      },
    },
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint:
          process.env.GRAPHCMS_ENDPOINT ||
          "https://api-ap-northeast-1.graphcms.com/v2/ckwd8bmqd50z601xqgist0gvs/master",
        downloadLocalImages: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
      },
      __key: "blogs",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
};
