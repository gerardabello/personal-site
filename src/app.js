import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'

import Projects from './projects'
import Contact from './contact'
import { SectionTitle } from './common'
import media from './media'
import CanvasDraw from './canvas'
import SocialIcons from './social-icons'

import ShkoderLight from '../assets/fonts/Shkoder 1989 Light.otf'
import SourceSansProRegular from '../assets/fonts/SourceSansPro-Regular.otf.woff2'
import SourceSansProBold from '../assets/fonts/SourceSansPro-Bold.otf.woff2'

import profilePic from '../assets/imgs/profile2.jpg'

injectGlobal`
  @font-face {
    font-family: Source Sans Pro;
    src: url(${SourceSansProRegular});
    font-weight:400;
  }

  @font-face {
    font-family: Source Sans Pro;
    src: url(${SourceSansProBold});
    font-weight:600;
  }

  @font-face {
    font-family: SHKODER;
    src: url(${ShkoderLight});
    font-weight:200;
  }

  body {
    overflow: hidden;
    ${media.mobile`
      overflow-y: auto;
    `}
  }
`

const Root = styled.div`
  font-family: 'Source Sans Pro', sans-serif;

  background-color: #ffffff;

  color: #3a3e3d;

  display: grid;
  grid-template-columns: 206px 1fr;
  grid-template-rows: auto;

  ${media.mobile`
    grid-template-columns: 1fr;
    grid-template-rows: 50vw auto;
  `} * {
    box-sizing: border-box;
  }
`

const Paragraph = styled.p`
  /* Contrary to popular: */
  font-family: 'Source Sans Pro', serif;
  font-weight: 400;
  color: #676d6c;
  font-size: 16px;
  line-height: 22px;
  text-align: justify;

  a {
    color: #4ab9a3;
    font-weight: 600;
    text-decoration: underline;
  }

  strong {
    font-weight: 600;
    color: #587dc5;
  }
`

const TitleWrapper = styled.div`
  font-family: SHKODER;
  font-weight: 200;
  background-color: #f6f6f6;
  padding: 20px;
  height: 100vh;
  ${media.mobile`
    height: 50vw;
    padding: 0;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;
    box-shadow: inset rgba(0, 0, 0, 0.09) 0px -20px 30px -20px;
  `};
`

const AboutMeContent = styled.div`
  min-width: 275px;
  max-width: 400px;
  flex: 1;

  ${media.tablet`
    max-width: initial;
  `} ${media.mobile`
    min-width: 0px;
  `};
`

const AboutMe = styled.div`
  margin-top: 10px;
  padding: 20px;
  position: relative;
`

const AboutMeWrapper = styled.div`
  display: flex;
`

const NameWrapper = styled.div`
  margin-top: 10px;
  text-align: center;
  ${media.mobile`
    margin-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `};
`

const TitleImgWrapper = styled.div`
  display: none;
  ${media.mobile`
    display: initial;
  `} img {
    width: 100%;
    height: 50vw;
  }
`

const InlineImgWrapper = styled.div`
  display: none;
  ${media.tablet`
    display: initial;
  `} ${media.mobile`
    display: none;
  `}

  float: right;
  padding: 20px;
  padding-right: 0;

  img {
    width: 30vw;
    margin-top: 6px;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.08) 0 15px 30px;
  }
`

const ContentImgWrapper = styled.div`
  ${media.tablet`
    display: none;
  `} ${media.mobile`
    float: right;
  `}

  flex: 1;
  margin-right: -2em;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  img {
    max-width: 100%;
    width: 250px;
    margin-top: -16px;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.08) 0 15px 30px;
  }
`

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`

const Content = styled.div`
  position: relative;
  padding: 20px;
  padding-top: 0;

  overflow-y: auto;
  height: 100vh;
  ${media.mobile`
    overflow-y: hidden;
    height: auto;
    padding: 0;
  `};
`

const Name = styled.h1`
  font-size: 48px;
  font-weight: 300;
  margin: 0;
  ${media.mobile`
    font-size: 11vw;
  `};
`

export default class App extends Component {
  constructor () {
    super()

    this.state = {}
  }

  componentDidMount () {
    CanvasDraw(this.canvas)
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
            <img src={profilePic} />
          </TitleImgWrapper>
        </TitleWrapper>

        <Content>
          <Canvas
            innerRef={comp => {
              this.canvas = comp
            }}
          />
          <AboutMe>
            <SectionTitle>About me</SectionTitle>
            <AboutMeWrapper>
              <AboutMeContent>
                <InlineImgWrapper>
                  <img src={profilePic} />
                </InlineImgWrapper>
                <Paragraph>
                  Hello! I'm Gerard, a developer based in Barcelona currently
                  working at <a href='https://www.typeform.com'>Typeform</a>. I
                  try to be a comprehensive programmer, as no one technology is
                  good for solving all problems. I believe good, modern design
                  and quality code are fundamental to create excellent software
                  products. I like learning new technologies and methods as a
                  way to challenge myself, but it also allows me to face
                  problems I could not solve before.
                </Paragraph>
                <Paragraph>
                  Programming is not only my job, it is also my passion. I like,
                  among other technologies, <strong>Javascript</strong>,{' '}
                  <strong>React</strong>, <strong>WebAudio</strong>,{' '}
                  <strong>Go</strong> and <strong>Deep Learning</strong>.
                </Paragraph>
                <Paragraph>
                  I also like drawing, gaming, hiking and tea.
                </Paragraph>
                <SocialIcons />
              </AboutMeContent>
              <ContentImgWrapper>
                <img src={profilePic} />
              </ContentImgWrapper>
            </AboutMeWrapper>
          </AboutMe>
          <Projects />
          <Contact />
        </Content>
      </Root>
    )
  }
}
