import React from 'react';
import Layout from 'components/layout.js';
import { RowCenter, AutoFitGrid } from 'components/layouts.js';
import BackArrowLink from 'components/back-arrow-link.js';
import VisualizationsLoader from 'components/visualizations-loader.js';


function Visualizations() {
  return (
    <Layout>
      <RowCenter><BackArrowLink to="/"/><h2>All Visualizations</h2></RowCenter>
      <AutoFitGrid fit={220}>
        <VisualizationsLoader limit={35}/>
      </AutoFitGrid>
    </Layout>

  )
}

export default Visualizations;