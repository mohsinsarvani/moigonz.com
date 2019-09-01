import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Intro from '../components/intro';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Presentations from '../components/presentations';

const IndexPage = () => (
  <Layout>
    <SEO title="👋 Home 🌴" />
    <Intro />
    <Projects />
    <Contact />
    <Presentations />
  </Layout>
);

export default IndexPage;
