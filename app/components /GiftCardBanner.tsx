'use client';

import { Box, Typography, Button } from '@mui/material';

export default function GiftCardBanner() {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        minHeight: '500px',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      {/* Left Side - Mint Green Background with Text */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#d4ddd4',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          p: { xs: 4, md: 8 },
          minHeight: { xs: '300px', md: '500px' },
        }}
      >
        <Typography
          sx={{
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.25em',
            color: '#000',
            mb: 2,
          }}
        >
          THE I S Q U A R E
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '2.2rem', md: '3rem' },
            fontWeight: 700,
            letterSpacing: '0.25em',
            color: '#000',
            mb: 2.5,
          }}
        >
          DIGITAL GIFT CARD
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '0.95rem', md: '1rem' },
            color: '#000',
            lineHeight: 1.7,
            mb: 4,
            maxWidth: '460px',
          }}
        >
          The gift you can't go wrong with – simply choose the card value and
          add to bag.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#000',
            color: '#fff',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            px: 5,
            py: 1.5,
            borderRadius: '0',
            boxShadow: 'none',
            textTransform: 'uppercase',
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
            '&:hover': {
              backgroundColor: '#333',
              boxShadow: 'none',
            },
          }}
        >
          Shop Now
        </Button>
      </Box>

      {/* Right Side - Real Flower Image with Centered Logo Card */}
      <Box
        sx={{
          flex: 1,
          position: 'relative',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: { xs: '300px', md: '500px' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Top-right flower decoration */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: { xs: '40%', md: '35%' },
            height: { xs: '35%', md: '40%' },
            backgroundImage:
              'url(https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=400&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Bottom-left flower decoration */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: { xs: '40%', md: '35%' },
            height: { xs: '35%', md: '40%' },
            backgroundImage:
              'url(https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=400&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Centered Logo Card */}
        <Box
          sx={{
            position: 'relative',
            backgroundColor: 'rgba(200, 221, 209, 0.95)',
            borderRadius: '20px',
            p: { xs: 5, md: 8 },
            textAlign: 'center',
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
            zIndex: 2,
            backdropFilter: 'blur(5px)',
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '2.8rem', md: '4rem' },
              fontWeight: 700,
              letterSpacing: '0.6em',
              color: '#ff3366',
              lineHeight: 1,
              mb: 0.5,
            }}
          >
            I S Q U A R E
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.1rem', md: '1.5rem' },
              fontWeight: 400,
              letterSpacing: '0.7em',
              color: '#ff3366',
            }}
          >
            E R O D E
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
