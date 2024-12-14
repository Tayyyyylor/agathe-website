import Photographie from '@/components/templates/photographiePage/Photographie'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'photographie',
}

export default function PhotographiePage() {
    return <Photographie />
}
