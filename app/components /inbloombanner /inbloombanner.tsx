'use client';

import Image from 'next/image';
import Link from 'next/link';
import inBloomImage from '@/app/assets/bloombanner.png'; // Update with your actual image path
import './_inbloombanner.scss';

export default function InBloomBanner() {
  return (
    <div className="in-bloom-banner">
      {/* Left Side - Image (50%) */}
      <div 
        className="in-bloom-banner__image"
        style={{ backgroundImage: `url(${inBloomImage.src})` }}
      />

      {/* Right Side - Content (50%) */}
      <div className="in-bloom-banner__content">
        <h2 className="in-bloom-banner__title">IN BLOOM</h2>

        <p className="in-bloom-banner__description">
          Your new-year wardrobe, blooming boldly from the start. Discover a
          bouquet of playful prints, rich shades and luxe fabrics with the IN
          BLOOM collection.
        </p>

        <div className="in-bloom-banner__buttons">
          <Link href="/women/new-arrivals" className="in-bloom-banner__button">
            Women's New Arrivals
          </Link>
          <Link href="/men/new-arrivals" className="in-bloom-banner__button">
            Men's New Arrivals
          </Link>
        </div>
      </div>
    </div>
  );
}
