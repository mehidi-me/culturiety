import {defineQuery} from 'next-sanity'

export const imageFields = /* groq */ `
  _type,
  crop{
  _type,
  right,
  top,
  left,
  bottom
  },
  hotspot{
  _type,
  x,
  y,
  height,
  width,
  },
  asset->{...}
  `

export const metaAttributesQuery = /* groq */ `
_type,
attributeValueString,
attributeType,
attributeKey,
attributeValueImage{
${imageFields}
}
`

export const openGraphQuery = /* groq */ `
_type,
siteName,
url,
description,
title,
image{
${imageFields}
}
`

export const twitterQuery = /* groq */ `
_type,
site,
creator,
cardType,
handle
`

export const seofields = /* groq */ `
_type,
metaTitle,
nofollowAttributes,
seoKeywords,
metaDescription,
openGraph{
${openGraphQuery}
},
twitter{
${twitterQuery}
},
additionalMetaTags[]{
_type,
metaAttributes[]{
${metaAttributesQuery}
}
}
`

export const seo = /* groq */ `seo{
  ${seofields}
  }`

export const homePageQuery = defineQuery(`*[_type == "Home" && _id == "Home"][0]{
  ...,
}`)
export const termsPageQuery = defineQuery(`*[_type == "Terms" && _id == "Terms"][0]{
  ...,
}`)

export const aboutPageQuery = defineQuery(`*[_type == "about"][0]{

      ...,
      backgroundVideo{
      asset->{
        url
      }
    }
    }`)
export const projectsPageQuery = defineQuery(`*[_type == "projectsSection"][0]{

      ...,
      backgroundVideo{
      asset->{
        url
      }
    }
    }`)
export const researchPageQuery = defineQuery(`*[_type == "research"][0]{

      ...,
      backgroundVideo{
      asset->{
        url
      }
    }
    }`)

// portfolioSection{
//   ...,
//   portfolios[]->{
//     ...,

// portfolioCategory->
//   }
// }
// },
// 'portfolioCategory': *[_type == "portfolioCategory"]
// }

export const pagesBySlugQuery = defineQuery(`
  *[_type == "page" && slug.current == $slug][0] {
    ...,
    "slug": slug.current,
  }
`)

export const projectBySlugQuery = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    _type,
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`)

export const settingsQuery = defineQuery(`
  *[_type == "settings"][0]{
    _id,
    _type,
    menuItems[],
    ogImage,
    socialLinks[],
    favicon,
    logo,
    copyright,
    footerlogotext,
    colors,
    adminEmails[],
    ${seo}
  }
`)

export const slugsByTypeQuery = defineQuery(`
  *[_type == $type && defined(slug.current)]{"slug": slug.current}
`)

export type SeoType = {
  _type?: 'seo'
  nofollowAttributes?: boolean
  metaDescription?: string
  additionalMetaTags?: MetaTagType[]
  metaTitle?: string
  seoKeywords?: string[]
  openGraph?: OpenGraphType
  twitter?: Twitter
}

export type MetaTagType = {
  _type: 'metaTag'
  metaAttributes?: MetaAttributeType[]
}

export type MetaAttributeType = {
  _type: 'metaAttribute'
  attributeKey?: string
  attributeType?: string
  attributeValueString?: string
  attributeValueImage?: CustomImageType
}

export type OpenGraphType = {
  _type: 'openGraph'
  title: string
  url?: string
  siteName?: string
  description: string
  image: CustomImageType
}

export type Twitter = {
  _type: 'twitter'
  handle?: string
  creator?: string
  site?: string
  cardType?: string
}

export type CustomImageType = {
  _type: 'customImage'
  asset?: SanityImageAssetType
  crop?: {
    _type: 'SanityImageCrop'
    right: number
    top: number
    left: number
    bottom: number
  }
  hotspot?: {
    x: number
    y: number
    height: number
    _type: 'SanityImageHotspot'
    width?: number
  }
}

export type SanityImageAssetType = {
  _type?: 'SanityImageAsset'
  _id?: string
  path?: string
  url?: string
  metadata?: {
    _type?: 'SanityImageMetadata'
    dimensions?: {
      _type?: 'SanityImageDimensions'
      height?: number
      width?: number
    }
  }
}
