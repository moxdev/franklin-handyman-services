import React from 'react'

import Layout from '../layouts/index'

const IndexPage = data => (
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
  </Layout>
)

export default IndexPage
