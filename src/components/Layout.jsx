import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-neutral-50 dark:bg-gray-700 no-scrollbar">
      <Navbar />
      <main className="pb-16 dark:bg-gray-700">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
