import styled from "styled-components"


export const RowCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StyledAutoFitGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${(props) => props.fit}px, 1fr));
  grid-gap: 1rem;
`

export const AutoFitGrid = ({fit, children}) => (
  <StyledAutoFitGrid fit={fit}>{children}</StyledAutoFitGrid>
)