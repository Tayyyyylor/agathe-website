/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import styles from './Modal.module.scss'
import Image from 'next/image'

interface ModalProps {
    title: string
    onClick: () => void
    data: any
}

export default function Modal({ title, onClick, data }: ModalProps) {
    return (
        <section className={styles.modal}>
            <button className={styles.close} onClick={onClick}>
                X
            </button>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.imagesContainer}>
                {data.fields.img.map((img: any, index: number) => {
                    return (
                        <div key={index}>
                            <Image
                                src={img.original_secure_url}
                                width={300}
                                height={300}
                                alt=""
                                className={styles.image}
                            />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
