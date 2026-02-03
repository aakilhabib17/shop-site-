'use client';

import { Container, Grid, Box } from '@mui/material';
import ProductCard from './components /ProductCard';
import Promo from './components /promo/promo'
import SaleBanner from './components /salebanner/salebanner'
import ButtonGrid from './components /buttongrid/buttongrid';
import InBloomBanner from './components /inbloombanner /inbloombanner';
import GiftCardBanner from './components /giftcardbanner/giftcard';
// import GiftCardBanner from './components /GiftCardBanner';


export default function Home() {
  return (
    <>
      {/* Promo */}
      <Promo />

      {/* Sale Hero Banner */}
      <SaleBanner/>

      {/* 4-Button Grid */}
      <ButtonGrid />

      {/* In Bloom Banner */}
      <InBloomBanner />

      {/* Gift Card Banner */}
      <GiftCardBanner />
    </>
  );
}
