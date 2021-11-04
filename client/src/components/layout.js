import React from 'react';
import styled from 'styled-components';
import Header from 'components/header.js'

const Main = styled.main`
  background: #eee;
  min-height: calc(100vh - 90px - 4.5rem);
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  padding-top: 3rem;

`

function Layout({children}) {
  return (
    <div>
      <Header/>
      <Main>
        {children}
      </Main>
    </div>
  )

}

export default Layout;