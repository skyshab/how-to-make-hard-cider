/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;
    const pageTemplate = require.resolve(`./src/templates/pageTemplate.js`);

    const result = await graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    `);

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const slug = node.frontmatter.slug;

        if ('/' === slug) return;

        createPage({
            path: slug,
            component: pageTemplate,
            context: {
                // additional data can be passed via context
                slug: slug,
            },
        });
    });
};
