import styled from 'styled-components';
import {ReactComponent as DataSourceIcon} from 'assets/data-source-icon.svg'

const StyledDataCard = styled.div`
  background: white;
  display: flex;
  position: relative;
  height: 6rem;
  padding: 0.75rem;
  border-radius: 0.25rem;
  box-shadow: 4px 4px 16px rgba(0,0,0,0.20);
  width: 200px;
  margin: 0.5rem;

  
  div {
    font-size: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.5rem;
  }

  svg {
    height: 4rem;
    width: 4rem;
    fill: #00000011;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`


const DataCard = ({ title }) => {

  return (
    <StyledDataCard>
      <div>{title}</div>
      <DataSourceIcon/>
    </StyledDataCard>
  )

}

export default DataCard