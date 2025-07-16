import Link from 'next/link'

const Footer = ({data}) => {
  const {footer} = data || {}
  // return (
  //   <footer>
  //     <div className="container">
  //       <div className="flex">
  //         <div className="div">
  //           <div className="item">
  //             <p>Call us</p>
  //             <a href="#">{footer?.phone}</a>
  //           </div>
  //           <div className="item">
  //             <p>Discover us</p>
  //             <div className="social-2">
  //               {footer?.socialLinks?.map((link, index) => (
  //                 <Link key={index} href={link?.url ?? "#"}>
  //                   {link?.platform}
  //                 </Link>
  //               ))}
  //             </div>
  //           </div>
  //         </div>
  //         <div>
  //           <div className="item">
  //             <p>Email us</p>
  //             <a href="mailto:admin@isce.edu" className="mail">
  //               {footer?.email}
  //             </a>
  //           </div>
  //           <div className="item">
  //             <p>Address</p>
  //             <h5>{footer?.address}</h5>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="copy">{footer?.copyright}</div>
  //     </div>
  //   </footer>
  // )

  return (
    <footer>
      <div className="container">
        <div className="logo">
          <h1>{data?.footerlogotext}</h1>
        </div>
        <div className="copy">
          <p>{data?.copyright}</p>
          <div className="links">
            {data?.menuItems?.map((item, index) => <Link href={item.link}>{item.title}</Link>)}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
