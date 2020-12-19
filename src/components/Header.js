import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Header = ({ siteTitle }) => {
    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "cider-logo-600.png" }) {
                childImageSharp {
                    fixed(width: 420) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return (
        <header
            className='bg-cover'
            style={{ backgroundImage: 'url(/cider-banner-main-long.jpg)' }}
        >
            <div className='container py-4'>
                <Link
                    className='text-white hover:no-underline focus:no-underline'
                    to='/'
                >
                    <Img
                        fixed={data.logo.childImageSharp.fixed}
                        alt={siteTitle}
                    />
                </Link>
            </div>
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
