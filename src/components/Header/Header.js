import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import logo from '../../images/fhs-logo.svg'

const HeaderWrapper = styled.header`
  background: #fff;
  padding: 1rem 1.875rem;
  border-bottom: 2px solid ${props => props.theme.color_brand_2};
  color: #000;

  @media (min-width: 575px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 760px) {
    padding-left: 2.25rem;
    padding-right: 2.25rem;
  }

  @media (min-width: 1180px) {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }

  .logo img {
    width: 150px;
    margin-bottom: 0;
    display: block;
    margin-bottom: 1em;

    @media (min-width: 575px) {
      margin-bottom: 0.5em;
    }

    @media (min-width: 1180px) {
      width: 175px;
    }

    @media (min-width: 1480px) {
      width: 200px;
    }
  }

  .phone-wrapper {
    font-size: 2em;
    color: ${props => props.theme.color_brand_1};

    @media (min-width: 575px) {
      margin-top: 0.5em;
    }

    .callout {
      display: none;
      margin-right: 1rem;
      font-size: 1.3rem;
      text-transform: uppercase;
      font-family: 'HelveticaNeueBold', san-serif;

      @media (min-width: 960px) {
        display: inline;
      }
    }

    a {
      text-decoration: none;
      color: ${props => props.theme.color_brand_2};

      &:hover {
        color: ${props => props.theme.color_brand_1};
      }
    }
  }
`

const Header = data => (
  <HeaderWrapper>
    <div className="logo">
      <img src={logo} alt="Franklin Handyman Logo" />
    </div>

    <div className="phone-wrapper">
      <span className="callout">{data.phone.callout}</span>
      <a href={`tel:${data.phone.number}`}>{data.phone.number}</a>
    </div>
  </HeaderWrapper>
)

export default Header

Header.propTypes = {
  data: PropTypes.shape({
    phone: PropTypes.shape({
      callout: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  }),
}
