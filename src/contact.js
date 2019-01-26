import React, { Component } from 'react'
import styled from 'styled-components'

import Layout from './layout'

const Root = styled.div``

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const ContactButton = styled.button`
  border: none;
  border-bottom: 4px solid ${p => p.theme.text};
  padding: 16px 24px;
  margin-top: 20vh;
  color: ${props => props.theme.text};
  font-weight: 600;
  font-size: 32px;
  line-height: 32px;
  background: transparent;
  outline: none;
  font-family: 'Integral CF';
  cursor: pointer;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (max-width: 450px) {
    padding: 12px 20px;
    font-size: 24px;
    line-height: 24px;
  }
`

export default class About extends Component {
  openPopup () {
    import(/* webpackChunkName: "embed" */ '@typeform/embed')
      .then(({ makePopup }) => {
        makePopup('https://gerardabello.typeform.com/to/ITG3fr', {
          mode: 'drawer_right',
          autoOpen: true,
          autoClose: 2000
        })
      })
      .catch(error => alert('Could not show contact form'))
  }

  render () {
    return (
      <Root>
        <Layout title='Contact'>
          <Content>
            <ContactButton onClick={this.openPopup}>
              Leave a message
            </ContactButton>
          </Content>
        </Layout>
      </Root>
    )
  }
}
