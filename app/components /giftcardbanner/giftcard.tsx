'use client';

import Link from 'next/link';
import './_giftcard.scss';

export default function GiftCardBanner() {
  return (
    <div className="gift-card-banner">
      {/* Left Side - Content (50%) */}
      <div className="gift-card-banner__content">
        <p className="gift-card-banner__subtitle">The iSquare</p>
        
        <h2 className="gift-card-banner__title">
          Digital Gift Card
        </h2>
        
        <p className="gift-card-banner__description">
          The gift you can't go wrong with – simply choose the card value and
          add to bag.
        </p>
        
        <Link href="/gift-cards" className="gift-card-banner__button">
          Shop Now
        </Link>
      </div>

      {/* Right Side - Visual (50%) */}
      <div className="gift-card-banner__visual">
        {/* Top-right flower decoration */}
        <div className="gift-card-banner__flower gift-card-banner__flower--top-right" />

        {/* Bottom-left flower decoration */}
        <div className="gift-card-banner__flower gift-card-banner__flower--bottom-left" />

        {/* Center brand card */}
        <div className="gift-card-banner__card">
          <div className="gift-card-banner__brand">iSquare</div>
          <div className="gift-card-banner__location">Erode</div>
        </div>
      </div>
    </div>
  );
}
