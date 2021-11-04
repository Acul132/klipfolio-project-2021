import {ReactComponent as SpinnerIcon} from 'assets/spinner.svg';
import styled, {keyframes} from 'styled-components';


const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Spinner = styled(SpinnerIcon)`
  animation: ${spin} 1s ease infinite;

`

export default Spinner