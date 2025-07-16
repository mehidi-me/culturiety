import Home from '@/components/protfolio/Home'
import {client} from '@/sanity/lib/client'
import {sanityFetch} from '@/sanity/lib/live'
import {homePageQuery, termsPageQuery} from '@/sanity/lib/queries'
import Animation from '@/components/protfolio/Animation'
import Terms from '@/components/protfolio/Terms'
export default async function Page() {
 
  // const data = await client.fetch(query)
  const {data} = await sanityFetch({query: termsPageQuery})
  return (
    <Animation>
      <Terms data={data} />
    </Animation>
  )
}
