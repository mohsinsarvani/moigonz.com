import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Grid from '../components/grid';
import Intro from '../components/intro';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid>
      <Intro />
    </Grid>
  </Layout>
);

export default IndexPage;
