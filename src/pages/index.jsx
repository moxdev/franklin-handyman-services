import React from 'react'
import styled from 'styled-components'

import Layout from '../layouts/index'

const ExpertiseList = styled.ul`
  text-align: left;
  list-style-position: inside;
  columns: 3 200px;
  margin: 0;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 1180px) {
    max-width: 900px;
  }
`

const IndexPage = () => (
  <Layout>
    <h2>Areas of Expertise</h2>

    <ExpertiseList>
      <li>Framing</li>
      <li>Interior/exterior trim</li>
      <li>Doors/windows</li>
      <li>Interior finishes/drywall</li>
      <li>Painting</li>
      <li>Cabinet installation</li>
      <li>Kitchen/bath</li>
      <li>Light duty plumbing &amp; electric</li>
    </ExpertiseList>

    <hr />
  </Layout>
)

export default IndexPage
