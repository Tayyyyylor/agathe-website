'use client'
import { FaFilePdf } from 'react-icons/fa'
import styles from './PdfViewer.module.scss'
import { useEffect, useState } from 'react'

type PDFViewerProps = {
    pdfUrl: string
}

export default function PDFViewer({ pdfUrl }: PDFViewerProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className={styles.container}>
                <div className={styles.loading}>Chargement...</div>
            </div>
        )
    }

    const viewerUrl = `/pdf-viewer.html?file=${encodeURIComponent(pdfUrl)}`

    return (
        <div className={styles.container}>
            <a href="/api/cv" className={styles.button}>
                <div className={styles.iconWrapper}>
                    <FaFilePdf className={styles.pdfIcon} />
                </div>
                <div className={styles.textWrapper}>
                    <span className={styles.mainText}>Télécharger</span>
                    <span className={styles.subText}>Mon CV</span>
                </div>
            </a>

            <div className={styles.iframeWrapper}>
                <iframe
                    src={viewerUrl}
                    className={styles.iframe}
                    title="CV PDF"
                />
            </div>
        </div>
    )
}