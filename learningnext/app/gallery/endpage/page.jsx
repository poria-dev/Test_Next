import Header from '@/components/header'
import Link from 'next/link'
import React from 'react'
import Userselect from './master'

export default function Endpage() {
    return (
        <>
            <Header />
            <li><Link href="./../../gallery">back to gallery</Link></li>
            <span>end page</span>
            <Userselect/>

        </>
    )
}
