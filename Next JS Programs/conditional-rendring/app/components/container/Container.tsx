import { containerType } from '@/types/type'
import React from 'react'
import Tag from '../tag/Tag'

export default function Container(props:containerType) {
  return (
    <div>
       {props.showtag ? props.tagText : "No Tags"}
    </div>
  )
}
