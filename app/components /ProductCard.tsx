'use client';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Rating,
  Box,
  Chip,
} from '@mui/material';
import { ShoppingCart, Favorite } from '@mui/icons-material';

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  discount?: number;
  badge?: string;
}

export default function ProductCard({
  id,
  title,
  image,
  price,
  rating,
  reviews,
  discount = 0,
  badge,
}: ProductCardProps) {
  const discountedPrice = discount > 0 ? price * (1 - discount / 100) : price;

  return (
    <Card
      sx={{
        maxWidth: 280,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
        },
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
          sx={{
            objectFit: 'cover',
            '&:hover': {
              transform: 'scale(1.05)',
              transition: 'transform 0.3s ease',
            },
          }}
        />

        {badge && (
          <Chip
            label={badge}
            color="primary"
            size="small"
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
            }}
          />
        )}

        {discount > 0 && (
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              left: 8,
              backgroundColor: 'error.main',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '0.75rem',
              fontWeight: 'bold',
            }}
          >
            -{discount}%
          </Box>
        )}
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="h3"
          sx={{
            height: '48px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {title}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Rating value={rating} readOnly size="small" />
          <Typography variant="body2" color="text.secondary">
            ({reviews})
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
            ₹{discountedPrice.toFixed(2)}
          </Typography>
          {discount > 0 && (
            <Typography
              variant="body2"
              sx={{
                textDecoration: 'line-through',
                color: 'text.secondary',
              }}
            >
              ₹{price.toFixed(2)}
            </Typography>
          )}
        </Box>
      </CardContent>

      <Box sx={{ p: 1, display: 'flex', gap: 1 }}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          startIcon={<ShoppingCart />}
          size="small"
        >
          Add to Cart
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          sx={{ minWidth: '40px', p: 0 }}
        >
          <Favorite fontSize="small" />
        </Button>
      </Box>
    </Card>
  );
}
