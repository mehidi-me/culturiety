'use client'

import {urlFor, urlForImage} from '@/sanity/lib/utils'
import { PortableText } from 'next-sanity';
import React from 'react'

function Terms({data}) {
function formatDateToMDYY(isoString) {
  const date = new Date(isoString);
  const month = date.getMonth() + 1; // Months are zero-based
  const day = date.getDate();
  const year = String(date.getFullYear()).slice(-2);
  return `${month}/${day}/${year}`;
}
   return (
    <div>
  <main>
    <div className="container">
      <div className="title t2">
        <h1>{data.title}</h1>
        <p>Last Edited {formatDateToMDYY(data._updatedAt)}</p>
      </div>
      <div className="text-block">
         <PortableText value={data?.content} />
      </div>
     
    </div>
  </main>
  <section>
    <div className="container">
      <div className="flex cta-2">
        <h2>Sign up today</h2>
        <form  className="signup">
          <input type="email" placeholder="Your email" />
          <button>Signup</button>
        </form>
      </div>
    </div>
  </section>
  <img className="main-bg" src={urlForImage(data?.bottomimage).url()} alt="" />
</div>

  )
}

export default Terms