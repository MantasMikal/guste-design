import React, { useState } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout/Layout'
import { createStore, Provider } from '../store'
import { useEffect } from 'react'
import throttle from 'lodash/throttle'
import styles from './MainLayout.module.scss'
import GugisSilhouette from 'Common/GugisSilhouette'

const useSpawnGugisWhenInactive = ({ delay, inactiveTime, max }) => {
  const [isInactive, setIsInactive] = useState(false)
  const [objects, setObjects] = useState([])
  console.log("🚀 ~ file: MainLayout.js ~ line 15 ~ useSpawnGugisWhenInactive ~ objects", objects)

  const COLORS = [
    '#FFE000',
    '#EE724B',
    '#E94A3B',
    '#E694BF',
    '#CD4592',
    '#58B789',
    '#277FC3',
    '#6164AB'
  ]

  // Detect if mouse moved and set isActive to true
  useEffect(() => {

    const handleDelete = () => {
      setObjects([])
    }

    const handleMouseMove = throttle(() => {
      console.log('Mouse moved')
      isInactive && setIsInactive(false)
      handleDelete()
    }, 50)

    const handleTouch = () => {
      isInactive && setIsInactive(false)
      handleDelete()
    }

    const inactiveTimeout = setTimeout(() => {
      console.log('Inactive')
      setIsInactive(true)
    }, inactiveTime)

    const inactiveInterval = setInterval(() => {
      if (isInactive && objects.length < max) {
        const { innerWidth, innerHeight } = window
        const { scrollTop, scrollLeft } = document.body

        const animationDelay = Math.floor(Math.random() * 100)
        const size = Math.floor(Math.random() * (120 - 20 + 1)) + 20


        // Get top and left + scroll position
        const top = Math.floor(Math.random() * (innerHeight - size - 20 + 1)) + 20 + scrollTop
        const left = Math.floor(Math.random() * (innerWidth - size - 20 + 1)) + 20 + scrollLeft

        const color = COLORS[Math.floor(Math.random() * COLORS.length)]
        setObjects([...objects, { left, top, size, color, animationDelay }])
      }
    }, delay)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouch)
    window.addEventListener('scroll', handleDelete)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouch)
      window.removeEventListener('scroll', handleDelete)
      clearTimeout(inactiveTimeout)
      clearInterval(inactiveInterval)
    }
  })

  return { objects }
}

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

    shippingAndReturns: sanityReturnsPage(
      _id: { regex: "/(drafts.|)returnsPage/" }
    ) {
      _rawBody(resolveReferences: { maxDepth: 10 })
      mainImage {
        asset {
          url
          _id
        }
      }
    }
  }
`

const LayoutContainer = (props) => {
  const [showNav, setShowNav] = useState(false)
  const { objects } = useSpawnGugisWhenInactive({
    delay: 1000,
    inactiveTime: 1000 * 60,
    max: 500
  })

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

        const { site, shippingAndReturns } = data || {}

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
              shippingAndReturns={shippingAndReturns}
            />
            {objects.length > 0 && (
              <div className={styles.GugisOverlay}>
                {objects.map((o, i) => {
                  return (
                    <GugisSilhouette
                      className={styles.GugisHead}
                      size={`${o.size}px`}
                      styles={{
                        left: `${o.left}px`,
                        top: `${o.top}px`,
                        animationDelay: `${o.animationDelay}ms`
                      }}
                      fill={o.color}
                      key={i}
                    />
                  )
                })}
              </div>
            )}
          </Provider>
        )
      }}
    />
  )
}

export default LayoutContainer
