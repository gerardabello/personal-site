import React from 'react'
import styled from 'styled-components'

import Container from './container'
import Menu from './menu'

const Root = styled.div``

const Content = styled.div`
  padding-top: 12vh;
`

const MenuWrapper = styled.div``

export default ({ children }) => (
  <Root>
    <Container>
      <MenuWrapper>
        <Menu />
      </MenuWrapper>
      <Content>{children}</Content>
    </Container>
  </Root>
)
