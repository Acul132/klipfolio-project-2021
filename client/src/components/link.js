import {Link as ReactLink} from 'react-router-dom';
import styled from 'styled-components'

const Link = styled(ReactLink)`

  display: flex;
  align-items: center;

  transition: all 0.2s ease;
  :hover {
    fill: #00a0d2;
    color: #00a0d2;
  }
`

export default Link