import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const detailsQuery = graphql`
  query SEOQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
      metaImage {
        asset {
          url
        }
      }
    }
  }
`

function SEO({ description, lang, meta, keySentence, title, image }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        if (!data.site) {
          return
        }
        const metaDescription = description || data.site.description
        const metaImage = image ? image : data.site.metaImage
        const metaKeywords =
          keySentence ||
          (data.site.keywords && data.site.keywords.length
            ? data.site.keywords.join(', ')
            : null)

        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={
              title === data.site.title ? '%s' : `%s | ${data.site.title}`
            }
            meta={[
              {
                name: 'description',
                content: metaDescription
              },
              {
                property: 'og:title',
                content: title
              },
              {
                property: 'og:description',
                content: metaDescription
              },
              {
                property: 'og:type',
                content: 'website'
              },
              {
                name: 'twitter:card',
                content: metaDescription
              },
              {
                name: 'twitter:title',
                content: title
              },
              {
                name: 'twitter:description',
                content: metaDescription
              }
            ]
              .concat(
                metaImage
                  ? [
                      {
                        property: 'og:image',
                        content: metaImage
                      },
                      {
                        name: 'twitter:card',
                        content: metaImage
                      }
                    ]
                  : [
                      {
                        name: 'twitter:card',
                        content: metaDescription
                      }
                    ]
              )
              .concat(
                metaKeywords
                  ? {
                      name: 'keywords',
                      content: metaKeywords
                    }
                  : {}
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: []
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
}

export default SEO
