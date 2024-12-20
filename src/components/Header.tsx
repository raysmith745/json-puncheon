import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 bg-gray-300">
      <Link to="/">
        <img src="./jsonPuncheonLogo.png" alt="JSON Puncheon Logo" className="logo w-16 h-16" />
      </Link>
      <nav>
        <ul className="flex flex-row space-x-4 ml-4 text-xs sm:text-base">
          <li className="flex items-center">
            <Link to="/" className="hover:text-gray-500">Home</Link>
          </li>
          <li className="flex items-center border-l border-gray-500 pl-4">
            <Link to="/how-many-michus" className="hover:text-gray-500">How Many Michus?</Link>
          </li>
          <li className="flex items-center border-l border-gray-500 px-4">
            <Link to="/to-do-list" className="hover:text-gray-500">ToDo List</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
