import React from 'react'
import styles from './Modal.module.scss'

interface ModalProps {
    title: string
    onClick: () => void
}

export default function Modal({ title, onClick }: ModalProps) {
    return (
        <section className={styles.modal}>
            <button className={styles.close} onClick={onClick}>
                X
            </button>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.imagesContainer}>datas photos</div>
        </section>
    )
}
