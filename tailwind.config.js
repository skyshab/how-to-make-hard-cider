// See https://tailwindcss.com/docs/configuration for details
module.exports = {
    purge: ['./gatsby-ssr.js', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            sans: [
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Roboto',
                'Oxygen',
                'Ubuntu',
                'Cantarell',
                'Fira Sans',
                'Droid Sans',
                'Helvetica Neue',
                'sans-serif',
            ],
        },
        extend: {
            colors: {
                primary: '#850f10',
                // Overwrite default grays with a neutral shade (defaults are blue-ish)
                gray: {
                    '100': '#f5f5f5',
                    '200': '#eeeeee',
                    '300': '#e0e0e0',
                    '400': '#bdbdbd',
                    '500': '#9e9e9e',
                    '600': '#757575',
                    '700': '#616161',
                    '800': '#424242',
                    '900': '#212121',
                },
            },
            // Utilities to lock an image or video to a fixed aspect ratio
            // (https://github.com/tailwindcss/designing-with-tailwindcss/tree/master/02-designing-an-image-card/06-locking-images-to-a-fixed-aspect-ratio)
            spacing: {
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '9/16': '56.25%',
                '10/16': '62.5%',
            },
        },
    },
    variants: {
        // In case you need to reset the margin on the last element "mr-2 last:mr-0"
        margin: ['responsive', 'last'],
    },
    // https://github.com/tailwindcss/custom-forms
    plugins: [
        require('@tailwindcss/custom-forms'),
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    width: '90vw',
                    maxWidth: '1024px',
                    margin: '0 auto',
                },
            });
        },
    ],
    corePlugins: {
        whitespace: true,
        container: false,
    },
};
