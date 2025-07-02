import Link from "next/link"

const Navbar = () => {
  return (
    <div className="bg-amber-800" >
      <nav className="text-3xl">
<Link href="/"   className="text-amber-500">  Home</Link>
<Link href="/component/about"   className="text-amber-500">  about</Link>
<Link href="/component/contact" className="text-amber-500">contact</Link>
<Link href="/component/Treands" className="text-amber-500">Trends</Link>
</nav>
    </div>
  )
}

export default Navbar