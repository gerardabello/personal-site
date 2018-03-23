import styled from 'styled-components'

import media from './media'

export const SectionTitle = styled.h2`
  font-family: SHKODER;
  font-weight: 400;
  font-size: 48px;
  margin: 0;
  margin-bottom: 10px;
  ${media.mobile`
    font-size: 8vw;
  `};
`
