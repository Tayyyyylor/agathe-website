'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import Cards from '@/components/molecules/cards/Cards'
import React, { useState } from 'react'
import styles from './Photographie.module.scss'
import Modal from '@/components/molecules/modal/Modal'
// import useContentful from '@/hooks/useContentful'

export default function Photographie({ data }: any) {
    console.log('datadata', data)

    const [isOpen, setIsOpen] = useState(false)

    console.log('isOpen', isOpen)

    const formattedData: any = data?.fields

    console.log('formattedData', formattedData)

    const handleClickOpenModal = () => {
        setIsOpen(true)
    }

    const handleClickCloseModal = () => {
        setIsOpen(false)
    }
    return (
        <main className={styles.photographie}>
            <section className={styles.containerCards}>
                {data.map((card: any, index: number) => {
                    console.log('card', card)
                    return (
                        <Cards
                            key={index}
                            src={card.fields?.test?.[0]?.original_secure_url}
                            alt="toto"
                            title={card.fields.title}
                            onClick={handleClickOpenModal}
                        />
                    )
                })}
            </section>
            {isOpen && <Modal title="toto" onClick={handleClickCloseModal} />}
            {/* <Modal title='toto'/> */}
        </main>
    )
}
