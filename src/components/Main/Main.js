import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../utils/style.utils'

import Hero from '../Hero/Hero'
import Highlights from '../Highlights/Highlights'
import ContactInformation from '../ContactInformation/ContactInformation'

const MainWrapper = styled.main`
  background: #fff;
  color: ${props => props.theme.color_brand_1};
`

const MainInnerWrapper = styled.section`
  color: ${props => props.theme.color_brand_1};
  padding: 2rem 1.875rem;
  max-width: 1100px;
  padding-top: 3em;
  padding-bottom: 3em;
  margin-left: auto;
  margin-right: auto;

  ${media.small`
    text-align: center;
    padding-left: 2.25rem;
    padding-right: 2.25rem;
  `};

  ${media.large`
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  `};

  .contact-wrapper {
    font-size: 1.5em;

    a:hover {
      color: ${props => props.theme.color_brand_1};
    }
  }
`

const Main = data => (
  <MainWrapper>
    <Hero heroImage={data.heroImage} />
    <MainInnerWrapper>
      {data.children}
      <h2>For more information and estimates</h2>
      <ContactInformation phone={data.phone} email={data.email} />
    </MainInnerWrapper>
    <Highlights
      highlightImage1={data.highlightImage1}
      highlightImage2={data.highlightImage2}
      highlightImage3={data.highlightImage3}
    />
  </MainWrapper>
)

export default Main

Main.propTypes = {
  data: PropTypes.shape({
    headerImage: PropTypes.object.isRequired,
    children: PropTypes.array.isRequired,
    phone: PropTypes.shape({
      callout: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
    email: PropTypes.string.isRequired,
    highlightImage1: PropTypes.object.isRequired,
    highlightImage2: PropTypes.object.isRequired,
    highlightImage3: PropTypes.object.isRequired,
  }),
}
