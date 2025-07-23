import Home from '@/components/protfolio/Home'
import {client} from '@/sanity/lib/client'
import {sanityFetch} from '@/sanity/lib/live'
import {homePageQuery} from '@/sanity/lib/queries'
import Animation from '@/components/protfolio/Animation'
export default async function Page() {
 
  // const data = await client.fetch(query)
  const {data} = await sanityFetch({query: homePageQuery})
  return (
    <Animation>
      <Home data={data} />
    </Animation>
  )
}
