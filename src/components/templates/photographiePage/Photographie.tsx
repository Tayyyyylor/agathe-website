/* eslint-disable @typescript-eslint/no-explicit-any */
import Cards from '@/components/molecules/cards/Cards'
import React from 'react'
import styles from './Photographie.module.scss'
// import useContentful from '@/hooks/useContentful'

export default function Photographie({ data }: any) {
    console.log('datadata', data)

    const formattedData: any = data?.fields

    console.log('formattedData', formattedData)

    return (
        <main className={styles.photographie}>
            {data.map((card: any, index: number) => {
                console.log('card', card)
                return (
                    <Cards
                        key={index}
                        src={card.fields?.test?.[0]?.original_secure_url}
                        alt="toto"
                        title={card.fields.title}
                    />
                )
            })}
        </main>
    )
}
