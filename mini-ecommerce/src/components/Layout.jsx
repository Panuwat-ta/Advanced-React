import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-indigo-600 text-white p-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <Link to="/">MyStore</Link>
          </h1>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/products" className="hover:underline">Products</Link>
            </li>
            <li>
              <Link to="/cart" className="hover:underline">Cart</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 container mx-auto p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-gray-700 p-4 text-center">
        &copy; {new Date().getFullYear()} MyStore. All rights reserved.
      </footer>
    </div>
  );
}

export default Layout;
