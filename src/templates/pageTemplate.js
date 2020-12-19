import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function Template({ data }) {
    const {
        markdownRemark: { frontmatter, html },
    } = data;

    return (
        <Layout>
            <SEO title={frontmatter.title} />
            <h1 className='page-title'>{frontmatter.title}</h1>
            <div
                className='page-content'
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </Layout>
    );
}

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                slug
                title
            }
        }
    }
`;
