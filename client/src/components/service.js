import styled from "styled-components";
import ServiceIcon from "components/service-icon";

const StyledServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.5rem;
  justify-content: center;
  span {
    text-transform: capitalize;
    font-size: 0.75rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
  }

`

const StyledService = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #fff;
  padding: 1rem;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
  transition: all 200ms ease;
  cursor: pointer;
  margin: auto;

  svg {
    width: ${props => props.width || "3rem"};
    height: ${props => props.height || "3rem"};
  }

  :hover {
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.4);
  }

  :active {
    transform: translateY(3px);
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.4);
  }

`

const Service = ({name, onClick}) => {
  return (
    <StyledServiceContainer>
      <span>{name.split("-").join(" ")}</span>
      <StyledService onClick={onClick}>
        <ServiceIcon name={name} />
      </StyledService>
    </StyledServiceContainer>
  )
}

export default Service;