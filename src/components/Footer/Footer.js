import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import logo from '../../images/fhs-logo.svg'

const FooterWrapper = styled.footer`
  background: var(--brand-color-1);
  color: #fff;
  padding: 1rem 1.875rem;
`

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <div className="footer-wrapper">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </FooterWrapper>
    )
  }
}
