import React from 'react';
import Link from 'next/link';

interface NavTitleProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const NavTitle: React.FC<NavTitleProps> = ({ icon, label, href }) => (
  <Link href={href} className="flex items-center gap-3 hover:text-white text-black px-2 py-1">
    <div className="text-xl">{icon}</div>
    <span className="text-md font-medium">{label}</span>
  </Link>
);

export default NavTitle;

