import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import ContactInformation from '../ContactInformation/ContactInformation'

const MainWrapper = styled.main`
  background: #fff;
  color: var(--brand-color-1);

  .hero {
    position: relative;
  }

  .gatsby-image-wrapper {
    height: 450px;

    @media (min-width: 1180px) {
      height: 500px;
    }

    @media (min-width: 1460px) {
      height: 550px;
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #000;
      opacity: 0.6;
      z-index: 2;
    }
  }

  .title-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    z-index: 10;
    text-shadow: 0 0 20px #000;
    text-align: center;
    letter-spacing: 1px;
    max-width: 650px;

    @media (min-width: 1460px) {
      max-width: 800px;

      span {
        font-size: 1.25em;
      }
    }
  }
`

const MainInnerWrapper = styled.div`
  color: var(--brand-color-1);
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
  }
`

export default class Main extends Component {
  render() {
    const { children, headerImage, phone, email } = this.props

    return (
      <MainWrapper>
        <div className="hero">
          <Img
            style={{
              width: '100%',
              overflow: 'hidden',
              position: 'relative',
              zIndex: '1',
            }}
            fluid={headerImage}
          />
          <div className="title-wrapper">
            <h1>Franklin Handyman Services</h1>
            <span>
              Results-oriented and hands-on handyman services professional with
              over 30 years of experience across all facets of residential and
              commercial building and repairs.
            </span>
          </div>
        </div>
        <MainInnerWrapper>
          {children}
          <h2>For more information and estimates</h2>
          <ContactInformation phone={phone} email={email} />
        </MainInnerWrapper>
      </MainWrapper>
    )
  }
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
  headerImage: PropTypes.object.isRequired,
  phone: PropTypes.shape({
    number: PropTypes.string.isRequired,
  }).isRequired,
  email: PropTypes.string.isRequired,
}
