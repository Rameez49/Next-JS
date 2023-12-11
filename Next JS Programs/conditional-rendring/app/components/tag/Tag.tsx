import { containerType } from '@/types/type'
import React from 'react'

export default function Tag(props:containerType) {
  return (
    <main>
        <div>{props.tag}</div>
    </main>
  )
}
