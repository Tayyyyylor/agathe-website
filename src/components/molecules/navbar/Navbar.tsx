'use client'
import React, { useState } from 'react'
import styles from './Navbar.module.scss'
import useMobile from '@/hooks/useMobile'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const isMobile = useMobile()
    const [isOpen, setIsOpen] = useState(false)

    const pathname = usePathname()
    const isActive = (path: string) => pathname?.includes(path)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleClick = () => {
        setIsOpen(false)
    }

    return isMobile ? (
        <div className={styles.burgerMenu}>
            <div className={styles.burgerIcon} onClick={toggleMenu}>
                <span
                    className={`${styles.line} ${isOpen ? styles.crossLine1 : ''}`}
                />
                <span
                    className={`${styles.line} ${isOpen ? styles.crossLine2 : ''}`}
                />
                <span
                    className={`${styles.line} ${isOpen ? styles.crossLine3 : ''}`}
                />
            </div>

            <nav className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
                <ul>
                    <li>
                        <Link href="/decors" onClick={handleClick}>
                            décors
                        </Link>
                    </li>
                    <li>
                        <Link href="/maquettes" onClick={handleClick}>
                            maquettes
                        </Link>
                    </li>
                    <li>
                        <Link href="/stands" onClick={handleClick}>
                            stands
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" onClick={handleClick}>
                            contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    ) : (
        <nav className={styles.nav}>
            <Link
                href="/decors"
                className={`${styles.link} ${
                    isActive('/decors') ? styles.active : ''
                }`}
            >
                décors
            </Link>
            <Link
                href="/maquettes"
                className={`${styles.link} ${
                    isActive('/maquettes') ? styles.active : ''
                }`}
            >
                maquettes
            </Link>
            <Link
                href="/stands"
                className={`${styles.link} ${
                    isActive('/stands') ? styles.active : ''
                }`}
            >
                stands
            </Link>
            <Link
                href="/contact"
                className={`${styles.link} ${
                    isActive('/contact') ? styles.active : ''
                }`}
            >
                contact
            </Link>
        </nav>
    )
}
