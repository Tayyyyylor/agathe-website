/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import ModelPage from '../modelPage/ModelPage'
// import useContentful from '@/hooks/useContentful'

export default function Maquettes({ data }: any) {
    return data && <ModelPage data={data} />
}
