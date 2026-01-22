'use client'
import React from 'react'
import Navbar from '@/components/molecules/navbar/Navbar'
import styles from './Header.module.scss'
import Logo from '@/components/atoms/logo/Logo'
import { usePathname } from 'next/navigation'

export const Header = () => {
    const pathname = usePathname()
    const isHome = pathname === '/'
    return (
        <header
            className={`${styles.header} ${isHome ? styles.transparent : ''}`}
        >
            <Logo />
            <Navbar />
        </header>
    )
}
