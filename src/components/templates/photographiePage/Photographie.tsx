import Cards from '@/components/molecules/cards/Cards'
import React from 'react'
import styles from './Photographie.module.scss'

export default function Photographie() {
    const cardsData = [
        {
            src: '/actu2.png',
            alt: 'placeholder',
            text: 'Tata ',
        },
        {
            src: '/actu2.png',
            alt: 'placeholder',
            text: 'Titi ',
        },
        {
            src: '/actu2.png',
            alt: 'placeholder',
            text: 'Toto',
        },
        {
            src: '/actu2.png',
            alt: 'placeholder',
            text: 'Tutu ',
        },
        {
            src: '/actu2.png',
            alt: 'placeholder',
            text: 'Tyty',
        },
    ]
    return (
        <main className={styles.photographie}>
            {cardsData.map((card, index) => (
                <Cards
                    key={index}
                    src={card.src}
                    alt={card.alt}
                    text={card.text}
                />
            ))}
        </main>
    )
}
