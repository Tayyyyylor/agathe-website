import React from 'react'
import ModelPage from '../modelPage/ModelPage'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Maquettes({ data }: any) {
    return data && <ModelPage data={data} />
}
