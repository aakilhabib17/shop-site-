'use client';

import {
  Search as SearchIcon,
  FavoriteBorder as WishlistIcon,
  PersonOutline as AccountIcon,
  ShoppingBagOutlined as BagIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { useState } from 'react';
import Link from 'next/link';
import './_headermain.scss';

export default function HeaderMain() {
  const [searchValue, setSearchValue] = useState<string>('');
  const cartCount = 0;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search:', searchValue);
  };

  return (
    <div className="header-main">
      {/* Left: Search */}
      <div className="header-search">
        <form className="header-search-form" onSubmit={handleSearch}>
          <input
            type="text"
            className="header-search-input"
            placeholder="What Are You Looking For Today?"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            aria-label="search"
          />
          <button
            type="submit"
            className="header-search-button"
            aria-label="submit search"
          >
            <SearchIcon />
          </button>
        </form>
      </div>

      {/* Center: Logo */}
      <Link href="/" className="header-logo">
        <h1 className="header-logo-main">ISQUARE</h1>
        <p className="header-logo-sub">LONDON</p>
      </Link>

      {/* Right: Icons */}
      <div className="header-actions">
        <button className="header-icon-btn header-mobile-toggle" aria-label="menu">
          <MenuIcon />
        </button>


        <button className="header-icon-btn" aria-label="wishlist">
          <WishlistIcon />
        </button>

        <button className="header-icon-btn" aria-label="account">
          <AccountIcon />
        </button>

        <button className="header-icon-btn" aria-label="shopping bag">
          <BagIcon />
          {cartCount > 0 && <span className="header-bag-badge">{cartCount}</span>}
        </button>
      </div>
    </div>
  );
}
