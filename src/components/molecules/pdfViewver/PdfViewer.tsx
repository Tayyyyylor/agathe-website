// components/molecules/pdfViewver/PdfViewer.tsx
'use client'

import styles from './PdfViewer.module.scss'

type PDFViewerProps = {
    pdfUrl: string
}

export default function PDFViewer({ pdfUrl }: PDFViewerProps) {
    return (
        <div className={styles.container}>
            <iframe
                src={`${pdfUrl}#view=FitH&toolbar=0&navpanes=0`}
                className={styles.iframe}
                title="CV PDF"
            />
        </div>
    )
}
