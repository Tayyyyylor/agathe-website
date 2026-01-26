/* eslint-disable @typescript-eslint/no-explicit-any */
import serverClient from '@/utils/contentful.server'
import { NextResponse } from 'next/server'


export const revalidate = 0 

export async function GET() {
    try {
        const entries = await serverClient.getEntries({
            content_type: 'cv',
            limit: 1,
        })

        console.log('📦 Full entries:', JSON.stringify(entries, null, 2))

        const item = entries.items[0]
        const cvAsset = item.fields.cvPdf as any
        const file = cvAsset.fields.file

        const fileUrl = `https:${file.url}`
        const fileName = file.fileName

         const pdfRes = await fetch(fileUrl, {
      cache: 'no-store' 
    })
        const buffer = await pdfRes.arrayBuffer()

        return new NextResponse(buffer, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="${fileName}"`,
                   'Cache-Control': 'no-cache, no-store, must-revalidate',
            },
        })
    } catch (error) {
        console.error('Erreur CV:', error)
        return NextResponse.json({ error: 'CV non trouvé' }, { status: 500 })
    }
}
