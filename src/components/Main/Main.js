import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import ContactInformation from '../ContactInformation/ContactInformation'

const MainWrapper = styled.main`
  background: #fff;
  color: var(--brand-color-1);
`

const MainInnerWrapper = styled.div`
  color: var(--brand-color-1);
  padding: 2rem 1.875rem;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`

export default class Main extends Component {
  render() {
    const { children, headerImage, phone, email } = this.props

    return (
      <MainWrapper>
        <Img
          style={{
            width: '100%',
            maxHeight: '500px',
            overflow: 'hidden',
          }}
          fluid={headerImage}
        />
        <MainInnerWrapper>
          {children}
          <h2>For more information and estimates:</h2>
          <ContactInformation phone={phone} email={email} />
        </MainInnerWrapper>
      </MainWrapper>
    )
  }
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
  headerImage: PropTypes.object.isRequired,
}
