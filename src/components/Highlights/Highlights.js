import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const HighlightsList = styled.ul`
  background-color: #fff;
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0;
    padding: 0;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      flex: 1 1 33.333%;
    }
  }
`

const Highlights = data => (
  <HighlightsList>
    <li>
      <Img fluid={data.highlightImage1} />
    </li>
    <li>
      <Img fluid={data.highlightImage2} />
    </li>
    <li>
      <Img fluid={data.highlightImage3} />
    </li>
  </HighlightsList>
)

export default Highlights
