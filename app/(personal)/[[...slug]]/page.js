import Animation from '@/components/protfolio/Animation'
import Home from '@/components/protfolio/Home'
import Terms from '@/components/protfolio/Terms'
import {client} from '@/sanity/lib/client'
import {sanityFetch} from '@/sanity/lib/live'
import {homePageQuery, pagesBySlugQuery} from '@/sanity/lib/queries'

export default async function page({params}) {
  const slug = (await params).slug?.join('/')

  if (!slug) {
    const {data} = await sanityFetch({query: homePageQuery})
    return (
      <Animation>
        <Home data={data} />
      </Animation>
    )
  }

  const {data} = await sanityFetch({query: pagesBySlugQuery, params: {slug}})
  if (data) {
    return (
      <Animation>
        <Terms data={data} />
      </Animation>
    )
  }

  return (
    <h1
      style={{
        height: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '8rem',
      }}
    >
      Not Found: {slug}
    </h1>
  )
}
