import { navtype } from '@/utils/types/navTypes'
import React from 'react'

export default function Navbar(props:navtype) {
  return (
    <main>
    <nav>
        <ul style={{listStyle:"none"}}>
            <li>{props.nav1}</li>
            <li>{props.nav2}</li>
            <li>{props.nav3}</li>
            <li>{props.nav4}</li>
        </ul>
    </nav>
   
    </main>
    
  )
}
