import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../layouts/index'

const IndexPage = props => (
  <Layout>
    <h1>Franklin Handyman Services</h1>
    <p>
      Results-oriented and hands-on handyman services professional with over 30
      years of experience across all facets of residential and commercial
      building and repairs.
    </p>

    <h2>Areas of Expertise</h2>

    <ul className="expertise-list">
      <li>Framing</li>
      <li>Interior/exterior trim</li>
      <li>Doors/windows</li>
      <li>Interior finishes/drywall</li>
      <li>Painting</li>
      <li>Cabinet installation</li>
      <li>Kitchen/bath</li>
      <li>Light duty plumbing &amp; electric</li>
    </ul>

    <ul className="boxes-list">
      <li>
        <Img
          style={{
            width: '300px',
            height: '200px',
            overflow: 'hidden',
          }}
          fluid={props.data.boxImage1.childImageSharp.fluid}
        />
      </li>
      <li>
        <Img
          style={{
            width: '300px',
            height: '200px',
          }}
          fluid={props.data.boxImage2.childImageSharp.fluid}
        />
      </li>
      <li>
        <Img
          style={{
            width: '300px',
            height: '200px',
            overflow: 'hidden',
          }}
          fluid={props.data.boxImage3.childImageSharp.fluid}
        />
      </li>
    </ul>

    <h2>For more information and estimates:</h2>
    <a href="tel:443.202.2830">443.202.2830</a>
    <a href="mailto:z4Franklin@comcast.net">z4Franklin@comcast.net</a>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    boxImage1: file(relativePath: { eq: "images/drill-handyman.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    boxImage2: file(relativePath: { eq: "images/paint-and-brushes.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    boxImage3: file(relativePath: { eq: "images/hammer-and-nails.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
