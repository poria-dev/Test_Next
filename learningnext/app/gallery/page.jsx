import Footer from '@/components/footer'
import Header from '@/components/header'
import Link from 'next/link'
import React from 'react'

export default function Gallery() {
    return (
        <>
            <Header />
            <li><Link href="./../gallery/endpage">click go end page</Link></li>
            <span>gallery page</span>
            <Footer />
        </>
    )
}
