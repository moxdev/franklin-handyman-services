import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ContactInformation from '../ContactInformation/ContactInformation'

const MainWrapper = styled.main`
  background: #fff;
  color: ${props => props.theme.color_brand_1};
`

const MainInnerWrapper = styled.div`
  color: ${props => props.theme.color_brand_1};
  padding: 2rem 1.875rem;
  max-width: 1100px;
  padding-top: 3em;
  padding-bottom: 3em;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 760px) {
    text-align: center;
    padding-left: 2.25rem;
    padding-right: 2.25rem;
  }

  @media (min-width: 1180px) {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }

  .contact-wrapper {
    font-size: 1.5em;

    a:hover {
      color: ${props => props.theme.color_brand_1};
    }
  }
`

const Main = data => (
  <MainWrapper>
    <MainInnerWrapper>
      {data.children}
      <h2>For more information and estimates</h2>
      <ContactInformation phone={data.phone} email={data.email} />
    </MainInnerWrapper>
  </MainWrapper>
)

export default Main

Main.propTypes = {
  data: PropTypes.shape({
    children: PropTypes.array.isRequired,
    phone: PropTypes.shape({
      callout: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
    email: PropTypes.string.isRequired,
  }),
}
