import styled from 'styled-components';
import {Link} from 'react-router-dom';


const StyledButton = styled(Link)`
  border: rgb(75, 87, 197) 1px solid;
  color: rgb(75, 87, 197);
  border-radius: 3px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  transition: all 0.1s ease;
  background: white;
  align-self: flex-end;
  text-decoration: none;
  font-size: 0.9rem;

  :hover {
    background-color: rgb(75, 87, 197, 0.1);
  }

  :active {
    background-color: rgb(75, 87, 197, 0.2);
  }
`



const Button = ({to, children, ...rest}) => {
  return (
    to ? <StyledButton to={to} {...rest}>{children}</StyledButton> : <StyledButton {...rest} as={"button"}>{children}</StyledButton>
  )
}

export default Button