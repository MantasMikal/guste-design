import React, { useState } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout/Layout'
import { createStore, Provider } from '../store'

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      logo {
        asset {
          url
          _id
        }
      }
    }

    companyInfo: sanityCompanyInfo(_id: { regex: "/(drafts.|)companyInfo/" }) {
      facebookUrl
      twitterUrl
      youtubeUrl
      instagramUrl
    }
  }
`

const LayoutContainer = (props) => {
  const [showNav, setShowNav] = useState(false)
  function handleShowNav() {
    setShowNav(true)
  }
  function handleHideNav() {
    setShowNav(false)
  }
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the studio at http://localhost:3333 and add "Site settings" data'
          )
        }

        const social = data.companyInfo
          ? {
              facebook: data.companyInfo.facebookUrl || null,
              twitter: data.companyInfo.twitterUrl || null,
              youtube: data.companyInfo.youtubeUrl || null,
              instagram: data.companyInfo.instagramUrl || null
            }
          : {}

        const { site } = data

        return (
          <Provider createStore={createStore}>
            <Helmet>
              {/* <link rel="preconnect" href="https://use.typekit.net" /> */}
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="true"
              />
              <link
                href="https://fonts.googleapis.com/css2?family=Lexend:wght@200;300;400;500;600;700;800;900&display=swap"
                rel="stylesheet"
              />
            </Helmet>
            <Layout
              {...props}
              showNav={showNav}
              onHideNav={handleHideNav}
              onShowNav={handleShowNav}
              siteTitle={site && site.title}
              social={social}
              logo={site && site.logo}
            />
          </Provider>
        )
      }}
    />
  )
}

export default LayoutContainer
