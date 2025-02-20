
import { Product } from "../pages/Home";

export const sortProducts = (products: Product[], sortOption: string): Product[] => {
  let sortedProducts = [...products];

  switch (sortOption) {
    case "price-asc":
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case "stock-asc":
      sortedProducts = sortedProducts.sort((a, b) => a.stock - b.stock);
      break;
    case "stock-desc":
      sortedProducts = sortedProducts.sort((a, b) => b.stock - a.stock);
      break;
    case "brand-asc":
      sortedProducts = sortedProducts.sort((a, b) => a.brand.localeCompare(b.brand));
      break;
    case "brand-desc":
      sortedProducts = sortedProducts.sort((a, b) => b.brand.localeCompare(a.brand));
      break;
    case "rating-desc":
      sortedProducts = sortedProducts.sort((a, b) => b.rating - a.rating);
      break;
    case "reviews-asc":
      sortedProducts = sortedProducts.sort((a, b) => a.reviews_count - b.reviews_count);
      break;
    case "reviews-desc":
      sortedProducts = sortedProducts.sort((a, b) => b.reviews_count - a.reviews_count);
      break;
    default:
      break;
  }

  return sortedProducts;
};
