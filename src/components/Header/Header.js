import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../utils/style.utils'

import logo from '../../images/fhs-logo.svg'

const HeaderWrapper = styled.header`
  background: #fff;
  padding: 1rem 1.875rem;
  border-bottom: 2px solid ${props => props.theme.color_brand_2};
  color: #000;

  ${media.mobile`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `};

  ${media.small`
    padding-left: 2.25rem;
    padding-right: 2.25rem;
  `};

  ${media.large`
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  `};

  .logo img {
    width: 150px;
    margin-bottom: 0;
    display: block;
    margin-bottom: 1em;

    ${media.mobile`
      margin-bottom: 0.5em;
    `};

    ${media.large`
      width: 175px;
    `};

    ${media.xlarge`
      width: 200px;
    `};
  }

  .phone-wrapper {
    font-size: 2em;
    color: ${props => props.theme.color_brand_1};

    ${media.mobile`
      margin-top: 0.5em;
    `};

    .callout {
      display: none;
      margin-right: 1rem;
      font-size: 1.3rem;
      text-transform: uppercase;
      font-family: ${props => props.theme.font_bold};

      ${media.medium`
        display: inline;
      `};
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
