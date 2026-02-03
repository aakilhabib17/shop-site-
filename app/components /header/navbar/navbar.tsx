// 'use client';

// import Link from 'next/link';
// import './_navbar.scss';

// interface MegaMenuItem {
//   title: string;
//   links: { name: string; href: string }[];
// }

// interface NavItem {
//   name: string;
//   href: string;
//   megaMenu?: MegaMenuItem[];
//   isSale?: boolean;
// }

// export default function NavBar() {
//   const navigationItems: NavItem[] = [
//     {
//       name: 'Women',
//       href: '/women',
//       megaMenu: [
//         {
//           title: "Women's New Arrivals",
//           links: [
//             { name: "Women's New In", href: '/women/new' },
//             { name: 'Special Deals', href: '/women/deals' },
//             { name: 'Sale: Up to 50% off', href: '/women/sale' },
//           ],
//         },
//         {
//           title: 'Clothing',
//           links: [
//             { name: 'All Clothing', href: '/women/clothing' },
//             { name: 'Dresses', href: '/women/dresses' },
//             { name: 'Tops & T-Shirts', href: '/women/tops' },
//             { name: 'Coats & Jackets', href: '/women/coats' },
//             { name: 'Jumpsuits & Rompers', href: '/women/jumpsuits' },
//             { name: 'Skirts', href: '/women/skirts' },
//             { name: 'Sweaters', href: '/women/sweaters' },
//             { name: 'Pants & Shorts', href: '/women/pants' },
//           ],
//         },
//         {
//           title: 'Bags',
//           links: [
//             { name: 'All Bags', href: '/women/bags' },
//             { name: 'Clutches & Evening Bags', href: '/women/clutches' },
//             { name: 'Crossbody Bags', href: '/women/crossbody' },
//             { name: 'Icon & Signature Bags', href: '/women/icon-bags' },
//             { name: 'Shoulder Bags', href: '/women/shoulder' },
//             { name: 'Tote Bags', href: '/women/tote' },
//           ],
//         },
//         {
//           title: 'Accessories',
//           links: [
//             { name: 'All Accessories', href: '/women/accessories' },
//             { name: 'Wallets & Cardholders', href: '/women/wallets' },
//             { name: 'Jewelry', href: '/women/jewelry' },
//             { name: 'Hats, Gloves & Scarves', href: '/women/hats' },
//             { name: 'Socks', href: '/women/socks' },
//           ],
//         },
//       ],
//     },
//     {
//       name: 'Men',
//       href: '/men',
//       megaMenu: [
//         {
//           title: "Men's New Arrivals",
//           links: [
//             { name: "Men's New In", href: '/men/new' },
//             { name: 'Special Deals', href: '/men/deals' },
//           ],
//         },
//         {
//           title: 'Clothing',
//           links: [
//             { name: 'All Clothing', href: '/men/clothing' },
//             { name: 'Shirts', href: '/men/shirts' },
//             { name: 'T-Shirts & Polos', href: '/men/tshirts' },
//             { name: 'Sweaters', href: '/men/sweaters' },
//             { name: 'Jackets & Coats', href: '/men/jackets' },
//           ],
//         },
//         {
//           title: 'Accessories',
//           links: [
//             { name: 'All Accessories', href: '/men/accessories' },
//             { name: 'Bags', href: '/men/bags' },
//             { name: 'Wallets', href: '/men/wallets' },
//             { name: 'Belts', href: '/men/belts' },
//           ],
//         },
//         {
//           title: 'Shoes',
//           links: [
//             { name: 'All Shoes', href: '/men/shoes' },
//             { name: 'Sneakers', href: '/men/sneakers' },
//             { name: 'Dress Shoes', href: '/men/dress' },
//           ],
//         },
//       ],
//     },
//     {
//       name: 'Sale',
//       href: '/sale',
//       isSale: true,
//     },
//     {
//       name: 'Outlet',
//       href: '/outlet',
//     },
//     {
//       name: 'Gifting',
//       href: '/gifting',
//     },
//   ];

//   return (
//     <nav className="navbar">
//       <ul className="navbar-list">
//         {navigationItems.map((item) => (
//           <li key={item.name} className="navbar-item">
//             <Link
//               href={item.href}
//               className={`navbar-link ${item.isSale ? 'sale' : ''}`}
//             >
//               {item.name}
//             </Link>

//             {/* Mega Menu Dropdown */}
//             {item.megaMenu && (
//               <div className="navbar-mega-menu">
//                 <div className="navbar-mega-menu-content">
//                   {item.megaMenu.map((section) => (
//                     <div key={section.title} className="navbar-mega-menu-section">
//                       <h3>{section.title}</h3>
//                       <ul>
//                         {section.links.map((link) => (
//                           <li key={link.name}>
//                             <Link href={link.href}>{link.name}</Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }


'use client';

import Link from 'next/link';
import { KeyboardArrowDown } from '@mui/icons-material';
import './_navbar.scss';

interface MegaMenuItem {
  title: string;
  links: { name: string; href: string }[];
}

interface NavItem {
  name: string;
  href: string;
  megaMenu?: MegaMenuItem[];
  isSale?: boolean;
}

export default function NavBar() {
  const navigationItems: NavItem[] = [
    {
      name: 'Women',
      href: '/women',
      megaMenu: [
        {
          title: "Women's New Arrivals",
          links: [
            { name: "Women's New In", href: '/women/new' },
            { name: 'Special Deals', href: '/women/deals' },
            { name: 'Sale: Up to 50% off', href: '/women/sale' },
          ],
        },
        {
          title: 'Clothing',
          links: [
            { name: 'All Clothing', href: '/women/clothing' },
            { name: 'Dresses', href: '/women/dresses' },
            { name: 'Tops & T-Shirts', href: '/women/tops' },
            { name: 'Coats & Jackets', href: '/women/coats' },
            { name: 'Jumpsuits & Rompers', href: '/women/jumpsuits' },
            { name: 'Skirts', href: '/women/skirts' },
            { name: 'Sweaters', href: '/women/sweaters' },
            { name: 'Pants & Shorts', href: '/women/pants' },
          ],
        },
        {
          title: 'Bags',
          links: [
            { name: 'All Bags', href: '/women/bags' },
            { name: 'Clutches & Evening Bags', href: '/women/clutches' },
            { name: 'Crossbody Bags', href: '/women/crossbody' },
            { name: 'Icon & Signature Bags', href: '/women/icon-bags' },
            { name: 'Shoulder Bags', href: '/women/shoulder' },
            { name: 'Tote Bags', href: '/women/tote' },
          ],
        },
        {
          title: 'Accessories',
          links: [
            { name: 'All Accessories', href: '/women/accessories' },
            { name: 'Wallets & Cardholders', href: '/women/wallets' },
            { name: 'Jewelry', href: '/women/jewelry' },
            { name: 'Hats, Gloves & Scarves', href: '/women/hats' },
            { name: 'Socks', href: '/women/socks' },
          ],
        },
      ],
    },
    {
      name: 'Men',
      href: '/men',
      megaMenu: [
        {
          title: "Men's New Arrivals",
          links: [
            { name: "Men's New In", href: '/men/new' },
            { name: 'Special Deals', href: '/men/deals' },
          ],
        },
        {
          title: 'Clothing',
          links: [
            { name: 'All Clothing', href: '/men/clothing' },
            { name: 'Shirts', href: '/men/shirts' },
            { name: 'T-Shirts & Polos', href: '/men/tshirts' },
            { name: 'Sweaters', href: '/men/sweaters' },
            { name: 'Jackets & Coats', href: '/men/jackets' },
          ],
        },
        {
          title: 'Accessories',
          links: [
            { name: 'All Accessories', href: '/men/accessories' },
            { name: 'Bags', href: '/men/bags' },
            { name: 'Wallets', href: '/men/wallets' },
            { name: 'Belts', href: '/men/belts' },
          ],
        },
        {
          title: 'Shoes',
          links: [
            { name: 'All Shoes', href: '/men/shoes' },
            { name: 'Sneakers', href: '/men/sneakers' },
            { name: 'Dress Shoes', href: '/men/dress' },
          ],
        },
      ],
    },
    {
      name: 'Sale',
      href: '/sale',
      isSale: true,
      megaMenu: [
        {
          title: "Women's Sale",
          links: [
            { name: 'All Sale Items', href: '/sale/women' },
            { name: 'Up to 50% Off', href: '/sale/women/50-off' },
          ],
        },
        {
          title: "Men's Sale",
          links: [
            { name: 'All Sale Items', href: '/sale/men' },
            { name: 'Up to 50% Off', href: '/sale/men/50-off' },
          ],
        },
      ],
    },
    {
      name: 'Outlet',
      href: '/outlet',
      megaMenu: [
        {
          title: 'Outlet Deals',
          links: [
            { name: 'Women Outlet', href: '/outlet/women' },
            { name: 'Men Outlet', href: '/outlet/men' },
          ],
        },
      ],
    },
    {
      name: 'Gifting',
      href: '/gifting',
      megaMenu: [
        {
          title: 'Gift Ideas',
          links: [
            { name: 'Gifts for Her', href: '/gifting/her' },
            { name: 'Gifts for Him', href: '/gifting/him' },
          ],
        },
      ],
    },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navigationItems.map((item) => (
          <li 
            key={item.name} 
            className="navbar-item"
            onMouseEnter={() => console.log(`Hovering: ${item.name}`)}
          >
            <Link
              href={item.href}
              className={`navbar-link ${item.isSale ? 'sale' : ''}`}
            >
              <span>{item.name}</span>
              {item.megaMenu && (
                <span className="navbar-link-icon">
                  <KeyboardArrowDown fontSize="small" />
                </span>
              )}
            </Link>

            {/* Mega Menu Dropdown */}
            {item.megaMenu && (
              <div className="navbar-mega-menu">
                <div className="navbar-mega-menu-content">
                  {item.megaMenu.map((section) => (
                    <div key={section.title} className="navbar-mega-menu-section">
                      <h3>{section.title}</h3>
                      <ul>
                        {section.links.map((link) => (
                          <li key={link.name}>
                            <Link href={link.href}>{link.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
