import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 bg-gray-100">
      <Link to="/">
        <img src="./logo.png" alt="JSON Puncheon Logo" className="logo w-16 h-16" />
      </Link>
      <nav>
        <ul className="flex flex-row space-x-4">
          <li><Link to="/" className="hover:text-gray-500">Home</Link></li>
          <li><Link to="/how-many-michus" className="hover:text-gray-500">How Many Michus?</Link></li>
          <li><Link to="/to-do-list" className="hover:text-gray-500">ToDo List</Link></li>
        </ul>
      </nav>
    </header>
  )
}
