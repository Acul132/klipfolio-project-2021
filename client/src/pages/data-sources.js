import React from 'react';
import Layout from 'components/layout.js';
import { RowCenter, AutoFitGrid } from 'components/layouts.js';
import BackArrowLink from 'components/back-arrow-link.js';
import DataSourcesLoader from 'components/data-sources-loader.js';

function DataSources() {
  return (
    <Layout>
      <RowCenter><BackArrowLink to={"/"}/><h2>All Data Sources</h2></RowCenter>
      <AutoFitGrid fit={220}>
        <DataSourcesLoader limit={30} />
      </AutoFitGrid>
    </Layout>

  )
}

export default DataSources;