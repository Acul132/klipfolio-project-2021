import React from 'react';
import Layout from 'components/layout.js';
import { RowCenter, AutoFitGrid } from 'components/layouts.js';
import BackArrowLink from 'components/back-arrow-link.js';
import ServicesLoader from 'components/services-loader.js';

function Services() {
  return (
    <Layout>
      <RowCenter><BackArrowLink to={"/"}/><h2>All Services</h2></RowCenter>
      <AutoFitGrid fit={110}>
        <ServicesLoader limit={35}/>
      </AutoFitGrid>
    </Layout>

  )
}

export default Services;