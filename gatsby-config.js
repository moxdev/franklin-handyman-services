module.exports = {
  siteMetadata: {
    title: 'Franklin Handyman Services',
    desc:
      'Results-oriented and hands-on handyman services professional with over 30 years of experience across all facets of residential and commercial building and repairs.',
    phone: {
      callout: 'Call for an estimate!',
      number: '443.202.2830',
    },
    email: 'z4Franklin@comcast.net',
    copyright: 'Copyright © 2018. Franklin Handyman Services',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#54565a',
        theme_color: '#6f6259',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
