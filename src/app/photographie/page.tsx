import Photographie from '@/components/templates/photographiePage/Photographie'
import { Metadata } from 'next'
import client from '@/utils/contentful'

export const metadata: Metadata = {
    title: 'photographie',
}

async function fetchPhotosData() {
    try {
        const response = await client.getEntries({
            content_type: 'photographies',
        })

        console.log('response', response)

        if (response.items.length > 0) {
            return response.items
        } else {
            return null
        }
    } catch (error) {
        console.error('Error fetching data from Contentful:', error)
        return null
    }
}

export default async function PhotographiePage() {
    const data = await fetchPhotosData()

    console.log('data page', data)

    return <Photographie data={data} />
}
