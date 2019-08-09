import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Intro from '../components/intro';
import Projects from '../components/projects';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Projects />
  </Layout>
);

export default IndexPage;
