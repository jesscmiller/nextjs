import Link from 'next/link'


const Navbar = () => {
  return (
    <nav>
      <Link href="/about"><a>About</a></Link>
      <Link href="/blog"><a>Blog</a></Link>
      <Link href="/gallery"><a>Gallery</a></Link>
      <Link href="/articles"><a>Articles</a></Link>
      <Link href="/exhibitions"><a>Exhibitions</a></Link>
      <Link href="/contact"><a>Contact</a></Link>
    </nav>
  );
}

export default Navbar; 
