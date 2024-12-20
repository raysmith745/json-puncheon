export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 bg-gray-100">
      <img src="./logo.png" alt="JSON Puncheon Logo" className="logo w-16 h-16" />
      <nav>
        <ul className="flex flex-row space-x-4">
          <li><a href="/" className="hover:text-gray-500">Home</a></li>
          <li><a href="/how-many-michus" className="hover:text-gray-500">How Many Michus?</a></li>
          <li><a href="/to-dos" className="hover:text-gray-500">ToDo List</a></li>
        </ul>
      </nav>
    </header>
  )
}
