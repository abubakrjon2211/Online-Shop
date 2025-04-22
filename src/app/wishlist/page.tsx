'use client'
import { useState } from "react"
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Chip,
  Rating,
  Container,
} from "@mui/material"
import {
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material"

import img from "@/app/images/Frame 609.png"
import img1 from "@/app/images/Frame 610.png"
import img2 from "@/app/images/Frame 608.png"
import img3 from "@/app/images/Frame 608 (1).png"
import img4 from "@/app/images/Frame 604.png"
import img5 from "@/app/images/Frame 613.png"
import img6 from "@/app/images/Frame 611.png"
import img7 from "@/app/images/Frame 612.png"

// Типы данных
interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  isNew?: boolean
  rating?: number
  reviews?: number
  section: "wishlist" | "recommended"
}

export default function WishlistPage() {
  // Начальные данные продуктов
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Gucci duffle bag",
      price: 960,
      originalPrice: 1160,
      discount: 35,
      image: "/placeholder.svg?height=200&width=200",
      section: "wishlist",
    },
    {
      id: 2,
      name: "RGB liquid CPU Cooler",
      price: 1960,
      image: "/placeholder.svg?height=200&width=200",
      section: "wishlist",
    },
    {
      id: 3,
      name: "GP11 Shooter USB Gamepad",
      price: 550,
      image: "/placeholder.svg?height=200&width=200",
      section: "wishlist",
    },
    {
      id: 4,
      name: "Quilted Satin Jacket",
      price: 750,
      image: "/placeholder.svg?height=200&width=200",
      section: "wishlist",
    },
    {
      id: 5,
      name: "ASUS FHD Gaming Laptop",
      price: 960,
      originalPrice: 1160,
      discount: 35,
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      reviews: 65,
      section: "recommended",
    },
    {
      id: 6,
      name: "IPS LCD Gaming Monitor",
      price: 1160,
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      reviews: 65,
      section: "recommended",
    },
    {
      id: 7,
      name: "HAVIT HV-G92 Gamepad",
      price: 560,
      image: "/placeholder.svg?height=200&width=200",
      isNew: true,
      rating: 5,
      reviews: 65,
      section: "recommended",
    },
    {
      id: 8,
      name: "AK-900 Wired Keyboard",
      price: 200,
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      reviews: 65,
      section: "recommended",
    },
  ])

  // Получаем продукты для списка желаний и рекомендаций
  const wishlistProducts = products.filter((product) => product.section === "wishlist")
  const recommendedProducts = products.filter((product) => product.section === "recommended")

  // Функция для удаления продукта из списка желаний
  const handleRemoveFromWishlist = (productId: number) => {
    setProducts(products.filter((product) => product.id !== productId))
  }

  // Функция для добавления в корзину
  const handleAddToCart = (productId: number) => {
    console.log(`Added product ${productId} to cart`)
    // Здесь будет логика добавления в корзину
  }

  // Функция для перемещения всех товаров в корзину
  const handleMoveAllToBag = () => {
    console.log("Moving all items to bag")
    // Здесь будет логика перемещения всех товаров в корзину
  }

  return (
    <Container maxWidth="lg" sx={{ py: 3, px: { xs: 2, sm: 3 }, padding: "100px" }}>
      {/* Заголовок и кнопка "Переместить все в корзину" */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h5" component="h1" fontWeight="500">
          Wishlist ({wishlistProducts.length})
        </Typography>
        <Button
          variant="outlined"
          onClick={handleMoveAllToBag}
          sx={{
            borderRadius: 0.5,
            px: 2,
            py: 1,
            textTransform: "none",
            fontWeight: 400,
            borderColor: "#ddd",
            color: "#000",
            "&:hover": {
              borderColor: "#bbb",
              bgcolor: "transparent",
            },
          }}
        >
          Move All To Bag
        </Button>
      </Box>

      {/* Сетка товаров в списке желаний */}
      <Grid container spacing={2} sx={{ mb: 5 }}>
        {wishlistProducts.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                borderRadius: 0,
                boxShadow: "none",
                bgcolor: "#f9f9f9",
              }}
            >
              {product.discount && (
                <Chip
                  label={`-${product.discount}%`}
                  color="error"
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    fontWeight: "bold",
                    borderRadius: 0,
                    height: "24px",
                  }}
                />
              )}
              <IconButton
                sx={{ position: "absolute", top: 5, right: 5, color: "#000" }}
                onClick={() => handleRemoveFromWishlist(product.id)}
              >
                <DeleteIcon />
              </IconButton>
              <CardMedia
                component="img"
                height="180"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: "contain", p: 2 }}
              />
              <CardContent sx={{ flexGrow: 1, pb: 0, px: 2, pt: 1 }}>
                <Typography gutterBottom variant="body1" component="div" sx={{ fontWeight: 500 }}>
                  {product.name}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography variant="body1" color="error" fontWeight="500">
                    ${product.price}
                  </Typography>
                  {product.originalPrice && (
                    <Typography variant="body2" color="text.secondary" sx={{ textDecoration: "line-through" }}>
                      ${product.originalPrice}
                    </Typography>
                  )}
                </Box>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 1 }}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<ShoppingCartIcon />}
                  onClick={() => handleAddToCart(product.id)}
                  sx={{
                    bgcolor: "black",
                    "&:hover": { bgcolor: "#333" },
                    borderRadius: 0,
                    py: 0.5,
                    textTransform: "none",
                  }}
                >
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Секция "Рекомендовано для вас" */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              width: 6,
              height: 24,
              bgcolor: "#e74c3c",
              mr: 1.5,
              borderRadius: 0,
            }}
          />
          <Typography variant="h6" component="h2" fontWeight="500">
            Just For You
          </Typography>
        </Box>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 0.5,
            px: 2,
            py: 0.75,
            textTransform: "none",
            fontWeight: 400,
            borderColor: "#ddd",
            color: "#000",
            "&:hover": {
              borderColor: "#bbb",
              bgcolor: "transparent",
            },
          }}
        >
          See All
        </Button>
      </Box>

      {/* Сетка рекомендованных товаров */}
      <Grid container spacing={2}>
        {recommendedProducts.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                borderRadius: 0,
                boxShadow: "none",
                bgcolor: "#f9f9f9",
              }}
            >
              {product.discount && (
                <Chip
                  label={`-${product.discount}%`}
                  color="error"
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    fontWeight: "bold",
                    borderRadius: 0,
                    height: "24px",
                  }}
                />
              )}
              {product.isNew && (
                <Chip
                  label="NEW"
                  color="success"
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    fontWeight: "bold",
                    borderRadius: 0,
                    height: "24px",
                    bgcolor: "#4caf50",
                  }}
                />
              )}
              <IconButton sx={{ position: "absolute", top: 5, right: 5, color: "#000" }}>
                <VisibilityIcon />
              </IconButton>
              <CardMedia
                component="img"
                height="180"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: "contain", p: 2 }}
              />
              <CardContent sx={{ flexGrow: 1, pb: 0, px: 2, pt: 1 }}>
                <Typography gutterBottom variant="body1" component="div" sx={{ fontWeight: 500 }}>
                  {product.name}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography variant="body1" color="error" fontWeight="500">
                    ${product.price}
                  </Typography>
                  {product.originalPrice && (
                    <Typography variant="body2" color="text.secondary" sx={{ textDecoration: "line-through" }}>
                      ${product.originalPrice}
                    </Typography>
                  )}
                </Box>
                {product.rating && (
                  <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
                    <Rating value={product.rating} readOnly size="small" sx={{ color: "#f39c12" }} />
                    {product.reviews && (
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                        ({product.reviews})
                      </Typography>
                    )}
                  </Box>
                )}
              </CardContent>
              <CardActions sx={{ p: 2, pt: 1 }}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<ShoppingCartIcon />}
                  onClick={() => handleAddToCart(product.id)}
                  sx={{
                    bgcolor: "black",
                    "&:hover": { bgcolor: "#333" },
                    borderRadius: 0,
                    py: 0.5,
                    textTransform: "none",
                  }}
                >
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
