import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ContactWrapper = styled.div`
  div {
    margin: 0.5em 0;
  }

  span {
    display: block;
    margin-bottom: 0.5em;
    font-family: 'HelveticaNeueBold', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
    color: var(--brand-color-2);
  }

  .email a {
    text-decoration: underline;
  }
`

const ContactInformation = data => (
  <ContactWrapper className="contact-wrapper">
    <div className="phone">
      <span>Phone:</span>
      <a href={`tel:${data.phone.number}`}>{data.phone.number}</a>
    </div>
    <div className="email">
      <span>Email:</span>
      <a href={`mailto:${data.email}`}>{data.email}</a>
    </div>
  </ContactWrapper>
)

export default ContactInformation

ContactInformation.propTypes = {
  phone: PropTypes.shape({
    number: PropTypes.string.isRequired,
  }).isRequired,
  email: PropTypes.string.isRequired,
}
