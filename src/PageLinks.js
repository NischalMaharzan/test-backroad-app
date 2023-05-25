import img1 from "./images/tour-1.jpeg";
import img2 from "./images/tour-2.jpeg";
import img3 from "./images/tour-3.jpeg";
import img4 from "./images/tour-4.jpeg";

export const pagelinks = [
  {
    id: 1,
    href: "#home",
    name: "Home",
  },
  {
    id: 2,
    href: "#about",
    name: "About",
  },
  {
    id: 3,
    href: "#services",
    name: "Services",
  },
  {
    id: 1,
    href: "#tours",
    name: "Tours",
  },
];

export const footerlinks = [
  {
    id: 1,
    href: "#home",
    name: "Home",
  },
  {
    id: 2,
    href: "#about",
    name: "About",
  },
  {
    id: 3,
    href: "#services",
    name: "Services",
  },
  {
    id: 1,
    href: "#tours",
    name: "Featured",
  },
];

export const sociallinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "Saving Money",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "Endless Hiking",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "Amazing Comfort",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia",
  },
];

export const tours = [
  {
    id: 1,
    date: "august 26th, 2020",
    heading: "Tibet Adventure",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "china",
    days: "6 days",
    price: "$2100",
    img: img1,
    icon: "fas fa-map",
  },
  {
    id: 2,
    date: "august 26th, 2020",
    heading: "october 1th, 2020",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "indonesia",
    days: "11 days",
    price: "$1400",
    img: img2,
    icon: "fas fa-map",
  },
  {
    id: 3,
    date: "september 15th, 2020",
    heading: "Hong Kong",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "hong kong",
    days: "8 days",
    price: "$5000",
    img: img3,
    icon: "fas fa-map",
  },
  {
    id: 4,
    date: "december 5th, 2019",
    heading: "kenya highlights",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "Kenya",
    days: "20 days",
    price: "$3300",
    img: img4,
    icon: "fas fa-map",
  },
];
