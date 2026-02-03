'use client';

import {
  Facebook,
  Instagram,
  Pinterest,
  YouTube,
} from '@mui/icons-material';
import Link from 'next/link';
import './_footer.scss';

const footerLinks = {
  isquare: {
    title: 'I S Q U A R E',
    links: [
      { label: "Women's Clothing", href: '/women-clothing' },
      { label: "Men's Clothing", href: '/men-clothing' },
      { label: "Women's Bags", href: '/womens-bags' },
      { label: 'Gift Card', href: '/gift-card' },
      { label: 'Grooming', href: '/grooming' },
    ],
  },
  customerService: {
    title: 'CUSTOMER SERVICE',
    links: [
      { label: 'Help & FAQs', href: '/help' },
      { label: 'Delivery & Returns', href: '/delivery' },
      { label: 'Customer Service', href: '/customer-service' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Track My Order', href: '/track-order' },
      { label: 'Gift Card Balance', href: '/gift-card-balance' },
    ],
  },
  legal: {
    title: 'LEGAL',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Returns Policy', href: '/returns' },
      { label: 'Terms & Conditions', href: '/terms-conditions' },
    ],
  },
};

const paymentMethods = [
  'AMERICAN EXPRESS',
  'APPLE PAY',
  'DINERS CLUB',
  'DISCOVER',
  'GOOGLE PAY',
  'IDEAL',
  'MASTERCARD',
  'PAYPAL',
  'SHOP PAY',
  'VENMO',
  'VISA',
];

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content - 5 Column Grid */}
        <div className="footer-grid">
          {/* Column 1: iSquare */}
          <div className="footer-column">
            <h3 className="footer-column-title">{footerLinks.isquare.title}</h3>
            <div className="footer-links">
              {footerLinks.isquare.links.map((link) => (
                <Link key={link.label} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Customer Service */}
          <div className="footer-column">
            <h3 className="footer-column-title">{footerLinks.customerService.title}</h3>
            <div className="footer-links">
              {footerLinks.customerService.links.map((link) => (
                <Link key={link.label} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Legal */}
          <div className="footer-column">
            <h3 className="footer-column-title">{footerLinks.legal.title}</h3>
            <div className="footer-links">
              {footerLinks.legal.links.map((link) => (
                <Link key={link.label} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-column newsletter-section">
            <h3 className="footer-column-title">SIGN UP TO OUR NEWSLETTER</h3>
            <p className="newsletter-description">
              For more information (including how to unsubscribe) please see our Help &amp; FAQs and our Privacy Policy.
            </p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                SUBSCRIBE
              </button>
            </form>
          </div>

          {/* Column 5: Accessibility Statement */}
          <div className="footer-column accessibility-section">
            <p className="accessibility-text">
                iSquare is committed to ensuring that our website is accessible for all users, and we endeavor to take the necessary steps to continually improve its usability in compliance with applicable laws. If you have any difficulty navigating the content on our site or have any accessibility-related queries or comments, please email us at{' '}
                <a href="mailto:customerservice@isquare.com">
                  customerservice@isquare.com
                </a>
                {' '}or visit our{' '}
                <Link href="/help">
                  FAQ page
                </Link>
                .
            </p>
          </div>
        </div>

        {/* Social Media & Payment Icons */}
        <div className="footer-bottom">
          {/* Social Media Icons */}
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Facebook"
            >
              <Facebook fontSize="small" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Twitter"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Instagram"
            >
              <Instagram fontSize="small" />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Pinterest"
            >
              <Pinterest fontSize="small" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="YouTube"
            >
              <YouTube fontSize="small" />
            </a>
          </div>

          {/* Payment Methods */}
          <div className="payment-icons">
            {paymentMethods.map((payment) => (
              <span key={payment} className="payment-method">
                {payment}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          "iSquare" is a trademark of ABC-TB (FCO) UA Limited ©2025 ABC-TB (FCO) UA Limited. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
