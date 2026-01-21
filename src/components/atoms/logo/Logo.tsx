import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Logo.module.scss'

export default function Logo() {
    return (
        <Link href="/" className={styles.logo}>
            <Image
                src="/logoagathe.png"
                width={150}
                height={150}
                alt="logo"
                priority
            />
        </Link>
    )
}
