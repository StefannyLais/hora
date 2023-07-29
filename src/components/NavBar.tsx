// components/NavBar.tsx

import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-100 p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link href="/">
            <a className="text-gray-800 hover:text-gray-600">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/menu">
            <a className="text-gray-800 hover:text-gray-600">Menu</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="text-gray-800 hover:text-gray-600">About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="text-gray-800 hover:text-gray-600">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
