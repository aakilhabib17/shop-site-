'use client';

import {
  Search as SearchIcon,
  FavoriteBorder as WishlistIcon,
  PersonOutline as AccountIcon,
  ShoppingBagOutlined as BagIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { useState } from 'react';
import Link from 'next/link';
import './_headermain.scss';

interface NavItem {
  name: string;
  href: string;
  isSale?: boolean;
}

export default function HeaderMain() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const cartCount = 0;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search:', searchValue);
  };

  const navigationItems: NavItem[] = [
    { name: 'Women', href: '/women' },
    { name: 'Men', href: '/men' },
    { name: 'Sale', href: '/sale', isSale: true },
    { name: 'Outlet', href: '/outlet' },
    { name: 'Gifting', href: '/gifting' },
  ];

  return (
    <>
      <div className="header-main">
        {/* MOBILE MENU BUTTON - LEFT */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>

        {/* DESKTOP SEARCH - LEFT */}
        <div className="desktop-search">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="What Are You Looking For Today?"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button type="submit">
              <SearchIcon />
            </button>
          </form>
        </div>

        {/* LOGO - CENTER */}
        <Link href="/" className="logo">
          <div className="logo-main">FOOT STEPS</div>
          <div className="logo-sub">LONDON</div>
        </Link>

        {/* ICONS - RIGHT */}
        <div className="header-icons">
          <button aria-label="wishlist">
            <WishlistIcon />
          </button>
          <button aria-label="account">
            <AccountIcon />
          </button>
          <button aria-label="bag">
            <BagIcon />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="mobile-content">
            <div className="mobile-header">
              <h2>SHOP BY</h2>
              <button onClick={() => setMobileMenuOpen(false)}>
                <CloseIcon />
              </button>
            </div>
            <nav className="mobile-nav">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={item.isSale ? 'sale' : ''}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  <span>+</span>
                </Link>
              ))}
            </nav>
            <div className="mobile-footer">
              <button><MenuIcon /></button>
              <button><WishlistIcon /></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
