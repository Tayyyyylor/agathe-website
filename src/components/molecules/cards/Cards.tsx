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
        <div className={styles.cards}>
            <Image
                src={src}
                alt={alt}
                width={400}
                height={400}
                className={styles.imgCards}
                layout="intrinsic"
            />
            <p>{title}</p>
        </div>
    )
}
