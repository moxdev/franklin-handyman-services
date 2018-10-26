import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { media } from '../../utils/style.utils'

const HighlightsList = styled.section`
  background-color: #fff;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    ${media.mobile`
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        flex: 1 1 33.333%;
      }
    `};
  }

  li {
    margin: 0;
    padding: 0;
  }
`

const Highlights = data => (
  <HighlightsList>
    <ul>
      <li>
        <Img fluid={data.highlightImage1} />
      </li>
      <li>
        <Img fluid={data.highlightImage2} />
      </li>
      <li>
        <Img fluid={data.highlightImage3} />
      </li>
    </ul>
  </HighlightsList>
)

export default Highlights

Highlights.propTypes = {
  data: PropTypes.shape({
    highlightImage1: PropTypes.object.isRequired,
    highlightImage2: PropTypes.object.isRequired,
    highlightImage3: PropTypes.object.isRequired,
  }),
}
