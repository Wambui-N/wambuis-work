import Link from 'next/link'
import React from 'react'

interface inlineLinkProp {
    href: string;
    link: string;
}

const inlineLink = ({href, link}: inlineLinkProp) => {
  return (
    <Link className='font-semibold hover:border-b hover:border-black' href={href}>{link}</Link>
  )
}

export default inlineLink