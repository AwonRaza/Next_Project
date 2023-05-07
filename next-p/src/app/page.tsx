import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    
    <div>Welcome to Next Project!</div><br></br>
    <Link href="./">Home</Link>
    <Link href="./dashboard">Dashboard</Link>
    <Link href="./about">About</Link>
    <Link href="./contact-us">Contact Us</Link>
    
    <p>Website is in Working.....................</p>
    </>
  )
}
