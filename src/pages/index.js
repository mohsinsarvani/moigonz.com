import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Intro from '../components/intro';
import Projects from '../components/projects';
import Contact from '../components/contact';

const IndexPage = () => (
  <Layout>
    <SEO title="👋 Home 🌴" />
    <Intro />
    <Projects />
    <Contact />
  </Layout>
);

export default IndexPage;
