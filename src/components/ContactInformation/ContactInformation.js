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
    <a href={`tel:${data.phone.number}`}>{data.phone.number}</a>
    <a href={`mailto:${data.email}`}>{data.email}</a>
  </ContactWrapper>
)

export default ContactInformation

// Footer.propTypes = {
//   phone: PropTypes.shape({
//     number: PropTypes.string.isRequired,
//   }).isRequired,
//   email: PropTypes.string.isRequired,
// }
