import styled from 'styled-components'
import { ReactComponent as Arrow } from 'assets/up-arrow.svg'
import Link from 'components/link.js'


const StyledArrow = styled(Arrow)`
  transform: rotate(-90deg);
  width: 1.5rem;
  margin-right: 1rem;
`

const BackArrow = ({to}) => (
  <Link to={to}><StyledArrow/></Link>
)

export default BackArrow