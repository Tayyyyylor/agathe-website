import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
    return (
        <Link href="/">
            <Image
                src="/logoagathe.png"
                width={100}
                height={100}
                alt=""
                layout="intrinsic"
            />
        </Link>
    )
}
