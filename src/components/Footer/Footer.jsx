import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ContactInformation from '../ContactInformation/ContactInformation'

const FooterWrapper = styled.footer`
  background: var(--brand-color-1);
  color: #fff;
  padding: 1rem 1.875rem;

  @media (min-width: 760px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-left: 2.25rem;
    padding-right: 2.25rem;
  }

  @media (min-width: 1180px) {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }

  .contact-wrapper {
    a {
      color: #fff;
    }

    @media (min-width: 780px) {
      display: flex;
      justify-content: center;

      div {
        margin-top: 0;
      }

      span {
        margin-bottom: 0;
      }

      .phone {
        margin-right: 1.5em;
      }
    }
  }

  .copyright {
    margin-top: 2em;
    margin-bottom: 0;
    font-size: 0.8em;

    @media (min-width: 760px) {
      flex: 0 0 100%;
      text-align: center;
    }
  }

  @media (min-width: 760px) {
    h2 {
      max-width: 400px;
    }
  }
`

export default class Footer extends Component {
  render() {
    const { phone, email, copyright } = this.props

    return (
      <FooterWrapper>
        <h2>Franklin Handyman Services</h2>
        <ContactInformation phone={phone} email={email} />
        <p className="copyright">
          <em>{copyright}</em>
        </p>
      </FooterWrapper>
    )
  }
}

Footer.propTypes = {
  phone: PropTypes.shape({
    callout: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  email: PropTypes.string.isRequired,
  copyright: PropTypes.string.isRequired,
}
