import Image from 'next/image'
import React from 'react'
import styles from './Cards.module.scss'

interface CardsProps {
    src: string
    alt: string
    title: string
    onClick: () => void
    className?: string
}

export default function Cards({
    src,
    alt,
    title,
    onClick,
    className,
}: CardsProps) {
    return (
        <>
            <section
                className={`${styles.container} ${className}`}
                onClick={onClick}
            >
                <div className={styles.cards}>
                    <Image
                        src={src}
                        alt={alt}
                        className={styles.imgCards}
                        fill
                    />
                </div>
                <p>{title}</p>
            </section>
        </>
    )
}
