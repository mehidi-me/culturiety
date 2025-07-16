'use client'

import {urlFor} from '@/sanity/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects({data}) {

  const {projectsGrid} = data
 


  return (
    <>
      <main className="main2">
        <video src={data.backgroundVideo.asset.url} autoPlay muted loop></video>
        <div className="container">
          <div className="content">
            <h1>{data?.title}</h1>
          </div>
        </div>
      </main>
      <section>
        <div className="container">
          <div className="grid-3 projects">
            {projectsGrid?.projects?.map((card, index) => (
              <Link key={index} href="#">
                <div className="card">
                  <div className="frame">
                    <img src={urlFor(card?.image).url()} alt="" />
                  </div>
                  <div className="body">
                    <h3>simplicity as hubris: yes, context matters</h3>
                    <p>
                      We do not live in a simple world and cannot rely on the accuracy of simple
                      explanations.
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
