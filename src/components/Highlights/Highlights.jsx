import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from 'styled-components'

const HighlightsList = styled.section`
  background-color: #fff;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    @media (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        flex: 1 1 33.333%;
      }
    }
  }

  li {
    margin: 0;
    padding: 0;
  }
`

export default class Highlights extends Component {
  render() {
    const { highlightImage1, highlightImage2, highlightImage3 } = this.props

    return (
      <HighlightsList>
        <ul>
          <li>
            <Img fluid={highlightImage1} />
          </li>
          <li>
            <Img fluid={highlightImage2} />
          </li>
          <li>
            <Img fluid={highlightImage3} />
          </li>
        </ul>
      </HighlightsList>
    )
  }
}

Highlights.propTypes = {
  highlightImage1: PropTypes.object.isRequired,
  highlightImage2: PropTypes.object.isRequired,
  highlightImage3: PropTypes.object.isRequired,
}
