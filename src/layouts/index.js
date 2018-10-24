import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import Highlights from '../components/Highlights/Highlights'
import Footer from '../components/Footer/Footer'

import './index.css'
import './fonts.css'
import './body.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            desc
            phone {
              callout
              number
            }
            email
            copyright
          }
        }
        heroImage: file(relativePath: { eq: "images/tools-hero-img.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        boxImage1: file(relativePath: { eq: "images/drill-handyman.png" }) {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        boxImage2: file(relativePath: { eq: "images/paint-and-brushes.png" }) {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        boxImage3: file(relativePath: { eq: "images/hammer-and-nails.png" }) {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: `${data.site.siteMetadata.desc}` },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header phone={data.site.siteMetadata.phone} />
        <Main
          headerImage={data.heroImage.childImageSharp.fluid}
          phone={data.site.siteMetadata.phone}
          email={data.site.siteMetadata.email}
        >
          {children}
        </Main>
        <Highlights
          highlightImage1={data.boxImage1.childImageSharp.fluid}
          highlightImage2={data.boxImage2.childImageSharp.fluid}
          highlightImage3={data.boxImage3.childImageSharp.fluid}
        />
        <Footer
          phone={data.site.siteMetadata.phone}
          email={data.site.siteMetadata.email}
          copyright={data.site.siteMetadata.copyright}
        />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
