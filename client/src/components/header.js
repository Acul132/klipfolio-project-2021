import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as ExitIcon } from "assets/exit-icon.svg"
import { ReactComponent as KlipfolioLogo } from "assets/klipfolio-logo-black-red.svg"
import HeaderSearch from "components/header-search"

const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  height: 90px;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 200px 1fr 200px;
  background: white;
  z-index: 100;
`

const CloseIcon = styled(ExitIcon)`
  transform: scale(1);
  fill: #686868;
  margin-right: 1rem;
  margin-top: 1rem;
  justify-self:end;
  align-self: start;
  cursor: pointer;
`

const Header = () => {

  return (
    <StyledHeader>
      <Link to="/"><KlipfolioLogo id={"klip-icon"} width={200}/></Link>
      <HeaderSearch/>
      <CloseIcon/>
    </StyledHeader>
  )

}

export default Header