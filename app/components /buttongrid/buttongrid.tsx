'use client';

import Link from 'next/link';
import './_buttongrid.scss';

const buttons = [
  { label: "Women's Sale", href: '/women-sale' },
  { label: "Women's Special Deals", href: '/women-deals' },
  { label: "Men's Sale", href: '/men-sale' },
  { label: "Men's Special Deals", href: '/men-deals' },
];

export default function ButtonGrid() {
  return (
    <div className="button-grid">
      {buttons.map((btn, index) => (
        <Link
          key={index}
          href={btn.href}
          className="button-grid__item"
        >
          {btn.label}
        </Link>
      ))}
    </div>
  );
}
