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
    const isHome = pathname === '/'

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
                    className={`${styles.line} ${isOpen ? styles.crossLine1 : ''} ${isHome ? styles.whiteLine : ''}`}
                />
                <span
                    className={`${styles.line} ${isOpen ? styles.crossLine2 : ''} ${isHome ? styles.whiteLine : ''}`}
                />
                <span
                    className={`${styles.line} ${isOpen ? styles.crossLine3 : ''} ${isHome ? styles.whiteLine : ''}`}
                />
            </div>

            <nav
                className={`${styles.menu} ${isOpen ? styles.menuOpen : ''} ${isHome ? styles.white : ''}`}
            >
                <ul>
                    <li>
                        <Link
                            href="/decors"
                            onClick={handleClick}
                            className={`${isHome ? styles.white : ''}`}
                        >
                            décors
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/stands"
                            onClick={handleClick}
                            className={`${isHome ? styles.white : ''}`}
                        >
                            création d&apos;accessoires
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/maquettes"
                            onClick={handleClick}
                            className={`${isHome ? styles.white : ''}`}
                        >
                            maquettes & modélisations 3D
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/photographies"
                            onClick={handleClick}
                            className={`${isHome ? styles.white : ''}`}
                        >
                            photographies
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            onClick={handleClick}
                            className={`${isHome ? styles.white : ''}`}
                        >
                            contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    ) : (
        <nav className={`${styles.nav} ${isHome ? styles.white : ''}`}>
            <Link
                href="/decors"
                className={`${styles.link} ${
                    isActive('/decors') ? styles.active : ''
                } ${isHome ? styles.white : ''}`}
            >
                décors
            </Link>
            <Link
                href="/stands"
                className={`${styles.link} ${
                    isActive('/stands') ? styles.active : ''
                } ${isHome ? styles.white : ''}`}
            >
                création d&apos;accessoires
            </Link>
            <Link
                href="/maquettes"
                className={`${styles.link} ${
                    isActive('/maquettes') ? styles.active : ''
                } ${isHome ? styles.white : ''}`}
            >
                maquettes & modélisations 3D
            </Link>
            <Link
                href="/photographies"
                className={`${styles.link} ${
                    isActive('/photographies') ? styles.active : ''
                } ${isHome ? styles.white : ''}`}
            >
                photographies
            </Link>
            <Link
                href="/contact"
                className={`${styles.link} ${
                    isActive('/contact') ? styles.active : ''
                } ${isHome ? styles.white : ''}`}
            >
                contact
            </Link>
        </nav>
    )
}
