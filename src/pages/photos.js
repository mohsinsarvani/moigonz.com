/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Masonry from '../components/masonry';
import PageTitle from '../components/pageTitle';
import Footer from '../components/footer';

const PhotosPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark; // data.markdownRemark holds your post data

  return (
    <>
      <SEO title="📷 Photos" />
      <PageTitle text="📷 Photos" />
      <Masonry edges={edges} />
      <Footer />
    </>
  );
};
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(masonry)/"}},
      sort: { order: DESC, fields: [frontmatter___date] }
      ) {
      edges {
        node {
          frontmatter {
            title
            date
            description
            image
          }
        }
      }
    }
  }
`;

export default PhotosPage;
