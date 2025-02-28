'use client'
import useMobile from '@/hooks/useMobile'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
    const isMobile = useMobile()
    return (
        <Link href="/">
            <Image
                src="/logoagathe.png"
                width={isMobile ? 100 : 150}
                height={isMobile ? 100 : 150}
                alt=""
                layout="intrinsic"
            />
        </Link>
    )
}
