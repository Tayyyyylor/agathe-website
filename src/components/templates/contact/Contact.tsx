/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'
import React from 'react'
import styles from './Contact.module.scss'

export default function Contact({ data }: any) {
    console.log('data', data)
    return (
        <main className={styles.contact}>
            <Link target="_blank" href={data.instagram}>
                Instagram
            </Link>
            <Link href={`mailto:${data.mail}`}>{data.mail}</Link>
        </main>
    )
}
