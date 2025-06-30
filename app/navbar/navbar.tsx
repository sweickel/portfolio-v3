import { Link } from "react-router";

const NavBar = () => (
  <nav className="bg-secondary text-background p-4 w-full top-0 shadow-md z-10">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-xl font-bold flex items-center hover:text-accent" aria-label="Dashboard">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mr-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125h3.75c.621 0 1.125-.504 1.125-1.125V15.75c0-.621.504-1.125 1.125-1.125h1.5c.621 0 1.125.504 1.125 1.125v4.125c0 .621.504 1.125 1.125 1.125h3.75c.621 0 1.125-.504 1.125-1.125V9.75" />
        </svg>
      </Link>
      <div className="space-x-4">
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/blog" className="hover:underline">Blog</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>
    </div>
  </nav>
);
export default NavBar;