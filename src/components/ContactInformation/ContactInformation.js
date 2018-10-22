import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ContactWrapper = styled.div`
  a {
    color: inherit;
    display: block;
    text-decoration: none;
  }
`

const ContactInformation = data => (
  <ContactWrapper>
    <a href={`tel:${data.phone.number}`}>Phone: {data.phone.number}</a>
    <a href={`mailto:${data.email}`}>Email: {data.email}</a>
  </ContactWrapper>
)

export default ContactInformation

ContactInformation.propTypes = {
  phone: PropTypes.shape({
    number: PropTypes.string.isRequired,
  }).isRequired,
  email: PropTypes.string.isRequired,
}
