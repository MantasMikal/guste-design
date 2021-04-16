import { request } from 'graphql-request'
import absoluteUrl from './absolute-url-determiner'
import { generatePageError } from 'next-with-error'

const retrieveData = async (context, query, vars) => {
  let data = null
  // If we are server side rendering, no point in going over HTTP, go directly to the graphql schema
  if (context.query.graphqlManager) {
    const response = await context.query.graphqlManager.query(query, vars)
    if (response && response.errors && response.errors.length) {
      const error = new Error('Error making graphql request')
      error.errors = response.errors
      throw error
    }
    data = response.data
  } else if (typeof window !== 'undefined') {
    data = await request(`${window.location.origin}/graphql`, query, vars)
  }
  return data
}

const retrieveAndProcessDataForPage = async (context, query, page) => {
  const { origin } = absoluteUrl(context.req)
  const vars = { url: `${origin}${context.asPath}`, page }
  const data = await retrieveData(context, query, vars)

  if (!data || !data.resource) {
    return generatePageError(404, { instance: data.instance })
  }
  if (data.resource.__typename === 'Redirect' && window) {
    window.location = data.resource.redirectUrl
  } else {
    data.vars = vars
    return { response: data, vars }
  }
}

export default retrieveAndProcessDataForPage
