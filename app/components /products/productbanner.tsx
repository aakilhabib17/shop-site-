'use client';

import ProductCard from '../../corecomponents /productcard/productcard';
import { newArrivalsData } from './data';
import './_productbanner.scss';

export default function ProductBanner() {
  return (
    <section className="new-arrivals">
   
      <div className="new-arrivals__carousel">
        <div className="new-arrivals__wrapper">
          {newArrivalsData.map((product) => (
            <div key={product.id} className="new-arrivals__item">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
