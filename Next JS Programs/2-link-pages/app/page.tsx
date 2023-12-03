import Image from 'next/image'

export default function Home() {
  return (
    <main>
       
      <nav>
        <ul >
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/contact'>Contact</a></li>
          
        </ul>
      </nav>
      <div>This is Home Page</div>
    </main>
  )
}
