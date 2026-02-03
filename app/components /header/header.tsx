'use client';

import TopBar from './topbar/topbar';
import HeaderMain from './headermain/headermain';
import NavBar from './navbar/navbar';
import './_header.scss';

export default function Header() {
  return (
    <header className="header-wrapper">
      <TopBar />
      <div className="header-content">
        <HeaderMain />
        <NavBar />
      </div>
    </header>
  );
}
