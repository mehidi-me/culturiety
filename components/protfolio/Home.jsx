'use client'

import {urlFor} from '@/sanity/lib/utils'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import {useEffect} from 'react'

// gsap.registerPlugin(ScrollTrigger)

const HomePage = ({data}) => {
  const {
    heroSection,
    aiResearchCards,
    perilsOfSloppyScience,
    sharingTheKnowledge,
    aiResearchSection,
  } = data || {}


  // useEffect(() => {
  //   gsap.utils.toArray('.image-stack .frame').forEach((frame, index) => {
  //     gsap.to(frame, {
  //       skewX: index % 2 === 0 ? 5 : -3, // Alternate skew
  //       skewY: index % 2 === 0 ? 2.5 : -1.5,
  //       y: index % 2 === 0 ? -2.5 : 2.5,
  //       scrollTrigger: {
  //         trigger: frame,
  //         start: 'top bottom', // Start when the element enters viewport
  //         end: 'top top', // End when it reaches the top
  //         scrub: 1.5, // Smooth transition
  //       },
  //     })
  //   })
  // }, [])

  // return (
  //   <>
  //     <main>
  //       <video src={heroSection.backgroundVideo.asset.url} autoPlay muted loop></video>
  //       <div className="container">
  //         <div className="content">
  //           <h1>{heroSection?.headline}</h1>
  //         </div>
  //       </div>

  //       <div className="bottom-content">
  //         <div className="text-content">
  //           <h5>{heroSection?.subContent?.subHeading}</h5>
  //           <h3>{heroSection?.subContent?.description}</h3>
  //         </div>

  //         <div className="buttons">
  //           <Link href={heroSection?.buttons?.learnMore?.link ?? '#'}>
  //             <button className="empty">
  //               <div className="center">
  //                 <i className="ph ph-arrow-up-right"></i>
  //                 <p>{heroSection?.buttons?.learnMore?.label}</p>
  //                 <i className="ph ph-caret-right"></i>
  //               </div>
  //             </button>
  //           </Link>
  //           <Link href={heroSection?.buttons?.projects?.link ?? '#'}>
  //             <button className="empty">
  //               <div className="center">
  //                 <i className="ph ph-arrow-up-right"></i>
  //                 <p>{heroSection?.buttons?.projects?.label}</p>
  //                 <i className="ph ph-caret-right"></i>
  //               </div>
  //             </button>
  //           </Link>
  //         </div>
  //       </div>
  //     </main>
  //     <section>
  //       <div className="container">
  //         <div className="title">
  //           <h2>{aiResearchSection?.title}</h2>
  //         </div>
  //         <div className="image-stack">
  //           {aiResearchSection?.imageStack.map((image) => (
  //             <div className="frame" key={image._key}>
  //               <Image
  //                 src={urlFor(image.asset).url()}
  //                 alt={`AI Research Image ${image._key}`}
  //                 width={300}
  //                 height={200}
  //               />
  //             </div>
  //           ))}
  //         </div>
  //         <div className="grid-4">
  //           {aiResearchCards?.cards?.map((cart, index) => (
  //             <div key={index} className="card">
  //               <h3>{cart?.heading}</h3>
  //               <p>{cart?.description}</p>
  //               <button className="empty">
  //                 <div className="center">
  //                   <i className="ph ph-arrow-up-right"></i>
  //                   <p>{cart?.buttonLabel}</p>
  //                   <i className="ph ph-caret-right"></i>
  //                 </div>
  //               </button>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </section>

  //     <section>
  //       <div className="container">
  //         <div className="title">
  //           <h2>{perilsOfSloppyScience?.title}</h2>
  //         </div>
  //         <div className="gap-5">
  //           {perilsOfSloppyScience.cards?.map((item, i) => {
  //             if (!i % 2) {
  //               return (
  //                 <div className="big-card">
  //                   <div className="frame">
  //                     <Image src={urlFor(item.image.asset).url()} alt="Image 3" width={500} height={300} />
  //                   </div>
  //                   <div className="content-box">
  //                     <h2>{item.subHeading}</h2>
  //                     <h3>
  //                       {item.heading}
  //                     </h3>
  //                     <p>
  //                      {item.description}
  //                     </p>
  //                   </div>
  //                 </div>
  //               )
  //             } else {
  //               return (
  //                 <div className="big-card">
  //                   <div className="content-box">
  //                     <h2>{item.subHeading}</h2>
  //                     <h3>
  //                     {item.heading}
  //                     </h3>
  //                     <p>
  //                     {item.description}
  //                     </p>
  //                   </div>
  //                   <div className="frame fix">
  //                     <Image src={urlFor(item.image.asset).url()} alt="Image 1" width={500} height={300} />
  //                   </div>
  //                 </div>
  //               )
  //             }
  //           })}
  //         </div>
  //       </div>
  //     </section>
  //     <section>
  //       <div className="container">
  //         <div className="title">
  //           <h2>{sharingTheKnowledge?.title}</h2>
  //         </div>
  //         <div className="grid-3">
  //           {sharingTheKnowledge?.cards?.map((card, index) => (
  //             <div key={index} className="card">
  //               <h4>{card?.heading}</h4>
  //               <p>{card?.description}</p>
  //               <button className="empty">
  //                 <div className="center">
  //                   <i className="ph ph-arrow-up-right"></i>
  //                   <p>{card?.buttonText}</p>
  //                   <i className="ph ph-caret-right"></i>
  //                 </div>
  //               </button>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // )

  return (
    <div>
  <main>
    <div className="container">
      <div className="title">
        <h1>Creative chaos, <span>curated</span>
        </h1>
        <p>We trim the noise from the worlds of <span>fashion, design, art and culture.</span> Delivering what
          matters (and
          what’s next)
          straight to your inbox.</p>
      </div>
      <form action className="signup">
        <input type="email" placeholder="Your email" />
        <button>Signup</button>
      </form>
    </div>
  </main>
  <img className="main-bg" src="images/main2.svg" alt="" />
</div>

  )
}
export default HomePage
