
import { useEffect, useState } from "react";
import { Box, Typography, Pagination } from "@mui/material";
import { getProducts } from "../api/products";
import ProductCard from "../components/ProductCard";
import SortSelector from "../components/SortSelector";
import { sortProducts } from "../utils/sortProducts";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount_price: number;
  stock: number;
  category: string;
  created_at: string;
  updated_at: string;
  brand: string;
  weight: number;
  dimensions: string;
  color: string;
  rating: number;
  reviews_count: number;
  images: string[];
  seller_id: number;
  warranty_period: number;
  return_policy: string;
  barcode: string;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [apiPage, setApiPage] = useState(1);
  const [internalPage, setInternalPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [sortOption, setSortOption] = useState("price-asc");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getProducts(apiPage);

        const sortedProducts = sortProducts(data.products, sortOption);

        setProducts(sortedProducts);
        setTotalPages(data.pages * 2);
      } catch (err) {
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [apiPage, sortOption]);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    const newApiPage = Math.ceil(value / 2);
    setApiPage(newApiPage);
    setInternalPage(value);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const displayedProducts = products.slice(
    (internalPage % 2 === 1 ? 0 : 5),
    (internalPage % 2 === 1 ? 5 : 10)
  );

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, paddingTop: "2vh", width: "100%" }}>
      <Typography variant="h4" gutterBottom>Product List</Typography>

      <SortSelector sortOption={sortOption} onSortChange={setSortOption} />

      <Box sx={{ display: "grid", gridTemplateColumns: "1fr", gap: 2, width: "100%", maxWidth: "900px", marginLeft: "35vw" }}>
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price}
            stock={product.stock}
            brand={product.brand}
            rating={product.rating}
            reviews={product.reviews_count}
            image={`http://89.191.225.217${product.images[0]}`}
          />
        ))}
      </Box>

      <Pagination
        count={totalPages}
        page={internalPage}
        onChange={handlePageChange}
        color="primary"
        sx={{ marginTop: 3, marginBottom: "2vh" }}
      />
    </Box>
  );
};

export default Home;
