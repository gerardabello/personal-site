import React from 'react'
import styled from 'styled-components'

import Menu from './menu'

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 56px;
`

const Header = () => (
  <Root>
    <Menu />
  </Root>
)

export default Header
