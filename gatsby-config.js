module.exports = {
  siteMetadata: {
    title: `Meda Vyshnavi - Frontend Developer`,
    siteUrl: `https://www.hooiyan.com`,
    author: `Meda Vyshnavi`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "portfolio",
        path: "./src/content/portfolio/",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Meda Vyshnavi",
        short_name: "Vyshnavi",
        start_url: "/",
        background_color: "#203A4C",
        theme_color: "#203A4C",
        display: "standalone",
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },
  ],
};
