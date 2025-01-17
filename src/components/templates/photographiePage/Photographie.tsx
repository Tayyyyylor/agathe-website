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
                return (
                    <Cards
                        key={index}
                        src={`https:${card.fields.imgCover.fields.file.url}`}
                        alt={card.alt}
                        title={card.fields.title}
                    />
                )
            })}
        </main>
    )
}
