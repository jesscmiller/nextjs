import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/blog"><a>Blog</a></Link>
      <Link href="/gallery"><a>Gallery</a></Link>
      <Link href="/contact"><a>Contact</a></Link>
    </nav>
  );
}

export default Navbar; 
