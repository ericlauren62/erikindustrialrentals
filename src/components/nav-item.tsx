"use client";

import { useState } from "react";

interface NavItemProps {
  label: string;
  subItems?: { label: string; href: string }[];
}

export default function NavItem({ label, subItems }: NavItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="text-white font-semibold px-4 py-2">{label}</button>
      {subItems && open && (
        <div className="absolute top-full left-0 bg-white shadow-lg z-50 w-64">
          {subItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
