import styled from 'styled-components'
import Button from "components/button" 

const StyledContainer = styled.div`
  position: absolute;
  top: calc(100% + 0.25rem);
  background-color: white;
  width: calc(100% - 1rem);
  padding: 0 0.5rem;
  border: #ccc 1px solid;
  box-sizing: content-box;
  left: 0%;
  border-radius: 4px;
  max-height: 20rem;
  overflow-y: scroll;
`
const ButtonLayout = styled.div`
  display: flex;
  margin: 0 -0.25rem;
  button {
    margin: 0 0.25rem;
  }
`

const StyledRow = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: #ccc 1px solid;

  :last-child {
    border-bottom: none;
  }
`

const StyledTitle = styled.div`
  flex: 1;
  text-transform: capitalize;
`
const StyledCategory = styled.div`
  color: #777;
  margin-right: 0.5rem;
`

const HeaderSearchResults = ({results = [], activeFilters = [], filter = () => {}}) => {
  return (
    <StyledContainer>
      <StyledRow>
          <ButtonLayout>
            <Button onClick={() => {filter("Visualization")}} style={{background: activeFilters.includes("Visualization") && "#B0B8FC"}}>Visualizations</Button>
            <Button onClick={() => {filter("Service")}} style={{background: activeFilters.includes("Service") && "#B0B8FC"}}>Service</Button>
            <Button>Role</Button>
            <Button>Industry</Button>
            <Button>Difficulty level</Button>
          </ButtonLayout>
      </StyledRow>
      {results.map(({title, category}, index) => (
        <StyledRow key={`search-${title}-${index}`}>
          <StyledTitle>{title}</StyledTitle>
          <StyledCategory>{category}</StyledCategory>
        </StyledRow> 
      ))}
    </StyledContainer>
  )
}

export default HeaderSearchResults