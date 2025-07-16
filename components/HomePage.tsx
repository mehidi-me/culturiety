'use client'

import HomeSlider from '@/components/HomeSlider'
import type {HomePageQueryResult} from '@/sanity.types'
import {studioUrl} from '@/sanity/lib/api'
import {urlForImage} from '@/sanity/lib/utils'
import {
  ArrowRight,
  ArrowUpRight,
  FacebookLogo,
  FileText,
  InstagramLogo,
  LinkedinLogo,
  PaperPlaneRight,
  StarFour,
  User,
} from '@phosphor-icons/react/dist/ssr'
import {createDataAttribute, PortableText} from 'next-sanity'
import {useEffect} from 'react'
import {CustomPortableText} from './CustomPortableText'
import Portfolio from './Portfolio'

//import ScrollReveal from 'scrollreveal'

// export interface HomePageProps {
//   data: HomePageQueryResult | null
// }

export function HomePage({data, settingData}) {
  // Default to an empty object to allow previews on non-existent documents
  // const {overview = [], showcaseProjects = [], title = ''} = data ?? {}

  const {
    heroSection,
    aboutSection,
    experienceSection,
    servicesSection,
    keyIdeaSection,
    contactSection,
    portfolioSection,
  } = data.home ?? {}

  const dataAttribute =
    data?._id && data?._type
      ? createDataAttribute({
          baseUrl: studioUrl,
          id: data._id,
          type: data._type,
        })
      : null

  useEffect(() => {
    async function animate() {
      const ScrollReveal = (await import('scrollreveal')).default
      ScrollReveal({
        reset: true,
        distance: '40px',
        duration: 1200,
        delay: 30,
      })

      // Set up ScrollReveal for various elements
      ScrollReveal().reveal('main .content h1', {delay: 10, origin: 'bottom'})
      ScrollReveal().reveal('main .content h2', {delay: 30, origin: 'bottom'})
      ScrollReveal().reveal('main .content .buttons', {
        delay: 50,
        origin: 'bottom',
      })
      ScrollReveal().reveal('main .me', {
        delay: 80,
        origin: 'bottom',
      })
      ScrollReveal().reveal('.text-content h2', {delay: 10, origin: 'bottom'})
      ScrollReveal().reveal('.text-content p', {delay: 30, origin: 'bottom'})
      ScrollReveal().reveal('section .social', {delay: 50, origin: 'bottom'})
      ScrollReveal().reveal('.title p', {delay: 20, origin: 'bottom'})
      ScrollReveal().reveal('.title h2', {delay: 80, origin: 'bottom'})
      ScrollReveal().reveal('.title-2 p', {delay: 20, origin: 'bottom'})
      ScrollReveal().reveal('.title-2 h2', {delay: 80, origin: 'bottom'})
      ScrollReveal().reveal('.tag', {delay: 10, origin: 'bottom'})
      ScrollReveal().reveal('.tag-2', {delay: 10, origin: 'bottom'})
      ScrollReveal().reveal('.card', {delay: 20, origin: 'bottom'})
      ScrollReveal().reveal('.card-2', {delay: 20, origin: 'bottom'})
      ScrollReveal().reveal('.grid-2 .card-3', {delay: 20, origin: 'bottom'})
      ScrollReveal().reveal('.item', {delay: 20, origin: 'bottom'})
      ScrollReveal().reveal('.frame', {
        delay: 10,
        origin: 'bottom',
        distance: '10px',
      })
      ScrollReveal().reveal('.fade', {
        delay: 10,
        origin: 'bottom',
        distance: '10px',
      })
      ScrollReveal().reveal('.video', {
        delay: 10,
        origin: 'bottom',
        distance: '10px',
      })
    }
    animate()
  }, [])

  const formatDate = (isoString: string) => {
    const date = new Date(isoString)
    return date.toLocaleString('en-US', {year: 'numeric', month: 'long'})
  }

  // return (
  //   <div className="space-y-20">
  //     {/* Header */}
  //     {title && (
  //       <Header
  //         id={data?._id || null}
  //         type={data?._type || null}
  //         path={['overview']}
  //         centered
  //         title={title}
  //         description={overview}
  //       />
  //     )}
  //     {/* Showcase projects */}
  //     <div className="mx-auto max-w-[100rem] rounded-md border">
  //       <OptimisticSortOrder id={data?._id} path={'showcaseProjects'}>
  //         {showcaseProjects &&
  //           showcaseProjects.length > 0 &&
  //           showcaseProjects.map((project) => {
  //             const href = resolveHref(project?._type, project?.slug)
  //             if (!href) {
  //               return null
  //             }
  //             return (
  //               <Link
  //                 className="flex flex-col gap-x-5 p-2 transition odd:border-b odd:border-t hover:bg-gray-50/50 xl:flex-row odd:xl:flex-row-reverse"
  //                 key={project._key}
  //                 href={href}
  //                 data-sanity={dataAttribute?.(['showcaseProjects', {_key: project._key}])}
  //               >
  //                 <ProjectListItem project={project as any} />
  //               </Link>
  //             )
  //           })}
  //       </OptimisticSortOrder>
  //     </div>
  //   </div>
  // )
  return (
    <div className="homePage">
      <main id="home">
        <div className="container">
          <div className="content">
            <h1>{heroSection?.title}</h1>
            <h2>{heroSection?.overview}</h2>
            <div className="buttons">
              <a href={heroSection?.button1.link}>
                <button className="empty">
                  <div className="center">
                    {' '}
                    <User />
                    <p>{heroSection?.button1.text}</p> <ArrowRight />
                  </div>
                </button>
              </a>
              <a href={heroSection?.button2.link}>
                <button>
                  <div className="center">
                    {' '}
                    <FileText />
                    <p>{heroSection?.button2.text}</p> <ArrowRight />
                  </div>
                </button>
              </a>
            </div>
          </div>
          <div className="fade">
            <img src={urlForImage(heroSection?.fadeImage)?.url()} alt="" className="me" />
          </div>
        </div>
      </main>
      <section id="about">
        <div className="container">
          <div className="grid-3 adj">
            <div className="text-content">
              <h2>{aboutSection?.about1.title}</h2>
              <p>{aboutSection?.about1.description}</p>
              <div className="social">
                <a href={settingData?.socialLink.facebook}>
                  <FacebookLogo />
                </a>
                <a href={settingData?.socialLink.instagram}>
                  <InstagramLogo />
                </a>
                <a href={settingData?.socialLink.linkedin}>
                  <LinkedinLogo />
                </a>
              </div>
              {/* <i className="ph-thin ph-arrow-up-right overlay" /> */}
              <ArrowUpRight className="overlay" />
            </div>
            <div className="card">
              <div>
                <h3>{aboutSection?.about2.title}</h3>
                <p>{aboutSection?.about2.description}</p>
              </div>
              <div className="frame">
                <img src={urlForImage(aboutSection?.about2.image)?.url()} alt="" />
              </div>
            </div>
            <div className="space-around">
              <a href={aboutSection?.about3?.videoLink} target="_blank" rel="noopener noreferrer" style={{margin:'0 auto'}}>
                <div className="video">
                  <img src={urlForImage(aboutSection?.about3.image)?.url()} alt="" />
                  <ArrowUpRight />
                </div>
              </a>

              <div className="list">
                {aboutSection?.about3.keyPoints.map((keyPoint, index) => (
                  <div className="item" key={index}>
                    <div className="ico">
                      <StarFour />
                    </div>
                    <p>{keyPoint}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="experience">
        <div className="container">
          <div className="title-2">
            <div>
              <div className="tag">{experienceSection?.tagline}</div>
              <h2>{experienceSection?.title}</h2>
            </div>
            <div>
              <p>{experienceSection?.description}</p>
              <button className="empty">
                <div className="center">
                  {' '}
                  <User />
                  <p>{experienceSection?.heading}</p> <ArrowRight />
                </div>
              </button>
            </div>
          </div>
          <div className="list">
            {experienceSection?.experience.map((item, index) => (
              <div className="item card-2" key={index}>
                <div className="tt">
                  <h3>{item.title}</h3>
                  <div className="date">
                    <p>{formatDate(item.duration.start)}</p> -<p>{formatDate(item.duration.end)}</p>
                  </div>
                </div>
                <p>{item.description}</p>
                <div className="tags">
                  <div className="tag-2">{item.tagline}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="services">
        <div className="container">
          <div className="title">
            <div className="tag">{servicesSection?.tagline}</div>
            <h2>{servicesSection?.title}</h2>
          </div>
          <div className="grid-2 adj">
            <div className="grid-2">
              {servicesSection?.services.map((service, index) => (
                <div className="card-3" key={index}>
                  <h3>{service.title}</h3>
                  {/* <p>
                    Dr. Lissack is available to speak to groups large and small on "How we Think",
                    "The Dangers of Excess Simplification", and "A Guide to Better Understanding
                  </p> */}
                  <PortableText value={service.description} />
                </div>
              ))}
            </div>
            <div className="fade fix">
              <img src={urlForImage(servicesSection?.fadeImage)?.url()} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio">
        <div className="container">
          <div className="title">
            <div className="tag">{portfolioSection?.tagline}</div>
            <h2>{portfolioSection?.title}</h2>
          </div>
          <Portfolio
            portfolioCategory={data.portfolioCategory}
            data={portfolioSection?.portfolios}
          />
        </div>
      </section>
      <section id="key">
        <div className="container">
          <div className="title">
            <div className="tag">{keyIdeaSection?.tagline}</div>
            <h2>{keyIdeaSection?.title}</h2>
          </div>
          <HomeSlider data={keyIdeaSection?.keyIdeas} />
        </div>
      </section>
      <section id="contact">
        <div className="container">
          <div className="title">
            <div className="tag">{contactSection?.tagline}</div>
            <h2>{contactSection?.title}</h2>
          </div>
          <div className="grid-2 align-center gap-5">
            <form action="#">
              <input type="text" placeholder="Your name" />
              <div className="row">
                <input type="email" placeholder="Your email" />
                <input type="tel" placeholder="Your phone number" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea
                name="description"
                placeholder="Write your message here...."
                defaultValue={''}
              />
              <button>
                <div className="center">
                  <PaperPlaneRight />
                  <p>{contactSection?.buttonText}</p> <ArrowRight />
                </div>
              </button>
            </form>
            <div className="fade d-none">
              <img src={urlForImage(contactSection?.fadeImage)?.url()} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
