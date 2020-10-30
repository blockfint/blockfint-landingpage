import Head from 'next/head'
import { AllStyleProvider } from 'assets/globalStyle'
import React from 'react'
import { ContactDialog } from 'components/ContactDialog'
import { DefaultSeo } from 'next-seo'
import { css } from 'styled-components'
import App from 'next/app'
class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <style>
            {css`
              /* cyrillic-ext */
              @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: local('Montserrat Regular'), local('Montserrat-Regular'),
                  url(https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2)
                    format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
              }
              /* cyrillic */
              @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: local('Montserrat Regular'), local('Montserrat-Regular'),
                  url(https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2)
                    format('woff2');
                unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
              }
              /* vietnamese */
              @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: local('Montserrat Regular'), local('Montserrat-Regular'),
                  url(https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2)
                    format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9,
                  U+20AB;
              }
              /* latin-ext */
              @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: local('Montserrat Regular'), local('Montserrat-Regular'),
                  url(https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2)
                    format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
                  U+A720-A7FF;
              }
              /* latin */
              @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: local('Montserrat Regular'), local('Montserrat-Regular'),
                  url(https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F,
                  U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
              }
              /* cyrillic-ext */
              @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 600;
                font-display: swap;
                src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),
                  url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_bZF3gTD_vx3rCubqg.woff2)
                    format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
              }
              /* cyrillic */
              @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 600;
                font-display: swap;
                src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),
                  url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_bZF3g3D_vx3rCubqg.woff2)
                    format('woff2');
                unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
              }
              /* vietnamese */
              @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 600;
                font-display: swap;
                src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),
                  url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_bZF3gbD_vx3rCubqg.woff2)
                    format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9,
                  U+20AB;
              }
              /* latin-ext */
              @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 600;
                font-display: swap;
                src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),
                  url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_bZF3gfD_vx3rCubqg.woff2)
                    format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
                  U+A720-A7FF;
              }
              /* latin */
              @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 600;
                font-display: swap;
                src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),
                  url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_bZF3gnD_vx3rCs.woff2)
                    format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F,
                  U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
              }
              /* cyrillic-ext */
              @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: local('Montserrat Bold'), local('Montserrat-Bold'),
                  url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3gTD_vx3rCubqg.woff2)
                    format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
              }
              /* cyrillic */
              @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: local('Montserrat Bold'), local('Montserrat-Bold'),
                  url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3g3D_vx3rCubqg.woff2)
                    format('woff2');
                unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
              }
              /* vietnamese */
              @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: local('Montserrat Bold'), local('Montserrat-Bold'),
                  url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3gbD_vx3rCubqg.woff2)
                    format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9,
                  U+20AB;
              }
              /* latin-ext */
              @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: local('Montserrat Bold'), local('Montserrat-Bold'),
                  url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3gfD_vx3rCubqg.woff2)
                    format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
                  U+A720-A7FF;
              }
              /* latin */
              @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: local('Montserrat Bold'), local('Montserrat-Bold'),
                  url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3gnD_vx3rCs.woff2)
                    format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F,
                  U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
              }
            `}
          </style>
        </Head>
        <DefaultSeo
          title="Blockfint"
          titleTemplate="%s | Make Future Innovations Happen Today"
          description="Make Future Innovations Happen Today"
        />
        <AllStyleProvider>
          <ContactDialog>
            <Component {...pageProps} />
          </ContactDialog>
        </AllStyleProvider>
      </>
    )
  }
}

export default MyApp
