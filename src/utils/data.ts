import ShopSvg from "@/assets/shop";
import GrowthSvg from "@/assets/growth";
import IdeaSvg from "@/assets/idea";
import UpSvg from "@/assets/up";

export const BACKEND = "localhost:8000";

export const aboutData = [
  {
    id: 1,
    title: `Your shop Your rules`,
    text: `Craft your unique storefront that reflects your brand identity.
                   With our user-friendly tools, you're just a few clicks away from
                    designing a shop that stands out.`,
    img: ShopSvg(),
  },
  {
    id: 2,
    title: "Showcase your creations",
    text: `Display your products in all their glory. From handmade crafts to trendy fashion
          let your items shinen and captivate your customers' attention.`,
    img: IdeaSvg(),
  },
  {
    id: 3,
    title: "Reach the world",
    text: `Break geographical barriers and sell to customers around the world. 
    Our platform's robust features ensure a seamless shopping experience,
     no matter where your customers are.`,
    img: GrowthSvg(),
  },
  {
    id: 4,
    title: "Grow your business",
    text: `Our platform is designed to help your businesses thrive.
     With integrated marketing tools, analytics, support, you're set up for greater things.`,
    img: UpSvg(),
  },
];

export const cardData = [
  {
    id: 1,
    svg: "",
    title: "",
    text: "",
  },
  {
    id: 2,
    svg: "",
    title: "",
    text: "",
  },
  {
    id: 3,
    svg: "",
    title: "",
    text: "",
  },
];
