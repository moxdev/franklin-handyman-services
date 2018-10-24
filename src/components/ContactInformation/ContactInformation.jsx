import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ContactWrapper = styled.div`
  .phone,
  .email {
    margin: 0.5em 0;
  }

  span {
    display: block;
    margin-bottom: 0.5em;
  }

  a {
    color: inherit;
    text-decoration: none;
    color: var(--brand-color-2);
    font-family: 'HelveticaNeueBold', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default class ContactInformation extends Component {
  render() {
    const { phone, email } = this.props

    return (
      <ContactWrapper className="contact-wrapper">
        <div className="phone">
          <span>Phone:</span>
          <a href={`tel:${phone.number}`}>{phone.number}</a>
        </div>
        <div className="email">
          <span>Email:</span>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </ContactWrapper>
    )
  }
}

ContactInformation.propTypes = {
  phone: PropTypes.shape({
    number: PropTypes.string.isRequired,
  }).isRequired,
  email: PropTypes.string.isRequired,
}
