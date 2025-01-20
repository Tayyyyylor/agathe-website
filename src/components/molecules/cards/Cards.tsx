import Image from 'next/image'
import React from 'react'
import styles from './Cards.module.scss'

interface CardsProps {
    src: string
    alt: string
    title: string
}

export default function Cards({ src, alt, title }: CardsProps) {
    return (
        <section className={styles.container}>
            <div className={styles.cards}>
                <Image src={src} alt={alt} className={styles.imgCards} fill />
            </div>
            <p>{title}</p>
        </section>
    )
}
