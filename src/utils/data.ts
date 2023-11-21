import ShopSvg from "@/assets/shop";
import GrowthSvg from "@/assets/growth";
import IdeaSvg from "@/assets/idea";
import UpSvg from "@/assets/up";
import { create } from "zustand";

export const BACKEND = "http://127.0.0.1:8000";
export const SITENAME = "Shopspaces";

export const useProductStore = create((set) => ({
  items: [],
  addProducts: (prods: any) => set({ items: prods }),
}));

export const aboutData = [
  {
    id: 1,
    title: `Your shop Your rules`,
    text: `Craft your unique storefront that reflects your brand identity.
                   With our user-friendly tools, you're just a few clicks away from
                    designing a shop that stands out.`,
    img: ShopSvg,
  },
  {
    id: 2,
    title: "Showcase your creations",
    text: `Display your products in all their glory. From handmade crafts to trendy fashion
          let your items shinen and captivate your customers' attention.`,
    img: IdeaSvg,
  },
  {
    id: 3,
    title: "Reach the world",
    text: `Break geographical barriers and sell to customers around the world. 
    Our platform's robust features ensure a seamless shopping experience,
     no matter where your customers are.`,
    img: GrowthSvg,
  },
  {
    id: 4,
    title: "Grow your business",
    text: `Our platform is designed to help your businesses thrive.
     With integrated marketing tools, analytics, support, you're set up for greater things.`,
    img: UpSvg,
  },
];

export const cardData = [
  {
    id: 1,
    svg: "https://www.svgrepo.com/show/530437/safe-and-stable.svg",
    title: "Secure transactions",
    text: "Rest easy knowing that our platform ensures safe and secure payment processing, Our robust security and top notch encryption keeps every transaction safe.",
  },
  {
    id: 2,
    svg: "https://www.svgrepo.com/show/530443/interface-control.svg",
    title: "Business analytics",
    text: "Our platform is designted to help your business thrive. With integrated support, analytics and marketing tools, you're set-up for success ",
  },
  {
    id: 3,
    svg: "https://www.svgrepo.com/show/530452/mobile-app.svg",
    title: "Easy management",
    text: "Keep tack of orders, manage inventory, and update product listing with ease. Spend less time worrying about technicalities and more time doing what you love.",
  },
];

export const productsData = [
  {
    id: 1,
    name: "Laptop",
    brand: "XYZ",
    price: 999.99,
    quantity: 50,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smartphone",
    brand: "ABC",
    price: 599.99,
    quantity: 100,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Running Shoes",
    brand: "Nike",
    price: 79.99,
    quantity: 200,
    category: "Footwear",
  },
  {
    id: 4,
    name: "Backpack",
    brand: "Adidas",
    price: 49.99,
    quantity: 75,
    category: "Fashion",
  },
  {
    id: 5,
    name: "Digital Camera",
    brand: "Canon",
    price: 449.99,
    quantity: 30,
    category: "Electronics",
  },
  {
    id: 6,
    name: "T-shirt",
    brand: "Gap",
    price: 19.99,
    quantity: 150,
    category: "Fashion",
  },
  {
    id: 7,
    name: "Coffee Maker",
    brand: "Keurig",
    price: 129.99,
    quantity: 40,
    category: "Appliances",
  },
  {
    id: 8,
    name: "Gaming Console",
    brand: "Sony",
    price: 299.99,
    quantity: 60,
    category: "Electronics",
  },
  {
    id: 9,
    name: "Watch",
    brand: "Casio",
    price: 89.99,
    quantity: 90,
    category: "Accessories",
  },
  {
    id: 10,
    name: "Blender",
    brand: "Hamilton Beach",
    price: 39.99,
    quantity: 25,
    category: "Appliances",
  },
];


export const pricingCats = [
  {
    name: "Starter",
    description: "Ideal for small businesses getting started",
    price: {
      monthly: 29.99,
      annual: 299.99,
    },
    features: [
      "Basic Store Setup",
      "Limited Product Listings",
      "Standard Support",
    ],
  },
  {
    name: "Standard",
    description: "Great for growing businesses with moderate needs",
    price: {
      monthly: 59.99,
      annual: 599.99,
    },
    features: [
      "Unlimited Product Listings",
      "Advanced Analytics",
      "Payment Processing",
      "Priority Support",
      "Mobile Optimization",
      "Priority Support",
    ],
  },
  {
    name: "Business",
    description: "Perfect for established businesses with high volume",
    price: {
      monthly: 99.99,
      annual: 999.99,
    },
    features: [
      "Customizable Themes",
      "Abandoned Cart Recovery",
      "API Access",
      "Dedicated Account Manager",
      "Custom Domain",
      "24/7 Support",
    ],
  },
  // {
  //   name: "Enterprise",
  //   description: "Tailored solutions for large-scale enterprises",
  //   price: {
  //     contactSales: true,
  //   },
  //   features: [
  //     "Custom Development",
  //     "Multi-Store Management",
  //     "24/7 Priority Support",
  //     "Service Level Agreement (SLA)",
  //   ],
  // },
];