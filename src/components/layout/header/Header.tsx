import React from 'react'
import Navbar from '@/components/molecules/navbar/Navbar'
import styles from './Header.module.scss'
import Logo from '@/components/atoms/logo/Logo'

export const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <Navbar />
        </header>
    )
}
