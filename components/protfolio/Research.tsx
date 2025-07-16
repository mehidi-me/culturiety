'use client'

import {urlFor} from '@/sanity/lib/utils'
import ScrollCarousel from 'scroll-carousel-react'

export default function Research({data}) {
  const {articlesSection, booksSection} = data || {}

  return (
    <>
      <main className="main2">
        <video src={data.backgroundVideo.asset.url} autoPlay muted loop></video>
        <div className="container">
          <div className="content">
            <h1>{data?.heading}</h1>
          </div>
        </div>
      </main>
      <section>
        <div className="container-max">
          <div className="title">
            <h2>{booksSection?.title}</h2>
          </div>
          <ScrollCarousel autoplay smartSpeed speed={7} className="books">
            {booksSection?.books?.map((book, index) => (
              <div key={index} className="book-frame">
                <img src={urlFor(book?.asset._ref).url()} alt="" />
              </div>
            ))}
          </ScrollCarousel>
          {/* <div className="books">
            
          </div> */}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="title">
            <h2>{articlesSection?.title}</h2>
          </div>
          <div className="items">
            {articlesSection?.articles?.map((article) => (
              <div className="item">
                <div className="frame">
                  <img src={urlFor(article?.image).url()} alt="" />
                </div>
                <div className="mx">
                  <h3>{article?.title}</h3>
                  <p>{article?.description}</p>
                </div>
                <button className="empty">
                  <div className="center">
                    <i className="ph ph-arrow-up-right"></i>
                    <p>{article?.button}</p>
                    <i className="ph ph-caret-right"></i>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
