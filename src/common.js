import styled from 'styled-components'

import media from './media'

export const Img = styled.img`
  mix-blend-mode: ${props => props.theme.imgMixBlendMode};
`

export const SectionTitle = styled.h2`
  font-family: SHKODER;
  font-weight: 400;
  font-size: 48px;
  color: ${props => props.theme.titleColor};
  margin: 0;
  margin-bottom: 10px;
  ${media.mobile`
    font-size: 8vw;
  `};
`
