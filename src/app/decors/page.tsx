import Decors from '@/components/templates/decors/Decors'
import client from '@/utils/contentful'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'decors',
}

async function fetchDecorsData() {
    try {
        const response = await client.getEntries({
            content_type: 'decors',
            order: ['fields.order'],
        })

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

export default async function DecorsPage() {
    const data = await fetchDecorsData()
    return <Decors data={data} />
}
