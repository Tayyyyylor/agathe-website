import { Metadata } from 'next'
import client from '@/utils/contentful'
import PhotoPage from '@/components/templates/photographiesPage/PhotoPage'

export const metadata: Metadata = {
    title: 'photographies',
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

export default async function PhotographiesPage() {
    const data = await fetchPhotosData()

    console.log('data page', data)

    return <PhotoPage data={data} />
}
