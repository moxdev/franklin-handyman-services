import React from 'react'
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
    color: ${props => props.theme.color_brand_2};
    font-family: 'HelveticaNeueBold', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
  data: PropTypes.shape({
    phone: PropTypes.shape({
      number: PropTypes.string.isRequired,
    }).isRequired,
    email: PropTypes.string.isRequired,
  }),
}
