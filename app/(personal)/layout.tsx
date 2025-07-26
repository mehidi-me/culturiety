import '@/styles/index.css'
import {generateMetadataC} from '@/components/CustomNextSeo'
import {CustomPortableText} from '@/components/CustomPortableText'
import Footer from '@/components/protfolio/Footer'
import Header from '@/components/protfolio/Header'
// import Footer from '@/components/Footer'
// import {Navbar} from '@/components/Navbar'
import IntroTemplate from '@/intro-template'
import {client} from '@/sanity/lib/client'
import {sanityFetch, SanityLive} from '@/sanity/lib/live'
import {settingsQuery} from '@/sanity/lib/queries'
// import {homePageQuery, settingsQuery} from '@/sanity/lib/queries'
import {urlForOpenGraphImage} from '@/sanity/lib/utils'
import type {Metadata, Viewport} from 'next'
import {toPlainText, VisualEditing, type PortableTextBlock} from 'next-sanity'
import {draftMode} from 'next/headers'
import {Suspense} from 'react'
import {Toaster} from 'react-hot-toast'
//import {Toaster} from 'sonner'
import {handleError} from './client-functions'
import {DraftModeToast} from './DraftModeToast'

export async function generateMetadata(): Promise<Metadata> {
  const [{data: settings}] = await Promise.all([sanityFetch({query: settingsQuery, stega: false})])

  const ogImage = urlForOpenGraphImage(settings?.ogImage)
  // return {
  //   title: homePage?.home?.heroSection?.title
  //     ? {
  //         template: `%s | ${homePage?.home?.heroSection?.title}`,
  //         default: homePage?.home?.heroSection?.title || 'Personal website',
  //       }
  //     : undefined,
  //   description: homePage?.home?.heroSection?.overview ? homePage.home.heroSection.overview : undefined,
  //   openGraph: {
  //     images: ogImage ? [ogImage] : [],
  //   },
  // }
  return generateMetadataC({settings: settings, slug: '/'})
}

export const viewport: Viewport = {
  themeColor: '#000',
}

export default async function IndexRoute({children}: {children: React.ReactNode}) {
  const {data} = await sanityFetch({query: settingsQuery})

  const themeVars = {
    '--bg': data?.colors?.background?.hex || '#ffffff',
    '--primary': data?.colors?.primary?.hex || '#007bff',
    '--secoundary': data?.colors?.secoundary?.hex || '#6C5838',
    '--primary-text': data?.colors?.text?.hex || '#000000',
  }

  // Convert to inline CSS string
  const cssVars = Object.entries(themeVars)
    .map(([key, value]) => `${key}: ${value};`)
    .join(' ')
  // const query = `*[_type == "Footer"][0]{
  // ...
  // }`
  // const footerData = await client.fetch(query)
  return (
    <>
      {/* <head>
    <script src="https://unpkg.com/@phosphor-icons/web@2.1.1"></script>
    </head> */}
      {/* <Navbar data={data} /> */}
      <head>
        <style>{`:root { ${cssVars} }`}</style>
      </head>
      <Header data={data} />
      {children}
      <Footer data={data} />
      <Toaster position="top-center" />
      {/* <Footer data={data || {}} /> */}
      {/* <div className="flex min-h-screen flex-col bg-white text-black">
        <Navbar data={data} />
        <div className="mt-20 flex-grow px-4 md:px-16 lg:px-32">{children}</div>
        <footer className="bottom-0 w-full bg-white py-12 text-center md:py-20">
          {data?.footer && (
            <CustomPortableText
              id={data._id}
              type={data._type}
              path={['footer']}
              paragraphClasses="text-md md:text-xl"
              value={data.footer as unknown as PortableTextBlock[]}
            />
          )}
        </footer>
        <Suspense>
          <IntroTemplate />
        </Suspense>
      </div> */}
      {/* <Toaster style={{padding: 0}} /> */}
      <SanityLive onError={handleError} />
      {(await draftMode()).isEnabled && (
        <>
          <DraftModeToast />
          <VisualEditing />
        </>
      )}
    </>
  )
}
