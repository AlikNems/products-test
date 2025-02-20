import React from "react";
import { Card, CardContent, Typography, Box, Rating, CardMedia } from "@mui/material";
import { styled } from "@mui/system";

interface ProductCardProps {
  title: string;
  price: number;
  stock: number;
  brand: string;
  rating: number;
  reviews: number;
  image: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400, 
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: `0px 4px 20px rgba(0, 0, 0, 0.15)`,
  },
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
  backgroundColor: "rgb(100, 97, 97)",
}));

const ProductCard: React.FC<ProductCardProps> = ({ title, price, stock, brand, rating, reviews, image }) => {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{ objectFit: "cover", borderRadius: "10px 10px 0 0" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2">Brand: {brand}</Typography>
          <Typography variant="body2">Price: ${price.toFixed(2)}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "8px" }}>
          <Typography variant="body2">In Stock: {stock}</Typography>
        </Box>
        <Box sx={{ marginTop: "8px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body2">Rating:</Typography>
            <Rating value={rating} readOnly sx={{ marginLeft: "8px" }} />
          </Box>
          <Typography variant="body2">Reviews: {reviews}</Typography>
        </Box>
      </CardContent>
    </StyledCard>
  );
};



export default ProductCard;
