import Image from 'next/image'
import React from 'react'
import styles from './Cards.module.scss'

interface CardsProps {
    src: string
    alt: string
    text: string
}

export default function Cards({ src, alt, text }: CardsProps) {
    return (
        <div className={styles.cards}>
            <Image
                src={src}
                alt={alt}
                width={400}
                height={400}
                className={styles.imgCards}
            />
            <p className={styles.txtCards}>{text}</p>
        </div>
    )
}
