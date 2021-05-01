export function cn(...args) {
  return args.filter(Boolean).join(' ')
}

export function mapEdgesToNodes(data) {
  if (!data.edges) return []
  return data.edges.map((edge) => edge.node)
}

export function filterOutDocsWithoutSlugs({ slug }) {
  return (slug || {}).current
}

export function getBlogUrl(slug) {
  return `/blog/${slug.current || slug}/`
}

export function getProjectUrl(slug) {
  return `/projects/${slug.current || slug}/`
}

export function getGalleryUrl(slug) {
  return `/gallery/${slug.current || slug}/`
}

export function getProductUrl(slug) {
  return `/store/${slug.current || slug}/`
}

export function buildImageObj(source) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id }
  }

  if (source.crop) imageObj.crop = source.crop
  if (source.hotspot) imageObj.hotspot = source.hotspot

  return imageObj
}

export function formatDate(date) {
  const d = new Date(date)
  const dtf = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  })
  const [{ value: mo }, , { value: da }, , { value: ye }] = dtf.formatToParts(d)
  return (date = `${da} ${mo} ${ye}`)
}

export const getAllPostCategories = (items) => {
  let categories = []
  for(let i = 0; i < items.length; i++) {
    for(let j = 0; j < items[i].categories.length; j++) {
      let category = items[i].categories[j].title
      if(category && !categories.includes(category)) categories.push(category)
    }
  }

  return categories
}