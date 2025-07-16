'use client'
import { urlFor, urlForImage } from '@/sanity/lib/utils';
import Link from 'next/link'
import Script from 'next/script';
import React, { useEffect } from 'react'


function Header({data}) {
  const {menuItems} = data || [];



  const menuFunc = () => {
    const header = document.querySelector('header')
    if (header) {
      header.classList.toggle('active')
    }
  }
  // return (
  //   <>
  //   <Script src="https://unpkg.com/@phosphor-icons/web@2.1.1"></Script>
  //     <header>
  //       <div className="container">
  //         <a href="/">
  //         <div className="logo">
  //           <img src={urlForImage(data.logo).url()} alt="Logo" />
  //         </div>
  //         </a>
  //         <div className={`links`}>
  //           {menuItems?.map((menu, index) => (
  //             <a onClick={menuFunc} key={index} href={menu?.link ?? "#"}>
  //               {menu?.title}
  //             </a>
  //           ))}
  //         </div>
  //         <div className="menu" onClick={menuFunc}>
  //           <div className="bars">
  //             <span></span>
  //             <span></span>
  //             <span></span>
  //           </div>
  //         </div>
  //       </div>
  //     </header>
  //   </>
  // )

  return (
    <>
    <Script src="https://unpkg.com/@phosphor-icons/web@2.1.2"></Script>
     <header>
  <div className="container">
    <div className="logo">
     <Link href="/"> <img src="images/logo.png" alt="" /></Link>
    </div>
    <div className="share">
      <p>Share with friends</p>
      <div className="share-media">
        <a href="#" className="ico"><i className="ph ph-facebook-logo" /></a>
        <a href="#" className="ico"><i className="ph ph-instagram-logo" /> </a>
        <a href="#" className="ico"><i className="ph ph-linkedin-logo" /> </a>
      </div>
    </div>
  </div>
</header>
    </>
   

  )
}

export default Header
