'use client'
import { FaFilePdf } from 'react-icons/fa'
import styles from './PdfViewer.module.scss'
import useMobile from '@/hooks/useMobile'

type PDFViewerProps = {
    pdfUrl: string
}

export default function PDFViewer({ pdfUrl }: PDFViewerProps) {
    console.log('pdfUrl :>> ', pdfUrl)

    const isMobile = useMobile()

    const viewerUrl = isMobile
        ? `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`
        : `${pdfUrl}#view=FitH&toolbar=0&navpanes=0`

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
