type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  stock: number;
  description: string;
  image: string;
  createdAt: string;
};
type Category = {
  id: number;
  name: string;
};
type ProductReview = {
  id: number;
  productId: number;
  rating: number;
  text: string;
  createdAt: string;
};
export { Category, Product, ProductReview };
