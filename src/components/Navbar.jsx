// Navbar component

function Navbar() {
  return (
    <nav className="bg-orange-400 py-4">
      <div className="flex justify-around items-center">
        {/* Web title */}
        <a href="#" className="text-white text-2xl font-semibold">
          Get the Job
        </a>

        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              className="text-white font-semibold hover:text-green-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white font-semibold hover:text-green-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white font-semibold hover:text-green-500"
            >
              Our services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white font-semibold hover:text-green-500"
            >
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

