import styled from 'styled-components'

import media from './media'

export const SectionTitle = styled.h2`
  font-size: 48px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 10px;
  ${media.mobile`
    font-size: 8vw;
  `}
`
