import React from 'react';
import styled from 'styled-components';
import Layout from 'components/layout.js';
import Button from 'components/button.js'
import DataSourcesLoader from 'components/data-sources-loader.js';
import ServicesLoader from 'components/services-loader.js'
import VisualizationsLoader from 'components/visualizations-loader.js';

const StyledRow = styled.div`
  display: flex;
  margin-bottom: 2rem;
`

function Home() {


  return (
    <Layout>
      <h2>Recommended Visualizations</h2>
      <StyledRow>
        <VisualizationsLoader/>
      </StyledRow>
      <Button to={"/visualizations"}>More Visualizations</Button>

      <h2>Recommended services</h2>
      <StyledRow>
        <ServicesLoader/>
      </StyledRow>
      <Button to={"/services"}>More services</Button>
      
      <h2>Existing Data Sources</h2>
      <StyledRow>
        <DataSourcesLoader/>
      </StyledRow>
      <Button to={"/data-sources"}>More Data Sources</Button>
    </Layout>

  )
}

export default Home;