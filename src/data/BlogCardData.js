import blogcoverImg_1 from "../assets/blogCoverImg_1.jpg";
import blogcoverImg_2 from "../assets/blogcoverImg_2.jpg";
import blogcoverImg_3 from "../assets/blogcoverImg_3.jpg";
import blogcoverImg_4 from "../assets/blogcoverImg_4.jpg";
import blogcoverImg_5 from "../assets/blogcoverImg_5.jpg";
import blogcoverImg_6 from "../assets/blogcoverImg_6.jpg";
const titles = [
  "Top 6 AI Mobile App Design Tools & Trends for 2025",
  "8 Worst App Screenshot Design Mistakes Beginners Often Make",
  "Best Logo Color Combination Ideas for 2025 Brands",
  "What is the Difference between UCD and UX?",
  "What Is the Smallest Font? A Complete Guide to Tiny Type",
  "How to Create Outstanding EdTech Content and Products: Guide for 2025",
];

const imgs = [
  blogcoverImg_1,
  blogcoverImg_2,
  blogcoverImg_3,
  blogcoverImg_4,
  blogcoverImg_5,
  blogcoverImg_6,
];

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

export const blogCardData = Array.from({ length: 60 }).map((_, i) => ({
  id: i + 1,
  img: shuffle(imgs)[0], // random image each time
  description: titles[i % titles.length], // rotate titles
}));


