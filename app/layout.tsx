// import type { Metadata } from 'next';
// import { Roboto } from 'next/font/google';
// import ThemeRegistry from './ThemeRegistry';
// import Header from './components /header/header';
// import Footer from './components /footer/footer';
// import './styles/main.scss'

// const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// export const metadata: Metadata = {
//   title: 'iSquare - Fashion & Lifestyle',
//   description: 'Welcome to our online store',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={roboto.className}>
//         <ThemeRegistry>
//           <Header />
//           {children}
//           <Footer />
//         </ThemeRegistry>
//       </body>
//     </html>
//   );
// }



import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import ThemeRegistry from './ThemeRegistry';
import Header from './components /header/header';
import Footer from './components /footer/footer';
import './styles/main.scss';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'iSquare - Fashion & Lifestyle',
  description: 'Welcome to our online store',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <Header />
            {children}
            <Footer />
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
