import { Metadata } from 'next'
import client from '@/utils/contentful'
import Maquettes from '@/components/templates/maquettesPage/Maquettes'

export const metadata: Metadata = {
    title: 'maquettes',
}

async function fetchMaquettesData() {
    try {
        const response = await client.getEntries({
            content_type: 'maquettes',
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
    const data = await fetchMaquettesData()

    console.log('data page', data)

    return <Maquettes data={data} />
}
