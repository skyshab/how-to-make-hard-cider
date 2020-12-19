import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function Template({ data }) {
    const {
        markdownRemark: { html },
    } = data;

    return (
        <Layout>
            <SEO title={'Home'} />
            <div
                className='page-content'
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </Layout>
    );
}

export const pageQuery = graphql`
    query {
        markdownRemark(frontmatter: { slug: { eq: "/" } }) {
            html
        }
    }
`;
