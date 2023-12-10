import Image from 'next/image'
import {Navbar} from './components/navbar/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar nav1="Home" nav2="About" nav3="contact" nav4="services"/>
    </main>
  )
}
