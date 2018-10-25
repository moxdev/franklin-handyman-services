import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

const HeroWrapper = styled.section`
  position: relative;

  .gatsby-image-wrapper {
    height: 450px;

    @media (min-width: 1180px) {
      height: 500px;
    }

    @media (min-width: 1460px) {
      height: 550px;
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #000;
      opacity: 0.6;
      z-index: 2;
    }
  }

  .title-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    z-index: 10;
    text-shadow: 0 0 20px #000;
    text-align: center;
    letter-spacing: 1px;
    max-width: 650px;

    @media (min-width: 1460px) {
      max-width: 800px;

      span {
        font-size: 1.25em;
      }
    }
  }
`

const Hero = data => (
  <HeroWrapper>
    <Img
      style={{
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        zIndex: '1',
      }}
      fluid={data.headerImage}
    />
    <div className="title-wrapper">
      <h1>Franklin Handyman Services</h1>
      <span>
        Results-oriented and hands-on handyman services professional with over
        30 years of experience across all facets of residential and commercial
        building and repairs.
      </span>
    </div>
  </HeroWrapper>
)

export default Hero

Hero.propTypes = {
  data: PropTypes.shape({
    headerImage: PropTypes.object.isRequired,
  }),
}
