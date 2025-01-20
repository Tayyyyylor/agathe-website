import Scenographie from '@/components/templates/scenographie/Scenographie'
import client from '@/utils/contentful'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'scenographie',
}

async function fetchScenoData() {
    try {
        const response = await client.getEntries({
            content_type: 'sceno',
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

export default async function ScenographiePage() {
    const data = await fetchScenoData()
    return <Scenographie data={data} />
}
