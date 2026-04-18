
import apples from "../assets/images/apples-800.webp";
import bananas from "../assets/images/bananas-800.webp";
import strawberries from "../assets/images/strawberries-800.webp";
import tomatoes from "../assets/images/tomatoes-800.webp";
import carrots from "../assets/images/carrots-800.webp";
import broccoli from "../assets/images/broccoli-800.webp";
import milk from "../assets/images/milk-800.webp";
import cheese from "../assets/images/cheese-800.webp";
import eggs from "../assets/images/eggs-800.webp";
import bread from "../assets/images/bread-800.webp";
import croissant from "../assets/images/croissant-800.webp";
import orangeJuice from "../assets/images/orange-juice-800.webp";
import water from "../assets/images/water-800.webp";
import chicken from "../assets/images/chicken-800.webp";
import rice from "../assets/images/rice-800.webp";
import almonds from "../assets/images/almonds-800.webp";

const products = [
  {
    id: 1,
    name: "Fresh Apples",
    category: "Fruits",
    price: 3.99,
    oldPrice: 5.49,
    image: apples,
    description:
      "Crisp and juicy red apples. Freshly picked from local farms. Rich in fiber and vitamin C.",
    rating: 4.5,
    stock: 50,
  },
  {
    id: 2,
    name: "Organic Bananas",
    category: "Fruits",
    price: 1.49,
    oldPrice: 1.99,
    image: bananas,
    description:
      "Sweet and ripe organic bananas. Perfect for smoothies or a healthy snack.",
    rating: 4.7,
    stock: 100,
  },
  {
    id: 3,
    name: "Fresh Strawberries",
    category: "Fruits",
    price: 4.99,
    oldPrice: 6.49,
    image: strawberries,
    description:
      "Juicy red strawberries, hand-picked and packed fresh to your door.",
    rating: 4.8,
    stock: 30,
  },
  {
    id: 4,
    name: "Fresh Tomatoes",
    category: "Vegetables",
    price: 2.49,
    oldPrice: 2.99,
    image: tomatoes,
    description:
      "Plump and ripe tomatoes. Perfect for salads, sauces, and sandwiches.",
    rating: 4.3,
    stock: 80,
  },
  {
    id: 5,
    name: "Organic Carrots",
    category: "Vegetables",
    price: 1.99,
    oldPrice: 2.49,
    image: carrots,
    description:
      "Fresh organic carrots with rich flavor. Great for juicing or cooking.",
    rating: 4.4,
    stock: 60,
  },
  {
    id: 6,
    name: "Green Broccoli",
    category: "Vegetables",
    price: 2.79,
    oldPrice: 3.29,
    image: broccoli,
    description:
      "Fresh broccoli florets packed with vitamins and minerals.",
    rating: 4.2,
    stock: 45,
  },
  {
    id: 7,
    name: "Whole Milk",
    category: "Dairy",
    price: 3.49,
    oldPrice: 3.99,
    image: milk,
    description:
      "Creamy whole milk from grass-fed cows. Locally sourced and delicious.",
    rating: 4.6,
    stock: 70,
  },
  {
    id: 8,
    name: "Cheddar Cheese",
    category: "Dairy",
    price: 5.99,
    oldPrice: 7.49,
    image: cheese,
    description:
      "Sharp cheddar cheese, aged to perfection. Great for sandwiches and snacks.",
    rating: 4.8,
    stock: 40,
  },
  {
    id: 9,
    name: "Farm Fresh Eggs",
    category: "Dairy",
    price: 4.49,
    oldPrice: 5.49,
    image: eggs,
    description:
      "Free-range eggs from local farms. A dozen fresh eggs, pure quality.",
    rating: 4.9,
    stock: 55,
  },
  {
    id: 10,
    name: "Whole Wheat Bread",
    category: "Bakery",
    price: 3.29,
    oldPrice: 3.99,
    image: bread,
    description:
      "Freshly baked whole wheat bread. Soft inside, crunchy crust.",
    rating: 4.5,
    stock: 35,
  },
  {
    id: 11,
    name: "Chocolate Croissant",
    category: "Bakery",
    price: 2.49,
    oldPrice: 2.99,
    image: croissant,
    description:
      "Buttery, flaky croissant filled with rich chocolate. A perfect treat.",
    rating: 4.7,
    stock: 25,
  },
  {
    id: 12,
    name: "Orange Juice",
    category: "Beverages",
    price: 4.29,
    oldPrice: 4.99,
    image: orangeJuice,
    description:
      "100% pure orange juice. Freshly squeezed, no added sugar.",
    rating: 4.6,
    stock: 60,
  },
  {
    id: 13,
    name: "Mineral Water",
    category: "Beverages",
    price: 1.29,
    oldPrice: 1.79,
    image: water,
    description:
      "Refreshing natural mineral water. Crisp and clean taste.",
    rating: 4.4,
    stock: 200,
  },
  {
    id: 14,
    name: "Chicken Breast",
    category: "Meat",
    price: 8.99,
    oldPrice: 10.99,
    image: chicken,
    description:
      "Fresh boneless chicken breast. High quality, perfect for grilling.",
    rating: 4.5,
    stock: 30,
  },
  {
    id: 15,
    name: "Brown Rice",
    category: "Grains",
    price: 5.49,
    oldPrice: 6.49,
    image: rice,
    description:
      "Organic brown rice, rich in fiber. A healthy everyday staple.",
    rating: 4.3,
    stock: 80,
  },
  {
    id: 16,
    name: "Almonds",
    category: "Grains",
    price: 7.99,
    oldPrice: 9.49,
    image: almonds,
    description:
      "Premium whole almonds. Great for snacking and baking.",
    rating: 4.7,
    stock: 45,
  },
];

export const categories = [
  "All",
  "Fruits",
  "Vegetables",
  "Dairy",
  "Bakery",
  "Beverages",
  "Meat",
  "Grains",
];

export default products;
