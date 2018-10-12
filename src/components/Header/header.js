import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import logo from '../../images/fhs-logo.svg'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 1rem 1.875rem;
  border-bottom: 2px solid var(--brand-color-2);
  color: #000;

  .logo {
    width: 150px;
  }

  h1 {
    color: var(--brand-color-1);
  }

  .phone-wrapper {
    font-size: 2em;
    color: var(--brand-color-1);

    a {
      text-decoration: none;
      color: var(--brand-color-1);
    }
  }
`

export default class Header extends Component {
  render() {
    const { phone } = this.props

    return (
      <HeaderWrapper>
        <Link to="/">
          <img className="logo" src={logo} alt="Franklin Handyman Logo" />
        </Link>

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
