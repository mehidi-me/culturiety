'use client'

import {urlFor} from '@/sanity/lib/utils'
import {PortableText} from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'

export default function About({data}) {

  const {buttons, aboutAdditionalSection, teamSection, ourFocus} = data


  return (
    <>
     
      <main>
        <video src={data.backgroundVideo.asset.url} autoPlay muted loop></video>
        <div className="container">
          <div className="content">
            <h1>{data?.heading}</h1>
          </div>
        </div>
        <div className="bottom-content">
          <div className="text-content">
            <h5>{data?.subHeading}</h5>
            <h3>{data?.description}</h3>
          </div>
          <div className="buttons">
            <Link href={buttons?.learnMore?.link ?? "#"}>
              <button className="empty">
                <div className="center">
                  <i className="ph ph-arrow-up-right"></i>
                  <p>{buttons?.learnMore?.label}</p>
                  <i className="ph ph-caret-right"></i>
                </div>
              </button>
            </Link>
            <Link href={buttons?.projects?.link ?? "#"}>
              <button className="empty">
                <div className="center">
                  <i className="ph ph-arrow-up-right"></i>
                  <p>{buttons?.projects?.label}</p>
                  <i className="ph ph-caret-right"></i>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </main>
      <section>
        <div className="container">
          {/* <h6>{aboutAdditionalSection?.content}</h6> */}
          <PortableText value={aboutAdditionalSection?.content} />
        </div>
      </section>
      <section>
        <div className="container-max">
          <div className="title">
            <h2>{teamSection?.title}</h2>
          </div>
          <div className="team-cards">
            {teamSection?.teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <img src={urlFor(member?.image).url()} alt="" />
                <div className="content">
                  <h3>{member?.name}</h3>
                  <p>{member?.role}</p>
                  <div className="social">
                    <a href="#">
                      <i className="ph ph-facebook-logo"></i>
                    </a>
                    <a href="#">
                      <i className="ph ph-linkedin-logo"></i>
                    </a>
                    <a href="#">
                      <i className="ph ph-link-simple"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="title">
            <h2>Our Focus</h2>
          </div>
          <div className="items">
            {ourFocus?.focusItems?.map((item, index) => (
              <div key={index} className="item">
                <div className="frame">
                  <img src={urlFor(item?.image).url()} alt="" />
                </div>
                <div className="mx">
                  <h3>{item?.title}</h3>
                  <p>{item?.description}</p>
                </div>
                <a href={item?.link}>
                <button className="empty">
                  <div className="center">
                    <i className="ph ph-arrow-up-right"></i>
                    <p>Learn More</p>
                    <i className="ph ph-caret-right"></i>
                  </div>
                </button>
                </a>
               
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
