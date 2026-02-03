'use client';

import Link from 'next/link';
import './_promo.scss';

export default function Promo() {
  return (
    <div className="hero-promo">
      <h2 className="hero-promo__title">Spend & Save</h2>
      
      <p className="hero-promo__subtitle">
        25% OFF ORDERS $250+ | USE CODE{' '}
        <span className="hero-promo__code">SAVE25</span>
      </p>
      
      <div className="hero-promo__buttons">
        <Link href="/women" className="hero-promo__button">
          Shop Women's
        </Link>
        <Link href="/men" className="hero-promo__button">
          Shop Men's
        </Link>
      </div>
    </div>
  );
}
