'use client';

import Image from 'next/image';
import Link from 'next/link';
import saleHeroImage from '@/app/assets/salebanner.png';
import './_salebanner.scss';

export default function SaleBanner() {
  return (
    <Link href="/sale" className="sale-hero">
      <Image
        src={saleHeroImage}
        alt="Sale Banner"
        width={1920}
        height={600}
        priority
        quality={90}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </Link>
  );
}


