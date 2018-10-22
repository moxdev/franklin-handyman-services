import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import logo from '../../images/fhs-logo.svg'

const HeaderWrapper = styled.header`
  background: #fff;
  padding: 1rem 1.875rem;
  border-bottom: 2px solid var(--brand-color-2);
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
  }

  .phone-wrapper {
    font-size: 2em;
    color: var(--brand-color-1);

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
      color: var(--brand-color-2);
    }
  }
`

export default class Header extends Component {
  render() {
    const { phone } = this.props

    return (
      <HeaderWrapper>
        <div className="logo">
          <img src={logo} alt="Franklin Handyman Logo" />
        </div>

        <div className="phone-wrapper">
          <span className="callout">{phone.callout}</span>
          <a href={`tel:${phone.number}`}>{phone.number}</a>
        </div>
      </HeaderWrapper>
    )
  }
}

Header.propTypes = {
  phone: PropTypes.object.isRequired,
}
