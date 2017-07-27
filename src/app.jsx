import React, { Component } from 'react'
import styled, { injectGlobal, css } from 'styled-components'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  @import url('https://fonts.googleapis.com/css?family=Zilla+Slab:400,500,600,700');
`

const sizes = {
  tablet: 800,
  mobile: 630
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

const Root = styled.div`
  font-family: 'Montserrat', sans-serif;

  background-color: #FFFFFF;

  color: #3A3E3D;

  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto;

  ${media.mobile`
    grid-template-columns: 1fr;
    grid-template-rows: 50vw auto;
  `}

  * {
    box-sizing: border-box;
  }
`

const Paragraph = styled.p`
  font-family: 'Zilla Slab', serif;
  color: #7E8685;
  font-size: 16px;
  line-height: 20px;
  text-align: justify;
`

const SectionTitle = styled.h2`
  font-size: 48px;
  margin: 0;
`

const TitleWrapper = styled.div`
  background-color: #F7F9F9;
  padding: 1em;
  height: 100vh;
  box-shadow: inset rgba(0, 0, 0, 0.09) -20px 0 30px -20px;
  ${media.mobile`
    height: 50vw;
    padding: 0;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;
    box-shadow: inset rgba(0, 0, 0, 0.09) 0px -20px 30px -20px;
  `}
`

const AboutMe = styled.div`
  padding: 1em;
  min-width: 275px;
  ${media.mobile`
    min-width: 0px;
  `}
`

const NameWrapper = styled.div`
  ${media.mobile`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`

const TitleImgWrapper = styled.div`
  display: none;
  ${media.mobile`
    display: initial;
  `}
  img{
    width: 100%;
    height: 50vw;
  }
`

const ContentImgWrapper = styled.div`
  ${media.tablet`
    display: none;
  `}

  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  img {
    max-width: 100%;
    width: 250px;
    margin-top: 80px;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.08) 0 15px 30px;
  }
`

const InlineImgWrapper = styled.div`
  display: none;
  ${media.tablet`
    display: initial;
  `}

  ${media.mobile`
    display: none;
  `}

  padding: 1em;
  float: right;
  margin-top: 6px;


  img {
    width: 210px;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.08) 0 15px 30px;
  }
`

const Content = styled.div`
  padding: 1em;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: auto;

  ${media.tablet`
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  `}
`

const Name = styled.h1`
  font-size: 48px;
  margin: 0;
  ${media.mobile`
    font-size: 11vw;
  `}
`

export default class App extends Component {
  constructor () {
    super()

    this.state = {}
  }

  render () {
    return (
      <Root>
        <TitleWrapper>
          <NameWrapper>
            <div>
              <Name>Gerard</Name>
              <Name>Abelló</Name>
              <Name>Serras</Name>
            </div>
          </NameWrapper>

          <TitleImgWrapper>
            <img src='/assets/imgs/profile2.jpg' />
          </TitleImgWrapper>
        </TitleWrapper>

        <Content>
          <AboutMe>
            <SectionTitle>About me</SectionTitle>
            <InlineImgWrapper>
              <img src='/assets/imgs/profile2.jpg' />
            </InlineImgWrapper>
            <Paragraph>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It
              has roots in a piece of classical Latin literature from 45 BC,
              making
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure
              Latin words, consectetur, from a Lorem Ipsum passage, and going
              through the cites of the word in classical literature, discovered
              the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
              and
              Evil) by Cicero, written in 45 BC. This book is a treatise on the
              theory of ethics, very popular during the Renaissance. The first
              line
              of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
              in
              section 1.10.32.
            </Paragraph>
            <Paragraph>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </Paragraph>
          </AboutMe>
          <ContentImgWrapper>
            <img src='/assets/imgs/profile2.jpg' />
          </ContentImgWrapper>
        </Content>
      </Root>
    )
  }
}
