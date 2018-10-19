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
    const { phone, email } = this.props

    return (
      <FooterWrapper>
        <div className="footer-wrapper">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <a href={`tel:${phone.number}`}>{phone.number}</a>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </FooterWrapper>
    )
  }
}

Footer.propTypes = {
  phone: PropTypes.shape({
    number: PropTypes.string.isRequired,
  }).isRequired,
  email: PropTypes.string.isRequired,
}
