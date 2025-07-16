'use client'
import {OptimisticSortOrder} from '@/components/OptimisticSortOrder'
import {studioUrl} from '@/sanity/lib/api'
import {createDataAttribute, stegaClean} from 'next-sanity'
import Link from 'next/link'
import {ArrowRight, Phone} from "@phosphor-icons/react/dist/ssr"
import { useState } from 'react'

export function Navbar(props) {
  const {data} = props
  const dataAttribute =
    data?._id && data?._type
      ? createDataAttribute({
          baseUrl: studioUrl,
          id: data._id,
          type: data._type,
        })
      : null

const [showMenu, setShowMenu] = useState(false);

const toggleMenu = () => {
  setShowMenu(pre => !pre);
}

  return (
    <header data-sanity={dataAttribute?.('menuItems')} className={showMenu ? 'active' : ''}>
      <div className="container">
        <div className="menu" onClick={toggleMenu}>
          <div className="bars">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="links">
          {/* <OptimisticSortOrder id={data?._id!} path="menuItems">
           
          </OptimisticSortOrder> */}
           {data?.menuItems?.map((menuItem) => {
              return (
                <Link
                  key={menuItem._key}
                  data-sanity={dataAttribute?.([
                    'menuItems',
                    {_key: menuItem._key as unknown as string},
                  ])}
                  href={menuItem.link ?? "#"}
                  onClick={toggleMenu}
                >
                  {stegaClean(menuItem.title)}
                </Link>
              )
            })}
        </div>
        <div className="cta">
          <a href={data?.menuMainButton?.link}>
            <button>
              <div className="center">
                {/* <i className="ph ph-phone" /> */}
                <Phone />
                <p>{data?.menuMainButton?.title}</p> <ArrowRight />
              </div>
            </button>
          </a>
        </div>
      </div>
    </header>
  )
}
