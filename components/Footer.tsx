import {FacebookLogo, InstagramLogo, LinkedinLogo} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

function Footer({data}) {
  return (
    <footer>
      <div className="container">
        <div className="grp">
          <div className="social">
            <a href={data?.socialLink.facebook}>
              <FacebookLogo />
            </a>
            <a href={data?.socialLink.instagram}>
              <InstagramLogo />
            </a>
            <a href={data?.socialLink.linkedin}>
              <LinkedinLogo />
            </a>
          </div>
          <p className="fix">{data.footer}</p>
        </div>
        <a className="mail" href={`mailto:${data.adminEmail}`}>
          {data.adminEmail}
        </a>
      </div>
    </footer>
  )
}

export default Footer
