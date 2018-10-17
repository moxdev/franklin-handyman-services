import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MainWrapper = styled.main`
  background: #fff;
  color: var(--brand-color-1);
`

const MainInnerWrapper = styled.div`
  color: var(--brand-color-1);
  padding: 2rem 1.875rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`

export default class Main extends Component {
  render() {
    const { children } = this.props

    return (
      <MainWrapper>
        <MainInnerWrapper>{children}</MainInnerWrapper>
      </MainWrapper>
    )
  }
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}
