import React, { Component } from 'react'
import styled from 'styled-components'

import { SectionTitle } from './common'

const Root = styled.div`
  margin-top: 20px;
  padding: 20px;
  max-width: 700px;
  position: relative;
`

const PopupButton = styled.button`
  background-color: #86d2c0;
  color: white;
  width: 100%;
  max-width: 350px;
  outline: none;
  border: none;
  height: 54px;
  font-size: 38px;
  font-family: 'SHKODER', sans-serif;
  border-radius: 3px;
  margin-top: 20px;
  cursor: pointer;
  line-height: 1.666;

  transition: all 0.3s ease;
  box-shadow: rgba(0, 0, 0, 0.2) 0 0px 0px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: rgba(0, 0, 0, 0.2) 0 4px 8px;
    background-color: #84a4e3;
  }
`

export default class Contact extends Component {
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
        <PopupButton onClick={this.openPopup}>Leave a message</PopupButton>
      </Root>
    )
  }
}
