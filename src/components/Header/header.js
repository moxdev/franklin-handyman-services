import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

import logo from '../../images/fhs-logo.svg'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 1rem 1.875rem;
  border-bottom: 2px solid #6f6259;

  .logo {
    width: 150px;
  }

  h1 {
    color: #54565a;
  }
`

export default class Header extends Component {
  render() {
    const { data } = this.props

    return (
      <HeaderWrapper>
        <img className="logo" src={logo} alt="Franklin Handyman Logo" />

        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          />
          {data.site.siteMetadata.title}
        </h1>
      </HeaderWrapper>
    )
  }
}

Header.propTypes = {
  data: PropTypes.node.isRequired,
}
