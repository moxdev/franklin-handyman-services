import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../layouts/index'

const IndexPage = props => (
  <Layout>
    <Img fluid={props.data.heroImage.childImageSharp.fluid} />

    <h1>Franklin Handyman Services</h1>
    <p>
      Results-oriented and hands-on handyman services professional with over 30
      years of experience across all facets of residential and commercial
      building and repairs.
    </p>

    <h2>Areas of Expertise</h2>

    <ul>
      <li>Framing</li>
      <li>Interior/exterior trim</li>
      <li>Doors/windows</li>
      <li>Interior finishes/drywall</li>
      <li>Painting</li>
      <li>Cabinet installation</li>
      <li>Kitchen/bath</li>
      <li>Light duty plumbing &amp; electric</li>
    </ul>

    <p>
      For more information and estimates: 443.202.2830 z4Franklin@comcast.net
    </p>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    heroImage: file(relativePath: { eq: "images/tools-hero-img.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
